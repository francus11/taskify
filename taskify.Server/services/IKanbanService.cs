using System.Collections.Generic;
using taskify.Server.Models;

namespace taskify.Server.Services
{
    public interface IKanbanService
    {
        IEnumerable<Kanban> GetProjectKanbans(int projectId);
    }
}
