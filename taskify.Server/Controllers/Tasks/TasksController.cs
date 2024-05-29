using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using taskify.Server.Models;

namespace taskify.Server.Controllers.Tasks
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly Context _context;

        public TasksController(Context context)
        {
            _context = context;
        }

        // GET: api/Tasks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Models.Task>>> GetTasks()
        {
            return await _context.Tasks
                .Include(t => t.Details)
                .ToListAsync();
        }

        // GET: api/Tasks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Models.Task>> GetTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            return task;
        }

        // PUT: api/Tasks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTask(int id, TaskPutRequestBody requestBody)
        {
            var task = await _context.Tasks
            .Include(t => t.Details)
            .FirstOrDefaultAsync(t => t.Id == id);
            if (task == null)
            {
                return BadRequest();
            }
            task.Details.Title = requestBody.Title ?? task.Details.Title;
            task.Details.Description = requestBody.Description ?? task.Details.Description;
            task.Details.DueTo = requestBody.DueTo.HasValue ? requestBody.DueTo.Value : task.Details.DueTo;
            task.Details.Priority = requestBody.Priority.HasValue ? requestBody.Priority.Value : task.Details.Priority;
            task.Details.Difficulty = requestBody.Difficulty.HasValue ? requestBody.Difficulty.Value : task.Details.Difficulty;

            _context.Entry(task).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskExists(id))
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

        // POST: api/Tasks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<Models.Task>> PostTask(TaskPostRequestBody requestBody)
        {
            Models.Task task = new Models.Task()
            {
                AuthorId = requestBody.AuthorId
            };
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();


            TaskTag taskTag = new TaskTag()
            {
                ProjectId = requestBody.ProjectId,
                Name = requestBody.TagName
            };
            _context.TaskTags.Add(taskTag);
            await _context.SaveChangesAsync();


            TaskDetails taskDetails = new TaskDetails()
            {
                TaskId = task.Id,
                Title = requestBody.Title,
                Description = requestBody.Description,
                DueTo = requestBody.DueTo,
                IsCompleted = false,
                Priority = requestBody.Priority,
                Difficulty = requestBody.Difficulty,
                TagId = taskTag.Id
            };
            _context.TaskDetails.Add(taskDetails);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTask", new { id = task.Id }, task);
        }

        // DELETE: api/Tasks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TaskExists(int id)
        {
            return _context.Tasks.Any(e => e.Id == id);
        }
    }
}
