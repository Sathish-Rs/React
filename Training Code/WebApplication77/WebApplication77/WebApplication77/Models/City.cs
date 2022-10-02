using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
namespace WebApplication77.Models
{
    public class City
    {

        [Key]

        public int City_Id { get; set; }
        public string City_Name { get; set; }


        public int State_Id { get; set; }

        public State st { get; set; }
    }
}