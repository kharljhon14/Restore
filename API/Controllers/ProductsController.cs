using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        public readonly StoreContext context;
        public ProductsController(StoreContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            List<Product> products = context.Products.ToList();

            return Ok(products);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            return context.Products.Find(id);
        }
    }
}