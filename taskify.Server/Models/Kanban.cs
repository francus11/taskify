using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using taskify.Server.Controllers.Kanbans;

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
    public virtual ICollection<KanbanColumn> Columns { get; set; } = new List<KanbanColumn>();

    [ForeignKey("TeamId")]
    [InverseProperty("Kanbans")]
    public virtual Team Team { get; set; } = null!;

    public Kanban() { }

    public Kanban(KanbanPostRequestBody requestBody)
    {
        TeamId = requestBody.TeamId;
        KanbanName = requestBody.KanbanName;
        Columns.Add(new KanbanColumn
        {
            Name = "To do",
            Kanban = this
        });
        Columns.Add(new KanbanColumn
        {
            Name = "In progress",
            Kanban = this
        });
        Columns.Add(new KanbanColumn
        {
            Name = "Done",
            Kanban = this
        });
    }
}