using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Table("Kanban", Schema = "Kanban")]
[Index("TeamId", "KanbanName", IsUnique = true)]
public partial class Kanban
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("team_id")]
    public int TeamId { get; set; }

    [Column("kanban_name")]
    [StringLength(100)]
    public string KanbanName { get; set; } = null!;

    [InverseProperty("Kanban")]
    public virtual ICollection<KanbanColumn> KanbanColumns { get; set; } = new List<KanbanColumn>();

    [ForeignKey("TeamId")]
    [InverseProperty("Kanbans")]
    public virtual Team Team { get; set; } = null!;
}