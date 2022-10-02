using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
namespace WebApplication77.Models
{
    public class Customer
    {
        [Key]

        public int Customer_Id { get; set; }
        public string Customer_Name { get; set; }

        public string file { get; set; }
        public int? State_Id { get; set; }

       

        public State st { get; set; }

        public int? City_Id { get; set; }

        public City ct { get; set; }
    }
}