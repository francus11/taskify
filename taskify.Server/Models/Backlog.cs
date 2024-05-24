using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Keyless]
[Table("Backlog", Schema = "Project")]
public partial class Backlog
{
    [Column("project_id")]
    public int ProjectId { get; set; }

    [Column("task_id")]
    public int TaskId { get; set; }

    [Column("team_id")]
    public int? TeamId { get; set; }

    [ForeignKey("ProjectId")]
    public virtual Project Project { get; set; } = null!;

    [ForeignKey("TaskId")]
    public virtual Task Task { get; set; } = null!;

    [ForeignKey("TeamId")]
    public virtual Team? Team { get; set; }
}