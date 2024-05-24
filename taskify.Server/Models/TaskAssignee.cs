using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Keyless]
[Table("TaskAssignee", Schema = "Task")]
public partial class TaskAssignee
{
    [Column("task_id")]
    public int TaskId { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [ForeignKey("TaskId")]
    public virtual Task Task { get; set; } = null!;

    [ForeignKey("UserId")]
    public virtual User User { get; set; } = null!;
}