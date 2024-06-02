using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskify.Server.Models;

[Table("UserData", Schema = "User")]
[Index("UserId", IsUnique = true)]
public partial class UserData
{
    [Column("user_id")]
    public int UserId { get; set; }

    [Column("name")]
    [StringLength(50)]
    public string? Name { get; set; }

    [Column("surname")]
    [StringLength(50)]
    public string? Surname { get; set; }

    [Column("phone_number")]
    [StringLength(20)]
    public string? PhoneNumber { get; set; }

    [Column("user_photo")]
    [StringLength(150)]
    public string? UserPhoto { get; set; }

}