using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Keyless]
[Table("AttachmentTask", Schema = "Task")]
public partial class AttachmentTask
{
    [Column("attachment_id")]
    public int AttachmentId { get; set; }

    [Column("task_id")]
    public int TaskId { get; set; }

    [ForeignKey("AttachmentId")]
    public virtual Attachment Attachment { get; set; } = null!;

    [ForeignKey("TaskId")]
    public virtual Task Task { get; set; } = null!;
}