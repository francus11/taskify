namespace taskify.Server.Controllers.Kanbans
{
    public class KanbanPostRequestBody
    {
        public int TeamId { get; set; }
        public string KanbanName { get; set; }
    }
}
