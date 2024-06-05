namespace taskify.Server.Services
{
    public interface ITeamService
    {
        bool AssignUserToTeam(int teamId, int userId);
    }
}
