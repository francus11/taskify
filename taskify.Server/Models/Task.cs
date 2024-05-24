using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Table("Task", Schema = "Task")]
public partial class Task
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("author")]
    public int AuthorId { get; set; }

    [ForeignKey("AuthorId")]
    [InverseProperty("Tasks")]
    public virtual User User { get; set; } = null!;
}