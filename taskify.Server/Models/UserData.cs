using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models
{
    [Table("UserData", Schema = "User")]
    public class UserData
    {
        [Key]
        [Column("user_id")]
        public int UserId { get; set; }

        [MaxLength(50)]
        [Column("name")]
        public string? Name { get; set; }

        [MaxLength(50)]
        [Column("surname")]
        public string? Surname { get; set; }

        [MaxLength(20)]
        [Column("phone_number")]
        public string? PhoneNumber { get; set; }

        [MaxLength(150)]
        [Column("user_photo")]
        public string? UserPhoto { get; set; }

        [Column("language_id")]
        public int? LanguageId { get; set; }

        [Column("user_type")]
        public int? UserType { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }

        [ForeignKey("UserType")]
        public UserType UserTypeNavigation { get; set; }
    }
}