using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models
{
    [Table("Organization", Schema = "Organization")]
    public class Organization
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        [Column("name")]
        public string Name { get; set; }

        public ICollection<OrganizationOwner> OrganizationOwners { get; set; }
        public ICollection<UserPosition> UserPositions { get; set; }
    }
}