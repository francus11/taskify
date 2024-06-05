using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using taskify.Server.Models;
using taskify.Server.Services;

namespace taskify.Server.Controllers.Teams
{
    [ApiController]
    [Route("api/[controller]")]
    public class TeamsController : ControllerBase
    {
        private readonly Context _context;
        private readonly ITeamService _teamService;
        private readonly IKanbanService _kanbanService;

        public TeamsController(Context context, ITeamService teamService, IKanbanService kanbanService)
        {
            _context = context;
            _teamService = teamService;
            _kanbanService = kanbanService;
        }

        [HttpPost("{teamId}/assign")]
        public IActionResult AssignUserToTeam(int teamId, [FromBody] AssignUserRequest request)
        {
            var result = _teamService.AssignUserToTeam(teamId, request.UserId);
            if (!result)
            {
                return BadRequest("Failed to assign the user to the team.");
            }
            return Ok("User successfully assigned to the team.");
        }

        [HttpGet("project/{projectId}/kanbans")]
        public ActionResult<IEnumerable<Kanban>> GetProjectKanbans(int projectId)
        {
            var kanbans = _kanbanService.GetProjectKanbans(projectId);
            return Ok(kanbans);
        }
    }

    public class AssignUserRequest
    {
        public int UserId { get; set; }
    }
}
