using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

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
    [JsonIgnore]
    public virtual User Author { get; set; } = null!;

    public virtual TaskDetails Details { get; set; }
}