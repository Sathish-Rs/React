using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HTSPOSAPI.Models;

namespace HTSPOSAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly DataContext _context;

        public OrdersController(DataContext context)
        {
        
            _context = context;
            
        }

        
        // GET: api/Orders
        [HttpGet]
        public System.Object  Getorders()
        {

            var result = (from a in _context.orders
                          join b in _context.customers on a.CustomerId equals b.CustomerId

                          select new
                          {
                              a.OrderId,
                              a.OrderNumber,
                              customerId = b.CustomerName,
                              a.Total
                          }).ToList();
            return result;
            //return await _context.orders.ToListAsync();
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = (from a in _context.orders
                         where a.OrderId == id

                         select new
                         {
                             a.OrderId,
                             a.OrderNumber,
                             a.CustomerId,
                             a.Total,
                             DeletedOrderItemIDs =""
                         }).FirstOrDefault();

            var orderDetails = (from a in _context.orderDetails
                                join b in _context.products on a.itemId equals b.itemId
                                where a.OrderId == id

                                select new
                                {
                                    a.OrderId,
                                    a.OrderItemId,
                                    a.itemId,
                                    itemName = b.itemName,
                                    b.price,
                                    a.Qty,

                                    Total = a.Qty * b.price
                                }).ToList();

            
            if (order == null)
            {
                return NotFound();
            }

            return Ok(new { order, orderDetails });
        }

        // PUT: api/Orders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(int id, Order order)
        {
            if (id != order.OrderId)
            {
                return BadRequest();
            }

            _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Orders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            _context.orders.Add(order);

            if (order.OrderId == 0)
                _context.orders.Add(order);
            else
                _context.Entry(order).State = EntityState.Modified;

            //OrderItems table
            foreach (var item in order.OrderDetails)
            {
                if (item.OrderItemId == 0)
                    _context.orderDetails.Add(item);
                else
                    _context.Entry(item).State = EntityState.Modified;
            }

            foreach (var id in order.DeletedOrderItemIDs.Split(',').Where(x => x != ""))
            {
                //id = "23";
                var x = _context.orderDetails.Find(int.Parse(id));
                _context.orderDetails.Remove(x);
            }

            try
            { 
            await _context.SaveChangesAsync();
            }
            catch(Exception e)
            {
                string msg = e.Message;
            }
            return CreatedAtAction("GetOrder", new { id = order.OrderId }, order);
        }

        // DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            Order order = _context.orders.Include(y => y.OrderDetails)
                .SingleOrDefault(x => x.OrderId == id);

            foreach (var item in order.OrderDetails.ToList())
            {
                _context.orderDetails.Remove(item);
            }

            if (order == null)
            {
                return NotFound();
            }

            _context.orders.Remove(order);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrderExists(int id)
        {
            return _context.orders.Any(e => e.OrderId == id);
        }
    }
}
