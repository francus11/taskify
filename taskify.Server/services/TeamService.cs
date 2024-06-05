using taskify.Server.Models;

namespace taskify.Server.Services
{
    public class TeamService : ITeamService
    {
        private readonly Context _context;

        public TeamService(Context context)
        {
            _context = context;
        }

        public bool AssignUserToTeam(int teamId, int userId)
        {
            var team = _context.Teams.Find(teamId);
            var user = _context.Users.Find(userId);
            
            if (team == null || user == null)
            {
                return false;
            }
            var teamMember = new TeamMember
            {
                TeamId = teamId,
                UserId = userId,
                Team = team,
                User = user
            };

            _context.TeamMembers.Add(teamMember);
            _context.SaveChanges();
            return true;
        }
    }
}
