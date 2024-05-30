using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace taskify.Server.Controllers.Tasks
{
    public class TaskPostRequestBody
    {
        [Required]
        public int AuthorId {  get; set; }
        [Required]
        public string Title { get; set; }
        public string? Description { get; set; }
        public DateTime? DueTo { get; set; }
        [Required]
        public int Priority {  get; set; }
        [Required]
        public int Difficulty { get; set; }
        public string TagName { get; set; }
        [Required]
        public int ProjectId { get; set; }
    }
}
