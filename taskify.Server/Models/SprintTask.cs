using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Keyless]
[Table("SprintTask", Schema = "Sprint")]
public partial class SprintTask
{
    [Column("sprint_id")]
    public int SprintId { get; set; }

    [Column("task_id")]
    public int TaskId { get; set; }

    [ForeignKey("SprintId")]
    public virtual Sprint Sprint { get; set; } = null!;

    [ForeignKey("TaskId")]
    public virtual Task Task { get; set; } = null!;
}