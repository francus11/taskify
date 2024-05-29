using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Table("OrganizationOwner", Schema = "Organization")]
public partial class OrganizationOwner
{
    [Key]
    [Column("organization_id")]
    public int OrganizationId { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [ForeignKey("OrganizationId")]
    [InverseProperty("OrganizationOwner")]
    public virtual Organization Organization { get; set; } = null!;

    [ForeignKey("UserId")]
    [InverseProperty("OrganizationOwners")]
    public virtual User User { get; set; } = null!;
}