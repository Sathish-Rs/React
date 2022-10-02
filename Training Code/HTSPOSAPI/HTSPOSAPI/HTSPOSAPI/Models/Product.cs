using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HTSPOSAPI.Models
{
    public class Product
    {
        [Key]
        public int itemId { get; set; }
        public string itemName { get; set; }

        public int price { get; set; }
    }
}
