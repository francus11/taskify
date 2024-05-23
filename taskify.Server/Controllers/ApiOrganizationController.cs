using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using taskify.Server.Data;
using taskify.Server.Models;

namespace taskify.Server.Controllers
{
    [Route("api/organizations")]
    [ApiController]
    public class ApiOrganizationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ApiOrganizationController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<object>>> GetAllOrganizations()
        {
            var organizations = await _context.Organizations
                .Include(o => o.OrganizationOwners)
                .ThenInclude(oo => oo.User)
                .Select(o => new
                {
                    o.Id,
                    o.Name,
                    Username = o.OrganizationOwners.Select(oo => oo.User.Username).FirstOrDefault(),
                    Email = o.OrganizationOwners.Select(oo => oo.User.Email).FirstOrDefault()
                })
                .ToListAsync();

            return Ok(organizations);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<object>> GetOrganization(int id)
        {
            var organization = await _context.Organizations
                .Include(o => o.OrganizationOwners)
                .ThenInclude(oo => oo.User)
                .Where(o => o.Id == id)
                .Select(o => new
                {
                    o.Id,
                    o.Name,
                    Username = o.OrganizationOwners.Select(oo => oo.User.Username).FirstOrDefault(),
                    Email = o.OrganizationOwners.Select(oo => oo.User.Email).FirstOrDefault()
                })
                .FirstOrDefaultAsync();

            if (organization == null)
            {
                return NotFound("Organization not found.");
            }

            return Ok(organization);
        }

        [HttpGet("{id}/users")]
        public async Task<ActionResult<List<object>>> GetUsersInOrganization(int id)
        {
            var organization = await _context.Organizations
                .Include(o => o.UserPositions)
                .FirstOrDefaultAsync(o => o.Id == id);

            if (organization == null)
            {
                return NotFound("Organization not found.");
            }

            var usersInOrganization = await _context.UserPositions
                .Include(up => up.User)
                .ThenInclude(u => u.UserData)
                .Include(up => up.Position)
                .Where(up => up.OrganizationId == id)
                .Select(up => new
                {
                    OrganizationId = up.OrganizationId,
                    OrganizationName = up.Organization.Name,
                    Username = up.User.Username,
                    Email = up.User.Email,
                    PositionName = up.Position.PositionName,
                    Description = up.Position.Description
                })
                .ToListAsync();

            if (!usersInOrganization.Any())
            {
                return NotFound("No users found in the organization.");
            }

            return Ok(usersInOrganization);
        }

        [HttpGet("{organizationId}/users/{userId}")]
        public async Task<ActionResult<object>> GetUserInOrganization(int organizationId, int userId)
        {
            var organizationExists = await _context.Organizations.AnyAsync(o => o.Id == organizationId);
            if (!organizationExists)
            {
                return NotFound("Organization not found.");
            }

            var userExists = await _context.Users.AnyAsync(u => u.Id == userId);
            if (!userExists)
            {
                return NotFound("User not found.");
            }

            var userPosition = await _context.UserPositions
                .Include(up => up.User)
                .ThenInclude(u => u.UserData)
                .Include(up => up.Position)
                .Include(up => up.Organization)
                .Where(up => up.OrganizationId == organizationId && up.UserId == userId)
                .Select(up => new
                {
                    OrganizationId = up.OrganizationId,
                    OrganizationName = up.Organization.Name,
                    Username = up.User.Username,
                    Email = up.User.Email,
                    PositionName = up.Position.PositionName,
                    Description = up.Position.Description
                })
                .FirstOrDefaultAsync();

            if (userPosition == null)
            {
                return NotFound("User not found in this organization.");
            }

            return Ok(userPosition);
        }

        [HttpPost]
        public async Task<ActionResult<Organization>> AddOrganization([FromBody] string name)
        {
            var newOrganization = new Organization
            {
                Name = name
            };

            _context.Organizations.Add(newOrganization);
            await _context.SaveChangesAsync();

            return Created($"/api/organizations/{newOrganization.Id}", newOrganization);
        }

        [HttpPost("{organizationId}/users/{userId}/{positionId}")]
        public async Task<ActionResult> AddUserToOrganization(int organizationId, int userId, int positionId)
        {
            var organization = await _context.Organizations.FindAsync(organizationId);
            if (organization == null)
            {
                return NotFound("Organization not found.");
            }

            var user = await _context.Users.FindAsync(userId);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            var position = await _context.Positions.FindAsync(positionId);
            if (position == null)
            {
                return NotFound("Position not found.");
            }

            var userInOrganization = await _context.UserPositions
                .AnyAsync(up => up.OrganizationId == organizationId && up.UserId == userId);
            if (userInOrganization)
            {
                return BadRequest("User is already in the organization.");
            }

            var userPosition = new UserPosition
            {
                OrganizationId = organizationId,
                UserId = userId,
                PositionId = positionId
            };

            _context.UserPositions.Add(userPosition);
            await _context.SaveChangesAsync();

            var addedUserPosition = await _context.UserPositions
                .Include(up => up.User)
                .Include(up => up.Organization)
                .Include(up => up.Position)
                .Where(up => up.OrganizationId == organizationId && up.UserId == userId)
                .Select(up => new
                {
                    up.OrganizationId,
                    OrganizationName = up.Organization.Name,
                    Username = up.User.Username,
                    Email = up.User.Email,
                    PositionName = up.Position.PositionName,
                    PositionDescription = up.Position.Description
                })
                .FirstOrDefaultAsync();

            return Created($"/api/organizations/{organizationId}/users/{userId}", addedUserPosition);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateOrganizationName(int id, [FromBody] string newName)
        {
            var organization = await _context.Organizations.FindAsync(id);
            if (organization == null)
            {
                return NotFound("Organization not found.");
            }

            organization.Name = newName;
            await _context.SaveChangesAsync();

            return Ok(await _context.Organizations.ToListAsync());
        }
    }
}
