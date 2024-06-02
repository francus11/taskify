using System.ComponentModel.DataAnnotations;

namespace taskify.Server.Models
{
    public class LoginUser
    {
        [Required]
        public required string UserName { get; set; }
        [Required]
        public required string Password { get; set; }
    }
}
