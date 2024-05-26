namespace taskify.Server.Controllers.Tasks
{
    public class TaskPutRequestBody
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
        public DateTime? DueTo { get; set; }
        public int? Priority { get; set; }
        public int? Difficulty { get; set; }
    }
}
