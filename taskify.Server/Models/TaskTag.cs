﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace taskify.Server.Models;

[Table("Tag", Schema = "Task")]
public partial class TaskTag
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("project_id")]
    public int ProjectId { get; set; }

    [Column("name")]
    [StringLength(40)]
    public string Name { get; set; } = null!;

    [ForeignKey("ProjectId")]
    [InverseProperty("TaskTags")]
    [JsonIgnore]
    public virtual Project Project { get; set; } = null!;
}