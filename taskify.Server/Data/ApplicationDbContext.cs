using Microsoft.EntityFrameworkCore;
using taskify.Server.Models;

namespace taskify.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Organization> Organizations { get; set; }
        public DbSet<OrganizationOwner> OrganizationOwners { get; set; }
        public DbSet<Position> Positions { get; set; }
        public DbSet<UserPosition> UserPositions { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserData> UserDatas { get; set; }
        public DbSet<UserType> UserTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserPosition>()
                .HasKey(up => new { up.OrganizationId, up.UserId, up.PositionId });

            modelBuilder.Entity<OrganizationOwner>()
                .HasKey(oo => new { oo.OrganizationId, oo.UserId });
        }
    }
}
