using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Table("Position", Schema = "Organization")]
public partial class OrganizationPosition
{
    [Key]
    [Column("ID")]
    public int Id { get; set; }

    [Column("position_name")]
    [StringLength(25)]
    public string PositionName { get; set; } = null!;

    [Column("description")]
    [StringLength(100)]
    public string Description { get; set; } = null!;

    [InverseProperty("OrganizationPosition")]
    public virtual ICollection<UserPosition> UserPositions { get; set; } = new List<UserPosition>();

}