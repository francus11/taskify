using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Keyless]
[Table("TaskConnection", Schema = "Task")]
public partial class TaskConnection
{
    [Column("parent_task_id")]
    public int ParentTaskId { get; set; }

    [Column("child_task_id")]
    public int ChildTaskId { get; set; }

    [Column("relation_id")]
    public int RelationId { get; set; }

    [ForeignKey("ChildTaskId")]
    public virtual Task ChildTask { get; set; } = null!;

    [ForeignKey("ParentTaskId")]
    public virtual Task ParentTask { get; set; } = null!;

    [ForeignKey("RelationId")]
    public virtual RelationType RelationType { get; set; } = null!;
}