using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace WebApplication77.Models
{
    public class State
    {
        [Key]

        public int State_Id { get; set; }
        public string State_Name { get; set; }

    }
}