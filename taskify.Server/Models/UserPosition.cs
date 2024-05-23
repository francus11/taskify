using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models
{
    [Table("UserPosition", Schema = "Organization")]
    public class UserPosition
    {
        [Column("organization_id")]
        public int OrganizationId { get; set; }

        [Column("user_id")]
        public int UserId { get; set; }

        [Column("position_id")]
        public int PositionId { get; set; }

        [ForeignKey("OrganizationId")]
        public Organization Organization { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }

        [ForeignKey("PositionId")]
        public Position Position { get; set; }
    }
}