using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace taskify.Server.Models;

[Table("Column", Schema = "Kanban")]
public partial class KanbanColumn
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("kanban_id")]
    public int KanbanId { get; set; }

    [Column("name")]
    [StringLength(30)]
    public string Name { get; set; } = null!;

    [ForeignKey("KanbanId")]
    [InverseProperty("Columns")]
    [JsonIgnore]
    public virtual Kanban Kanban { get; set; } = null!;

    public virtual ICollection<Task> Tasks { get; set; } = new List<Task>();
}