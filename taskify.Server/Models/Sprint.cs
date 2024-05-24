using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Table("Sprint", Schema = "Sprint")]
public partial class Sprint
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("name")]
    [StringLength(120)]
    public string Name { get; set; } = null!;

    [Column("team_id")]
    public int? TeamId { get; set; }

    [Column("is_active")]
    public bool IsActive { get; set; }

    [Column("time_from", TypeName = "datetime")]
    public DateTime? TimeFrom { get; set; }

    [Column("time_to", TypeName = "datetime")]
    public DateTime? TimeTo { get; set; }

    [ForeignKey("TeamId")]
    [InverseProperty("Sprints")]
    public virtual Team? Team { get; set; }
}