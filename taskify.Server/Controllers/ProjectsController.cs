using Microsoft.AspNetCore.Mvc;
using taskify.Server.Models;
using System.Collections.Generic;
using System.Linq;

namespace taskify.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly Context _context;

        public ProjectsController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Project>> GetProjects()
        {
            return _context.Projects.ToList();
        }

        [HttpGet("{projectId}")]
        public ActionResult<Project> GetProject(int projectId)
        {
            var project = _context.Projects.Find(projectId);

            if (project == null)
            {
                return NotFound();
            }

            return project;
        }

        [HttpPost]
        public ActionResult<Project> CreateProject(Project project)
        {
            _context.Projects.Add(project);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetProject), new { projectId = project.Id }, project);
        }

        [HttpPut("{projectId}")]
        public IActionResult UpdateProject(int projectId, Project project)
        {
            if (projectId != project.Id)
            {
                return BadRequest();
            }

            _context.Entry(project).State = Microsoft.EntityFrameworkCore.EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (Microsoft.EntityFrameworkCore.DbUpdateConcurrencyException)
            {
                if (!_context.Projects.Any(e => e.Id == projectId))
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

        [HttpDelete("{projectId}")]
        public IActionResult DeleteProject(int projectId)
        {
            var project = _context.Projects.Find(projectId);
            if (project == null)
            {
                return NotFound();
            }

            _context.Projects.Remove(project);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
