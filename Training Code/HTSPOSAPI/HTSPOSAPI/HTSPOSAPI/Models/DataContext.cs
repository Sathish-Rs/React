using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HTSPOSAPI.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }

        public DbSet<State> states { get; set; }

        public DbSet<City> Cities { get; set; }

        public DbSet<Customer> customers { get; set; }

        public DbSet<Product> products { get; set; }
          
        public DbSet<Order> orders { get; set; }
        public DbSet<OrderDetails> orderDetails { get; set; }
    }
}
