using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using taskify.Server.Controllers.Auth;
using taskify.Server.Models;

namespace taskify.Server.Services
{
    public class AuthService : IAuthService
    {
        private readonly IConfiguration _config;
        private readonly Context _context;
        private readonly TimeSpan _tokenExpirationTime;
        private readonly TimeSpan _refreshTokenExpirationTime;

        public AuthService(IConfiguration config, Context context)
        {
            _config = config;
            _context = context;

            double tokenExpirationInMinutes;
            if (Double.TryParse(_config.GetSection("Jwt:TokenExpirationInMinutes").Value, out tokenExpirationInMinutes))
            {
                tokenExpirationInMinutes = 30D;
            }
            _tokenExpirationTime = TimeSpan.FromMinutes(tokenExpirationInMinutes);


            double refreshTokenExpirationInMinutes;
            if (Double.TryParse(_config.GetSection("Jwt:RefreshTokenExpirationInMinutes").Value, out refreshTokenExpirationInMinutes))
            {
                refreshTokenExpirationInMinutes = 10080D;
            }
            _refreshTokenExpirationTime = TimeSpan.FromMinutes(refreshTokenExpirationInMinutes);
        }

        public async Task<bool> RegisterUser(RegisterRequest request)
        {
            _context.Users.Add(new User
            {
                Email = request.Email,
                Username = request.UserName,
                Passwords = new List<UserPassword>
                {
                    new UserPassword
                    {
                        Password = request.Password,
                        IsExpired = false
                    }
                }
            });

            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<LoginResponse> Login(LoginUser user)
        {
            var response = new LoginResponse();
            var searchUser = _context.Users.Include(x => x.Passwords).FirstOrDefault(x => x.Username == user.UserName);
            if (searchUser == null || searchUser.Passwords.Any(x => x.Password == user.Password) == false)
            {
                return response;
            }

            response.IsLogedIn = true;
            response.JwtToken = this.GenerateTokenString(searchUser.Username);
            response.RefreshToken = this.GenerateRefreshTokenString();

            searchUser.RefreshTokens.Add(new RefreshToken()
            {
                Token = response.RefreshToken,
                ExpireDate = DateTime.Now.AddDays(14)
            });

            await _context.SaveChangesAsync();

            return response;

        }

        public async Task<LoginResponse> RefreshToken(RefreshTokenModel model)
        {
            var principal = GetTokenPrincipal(model.JwtToken);

            var response = new LoginResponse();
            if (principal?.Identity?.Name is null)
                return response;

            var user = _context.Users.Include(x => x.RefreshTokens).FirstOrDefault(x => x.Username == principal.Identity.Name);

            if (user is null || user.RefreshTokens.FirstOrDefault(r => r.Token == model.RefreshToken && r.ExpireDate > DateTime.Now) == null)
            {
                return response;
            }

            response.IsLogedIn = true;
            response.JwtToken = this.GenerateTokenString(user.Username);
            response.RefreshToken = this.GenerateRefreshTokenString();

            user.RefreshTokens.Add(new RefreshToken()
            {
                Token = response.RefreshToken,
                ExpireDate = DateTime.Now.AddDays(14)
            });
            user.RefreshTokens.Remove(user.RefreshTokens.FirstOrDefault(r => r.Token == model.RefreshToken));

            _context.Users.Update(user);

            return response;
        }

        public ClaimsPrincipal? GetTokenPrincipal(string token)
        {

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("Jwt:Key").Value));

            var validation = new TokenValidationParameters
            {
                IssuerSigningKey = securityKey,
                ValidateLifetime = false,
                ValidateActor = false,
                ValidateIssuer = false,
                ValidateAudience = false,
            };
            return new JwtSecurityTokenHandler().ValidateToken(token, validation, out _);
        }

        private string GenerateRefreshTokenString()
        {
            var randomNumber = new byte[64];

            using (var numberGenerator = RandomNumberGenerator.Create())
            {
                numberGenerator.GetBytes(randomNumber);
            }

            return Convert.ToBase64String(randomNumber);
        }

        private string GenerateTokenString(string userName)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name,userName),
                new Claim("role","User"),
            };

            var staticKey = _config.GetSection("Jwt:Key").Value;
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(staticKey));
            var signingCred = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);

            var securityToken = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: signingCred
                );

            string tokenString = new JwtSecurityTokenHandler().WriteToken(securityToken);
            return tokenString;
        }
    }
}
