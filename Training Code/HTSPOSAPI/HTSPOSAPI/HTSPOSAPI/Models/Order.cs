using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace HTSPOSAPI.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public string OrderNumber { get; set; }
        public int CustomerId { get; set; }

        public Customer Customer { get; set; }
        public int Total { get; set; }
        [NotMapped]
        public string DeletedOrderItemIDs { get; set; }
        public virtual ICollection<OrderDetails>  OrderDetails {get;set;}
    }
}
