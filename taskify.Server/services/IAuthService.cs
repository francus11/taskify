using NuGet.Protocol.Plugins;
using taskify.Server.Controllers.Auth;
using taskify.Server.Models;

namespace taskify.Server.Services
{
    public interface IAuthService
    {
        public Task<LoginResponse> Login(LoginUser user);
        public Task<LoginResponse> RefreshToken(RefreshTokenModel model);
        public Task<bool> RegisterUser(RegisterRequest request);
    }
}
