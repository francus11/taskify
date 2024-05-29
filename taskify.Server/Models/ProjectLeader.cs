using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Keyless]
[Table("Leader", Schema = "Project")]
public partial class ProjectLeader
{
    [Column("project_id")]
    public int ProjectId { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [ForeignKey("ProjectId")]
    public virtual Project Project { get; set; } = null!;

    [ForeignKey("UserId")]
    public virtual User User { get; set; } = null!;
}