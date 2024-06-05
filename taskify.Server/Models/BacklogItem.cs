namespace taskify.Server.Models
{
    public class BacklogItem
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public Project Project { get; set; }
        public string Description { get; set; }
    }
}
