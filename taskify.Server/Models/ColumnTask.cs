using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Table("ColumnTask", Schema = "Kanban")]
public partial class ColumnTask
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("column_id")]
    public int ColumnId { get; set; }

    [Column("task_id")]
    public int TaskId { get; set; }

    [ForeignKey("ColumnId")]
    public virtual KanbanColumn Column { get; set; } = null!;

    [ForeignKey("TaskId")]
    public virtual Task Task { get; set; } = null!;
}