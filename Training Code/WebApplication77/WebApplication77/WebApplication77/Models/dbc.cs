using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace WebApplication77.Models
{
    public class dbc : DbContext
    {
        public DbSet<Reg> regs { get; set; }
        public DbSet<State> states { get; set; }
        public DbSet<City> cities { get; set; }
        public DbSet<Customer> customers { get; set; }
    }
}