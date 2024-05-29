namespace taskify.Server.Controllers.Tasks
{
    public class TaskPostRequestBody
    {
        public int AuthorId {  get; set; }
        public string Title { get; set; }
        public string? Description { get; set; }
        public DateTime? DueTo { get; set; }
        public int Priority {  get; set; }
        public int Difficulty { get; set; }
        public string TagName { get; set; }
        public int ProjectId { get; set; }
    }
}
