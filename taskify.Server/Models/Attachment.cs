using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Table("Attachment", Schema = "Task")]
public partial class Attachment
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("extension")]
    [StringLength(15)]
    public string Extension { get; set; } = null!;

    [Column("link")]
    [StringLength(250)]
    public string Link { get; set; } = null!;
}