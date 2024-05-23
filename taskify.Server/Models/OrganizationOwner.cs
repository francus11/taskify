using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models
{
    [Table("OrganizationOwner", Schema = "Organization")]
    public class OrganizationOwner
    {
        [Column("organization_id")]
        public int OrganizationId { get; set; }

        [Column("user_id")]
        public int UserId { get; set; }

        [ForeignKey("OrganizationId")]
        public Organization Organization { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}