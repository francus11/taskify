using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models
{
    [Table("RefreshToken", Schema = "User")]
    public class RefreshToken
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("user_id")]
        public int UserId { get; set; }
        [Column("token")]
        public string Token { get; set; } = null!;
        [Column("expire_date")]
        public DateTime ExpireDate { get; set; }
    }
}
