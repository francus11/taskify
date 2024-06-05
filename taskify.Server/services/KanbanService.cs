using taskify.Server.Models;
using System.Collections.Generic;
using System.Linq;

namespace taskify.Server.Services
{
    public class KanbanService : IKanbanService
    {
        private readonly Context _context;

        public KanbanService(Context context)
        {
            _context = context;
        }

        public IEnumerable<Kanban> GetProjectKanbans(int projectId)
        {
            return _context.Kanbans.Where(k => k.TeamId == projectId).ToList();
        }
    }
}
