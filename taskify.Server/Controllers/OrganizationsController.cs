using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using taskify.Server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace taskify.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizationsController : ControllerBase
    {
        private readonly Context _context;

        public OrganizationsController(Context context)
        {
            _context = context;
        }

        // GET: api/Organizations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetOrganizations()
        {
            var organizations = await _context.Organizations
                .Include(o => o.OrganizationOwner)
                .ThenInclude(oo => oo.User)
                .Select(o => new
                {
                    o.Id,
                    o.Name,
                    OwnerUsername = o.OrganizationOwner.User.Username,
                    OwnerEmail = o.OrganizationOwner.User.Email
                })
                .ToListAsync();

            return organizations;
        }

        // GET: api/Organizations/1
        [HttpGet("{id}")]
        public async Task<ActionResult<object>> GetOrganization(int id)
        {
            var organization = await _context.Organizations
                .Include(o => o.OrganizationOwner)
                .ThenInclude(oo => oo.User)
                .Where(o => o.Id == id)
                .Select(o => new
                {
                    o.Id,
                    o.Name,
                    OwnerUsername = o.OrganizationOwner.User.Username,
                    OwnerEmail = o.OrganizationOwner.User.Email
                })
                .FirstOrDefaultAsync();

            if (organization == null)
            {
                return NotFound();
            }

            return organization;
        }

        // POST: api/Organizations
        [HttpPost]
        public async Task<ActionResult<Organization>> PostOrganization(string name)
        {
            Organization organization = new Organization(name);
            _context.Organizations.Add(organization);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrganization", new { id = organization.Id }, organization);
        }

        // PUT: api/Organizations/1
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrganization(int id, string name)
        {
            var organization = await _context.Organizations
                .FirstOrDefaultAsync(t => t.Id == id);
            if (organization == null)
            {
                return BadRequest();
            }
            organization.Name = name ?? organization.Name;

            _context.Entry(organization).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Organizations.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        // GET: api/1/Users
        [HttpGet("{id}/Users")]
        public async Task<ActionResult<IEnumerable<object>>> GetUsersInOrganization(int id)
        {
            var organization = await _context.Organizations
                .Include(o => o.UserPositions)
                .ThenInclude(up => up.User)
                .ThenInclude(u => u.UserData)
                .Include(o => o.UserPositions)
                .ThenInclude(up => up.OrganizationPosition)
                .FirstOrDefaultAsync(o => o.Id == id);

            if (organization == null)
            {
                return NotFound("Organization not found.");
            }

            var usersInOrganization = organization.UserPositions
                .Select(up => new
                {
                    up.OrganizationId,
                    OrganizationName = up.Organization.Name,
                    Username = up.User.Username,
                    Email = up.User.Email,
                    PositionName = up.OrganizationPosition.PositionName,
                    Description = up.OrganizationPosition.Description
                })
                .ToList();

            if (!usersInOrganization.Any())
            {
                return NotFound("No users found in the organization.");
            }

            return usersInOrganization;
        }
    }
}