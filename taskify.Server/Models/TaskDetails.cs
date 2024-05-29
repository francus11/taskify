using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;


[Table("Details", Schema = "Task")]
public partial class TaskDetails
{
    [Key]
    [Column("task_id")]
    public int TaskId { get; set; }

    [Column("title")]
    [StringLength(100)]
    public string Title { get; set; } = null!;

    [Column("description")]
    [StringLength(4000)]
    public string? Description { get; set; }

    [Column("due_to", TypeName = "datetime")]
    public DateTime? DueTo { get; set; }

    [Column("is_completed")]
    public bool IsCompleted { get; set; }

    [Column("tag_id")]
    public int? TagId { get; set; }

    [Column("priority")]
    public int? Priority { get; set; }

    [Column("difficulty")]
    public int? Difficulty { get; set; }

    [ForeignKey("TagId")]
    public virtual TaskTag? TaskTag { get; set; }

}