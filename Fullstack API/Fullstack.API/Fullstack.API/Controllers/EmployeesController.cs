using Microsoft.AspNetCore.Mvc;

namespace Fullstack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        public EmployeesController() //with ctor bind to constructor
        {
            
        }

        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            
        }
    }
}
