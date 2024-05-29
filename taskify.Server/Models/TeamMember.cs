using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Keyless]
[Table("TeamMember", Schema = "Team")]
public partial class TeamMember
{
    [Column("team_id")]
    public int TeamId { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [ForeignKey("TeamId")]
    public virtual Team Team { get; set; } = null!;

    [ForeignKey("UserId")]
    public virtual User User { get; set; } = null!;
}