using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HTSPOSAPI.Models
{
    public class OrderDetails
    {
        [Key]
        public int OrderItemId { get; set; }

        public int OrderId { get; set; }

        public Order order { get; set; }

        public int itemId { get; set; }

        public Product product { get; set; }

        public int Qty { get; set; }
    }
}
