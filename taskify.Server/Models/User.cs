using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models
{
    [Table("User", Schema = "User")]
    public class User
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        [Column("username")]
        public string Username { get; set; }

        [Required]
        [MaxLength(50)]
        [Column("email")]
        public string Email { get; set; }

        public UserData UserData { get; set; }
        public ICollection<UserPosition> UserPositions { get; set; }
        public ICollection<OrganizationOwner> OrganizationOwners { get; set; }
    }
}