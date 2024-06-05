using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Table("User", Schema = "User")]
[Index("Email", IsUnique = true)]
[Index("Username", IsUnique = true)]
public partial class User
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("username")]
    [StringLength(50)]
    public string Username { get; set; } = null!;

    [Column("email")]
    [StringLength(50)]
    public string Email { get; set; } = null!;

    [Column("type")]
    public int? Type { get; set; }

    [InverseProperty("User")]
    public virtual ICollection<OrganizationOwner> OrganizationOwners { get; set; } = new List<OrganizationOwner>();

    [InverseProperty(nameof(Task.Author))]
    public virtual ICollection<Task> Tasks { get; set; } = new List<Task>();

    [ForeignKey("Type")]
    [InverseProperty("Users")]
    public virtual UserType? UserType { get; set; }
    public virtual UserData UserData { get; set; }

    public virtual ICollection<UserPassword> Passwords { get; set; } = new List<UserPassword>();

    public virtual ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();

    [InverseProperty("User")]
    public virtual ICollection<UserPosition> UserPositions { get; set; } = new List<UserPosition>();

    public virtual ICollection<TeamMember> TeamMembers { get; set; } = new List<TeamMember>();

}