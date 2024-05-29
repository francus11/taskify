using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Keyless]
[Table("TeamDetails", Schema = "Team")]
public partial class TeamDetails
{
    [Column("team_id")]
    public int TeamId { get; set; }

    [Column("name")]
    [StringLength(150)]
    public string Name { get; set; } = null!;

    [Column("description")]
    [StringLength(500)]
    public string? Description { get; set; }

    [Column("logo")]
    [StringLength(250)]
    public string? Logo { get; set; }

    [ForeignKey("TeamId")]
    public virtual Team Team { get; set; } = null!;
}