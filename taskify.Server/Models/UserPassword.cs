using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Keyless]
[Table("UserPassword", Schema = "User")]
public partial class UserPassword
{
    [Column("user_id")]
    public int UserId { get; set; }

    [Column("password")]
    [StringLength(200)]
    public string Password { get; set; } = null!;

    [Column("expire_date")]
    public DateTime? ExpireDate { get; set; }

    [Column("is_expired")]
    public bool IsExpired { get; set; }

    [ForeignKey("UserId")]
    public virtual User User { get; set; } = null!;
}