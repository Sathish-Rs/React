using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication77.Models
{
    public class Reg
    {
        [Key]

        [DisplayName("Reg Id")]
        public int Reg_Id { get; set; }

        [Required(ErrorMessage ="Enter Name")]
        [DisplayName("Name")]
        public string name { get; set; }

        [DisplayName("Password")]
        public string password { get; set; }

        [NotMapped]
        [Compare("password",ErrorMessage ="Not Matched")]
        public string retypepassword { get; set; }
    }
}