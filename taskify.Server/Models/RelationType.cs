using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Table("RelationType", Schema = "Task")]
[Index("Relation", IsUnique = true)]
public partial class RelationType
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("relation")]
    [StringLength(30)]
    public string Relation { get; set; } = null!;
}