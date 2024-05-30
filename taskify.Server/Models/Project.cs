using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace taskify.Server.Models;

[Table("Project", Schema = "Project")]
[Index("OrganizationId", "Name", IsUnique = true)]
public partial class Project
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("name")]
    [StringLength(100)]
    public string Name { get; set; } = null!;

    [Column("organization_id")]
    public int OrganizationId { get; set; }

    [Column("shortcut")]
    [StringLength(35)]
    public string? Shortcut { get; set; }

    [ForeignKey("OrganizationId")]
    [InverseProperty("Projects")]
    public virtual Organization Organization { get; set; } = null!;

    [InverseProperty("Project")]
    [JsonIgnore]
    public virtual ICollection<TaskTag> TaskTags { get; set; } = new List<TaskTag>();

    [InverseProperty("Project")]
    public virtual ICollection<Team> Teams { get; set; } = new List<Team>();
}