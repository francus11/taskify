using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models
{
    [Table("Position", Schema = "Organization")]
    public class Position
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [MaxLength(25)]
        [Column("position_name")]
        public string PositionName { get; set; }

        [Required]
        [MaxLength(100)]
        [Column("description")]
        public string Description { get; set; }

        public ICollection<UserPosition> UserPositions { get; set; }
    }
}