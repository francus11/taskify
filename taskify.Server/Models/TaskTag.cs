using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Table("Tag", Schema = "Task")]
public partial class TaskTag
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("project_id")]
    public int ProjectId { get; set; }

    [Column("name")]
    [StringLength(40)]
    public string Name { get; set; } = null!;

    [ForeignKey("ProjectId")]
    [InverseProperty("Tags")]
    public virtual Project Project { get; set; } = null!;
}