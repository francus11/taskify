using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Keyless]
[Table("UserActivity", Schema = "User")]
public partial class UserActivity
{
    [Column("user_id")]
    public int UserId { get; set; }

    [Column("last_activity_time")]
    public DateTime LastActivityTime { get; set; }

    [ForeignKey("UserId")]
    public virtual User User { get; set; } = null!;
}