using Microsoft.EntityFrameworkCore;

namespace taskify.Server.Models;

public partial class Context : DbContext
{
    public Context()
    {
    }

    public Context(DbContextOptions<Context> options) : base(options)
    {
    }

    public virtual DbSet<Attachment> Attachments { get; set; }

    public virtual DbSet<AttachmentTask> AttachmentTasks { get; set; }

    public virtual DbSet<Backlog> Backlogs { get; set; }

    public virtual DbSet<KanbanColumn> KanbanColumns { get; set; }

    public virtual DbSet<ColumnTask> ColumnTasks { get; set; }

    public virtual DbSet<TaskDetails> TaskDetails { get; set; }

    public virtual DbSet<Kanban> Kanbans { get; set; }

    public virtual DbSet<ProjectLeader> ProjectLeaders { get; set; }

    public virtual DbSet<Organization> Organizations { get; set; }

    public virtual DbSet<OrganizationOwner> OrganizationOwners { get; set; }

    public virtual DbSet<OrganizationPosition> OrganizationPositions { get; set; }

    public virtual DbSet<Project> Projects { get; set; }

    public virtual DbSet<RelationType> RelationTypes { get; set; }

    public virtual DbSet<Sprint> Sprints { get; set; }

    public virtual DbSet<SprintTask> SprintTasks { get; set; }

    public virtual DbSet<TaskTag> TaskTags { get; set; }

    public virtual DbSet<Task> Tasks { get; set; }

    public virtual DbSet<TaskAssignee> TaskAssignees { get; set; }

    public virtual DbSet<TaskConnection> TaskConnections { get; set; }

    public virtual DbSet<Team> Teams { get; set; }

    public virtual DbSet<TeamDetails> TeamDetails { get; set; }

    public virtual DbSet<TeamMember> TeamMembers { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserActivity> UserActivities { get; set; }

    public virtual DbSet<UserData> UserData { get; set; }

    public virtual DbSet<UserPassword> UserPasswords { get; set; }

    public virtual DbSet<UserPosition> UserPositions { get; set; }

    public virtual DbSet<UserType> UserTypes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=taskify.database.windows.net;Database=taskify;User ID=user5;Password=TwojeHaslo123;");

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Task>()
            .HasOne(a => a.Details)
            .WithOne()
            .HasForeignKey<TaskDetails>(b => b.TaskId);
    }
}