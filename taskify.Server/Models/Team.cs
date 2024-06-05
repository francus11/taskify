using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Table("Team", Schema = "Team")]
public partial class Team
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("project_id")]
    public int ProjectId { get; set; }

    [InverseProperty("Team")]
    public virtual ICollection<Kanban> Kanbans { get; set; } = new List<Kanban>();

    [ForeignKey("ProjectId")]
    [InverseProperty("Teams")]
    public virtual Project Project { get; set; } = null!;

    [InverseProperty("Team")]
    public virtual ICollection<Sprint> Sprints { get; set; } = new List<Sprint>();
    public virtual ICollection<TeamMember> TeamMembers { get; set; } = new List<TeamMember>();
}