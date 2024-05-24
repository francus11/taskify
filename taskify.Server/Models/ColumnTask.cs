using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Keyless]
[Table("ColumnTask", Schema = "Kanban")]
public partial class ColumnTask
{
    [Column("column_id")]
    public int ColumnId { get; set; }

    [Column("task_id")]
    public int TaskId { get; set; }

    [ForeignKey("ColumnId")]
    public virtual KanbanColumn KanbanColumn { get; set; } = null!;

    [ForeignKey("TaskId")]
    public virtual Task Task { get; set; } = null!;
}