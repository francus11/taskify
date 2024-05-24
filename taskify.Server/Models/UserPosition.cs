using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Keyless]
[Table("UserPosition", Schema = "Organization")]
public partial class UserPosition
{
    [Column("organization_id")]
    public int OrganizationId { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [Column("position_id")]
    public int PositionId { get; set; }

    [ForeignKey("OrganizationId")]
    public virtual Organization Organization { get; set; } = null!;

    [ForeignKey("PositionId")]
    public virtual OrganizationPosition OrganizationPosition { get; set; } = null!;

    [ForeignKey("UserId")]
    public virtual User User { get; set; } = null!;
}