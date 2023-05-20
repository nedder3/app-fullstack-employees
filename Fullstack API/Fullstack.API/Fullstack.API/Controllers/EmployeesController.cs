using Fullstack.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace Fullstack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;

        public EmployeesController(FullStackDbContext fullStackDbContext) //with ctor bind to constructor
        {
            _fullStackDbContext = fullStackDbContext;
        }

        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            
        }
    }
}
