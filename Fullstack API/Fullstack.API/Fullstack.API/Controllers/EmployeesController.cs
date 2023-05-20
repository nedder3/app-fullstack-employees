using Microsoft.AspNetCore.Mvc;

namespace Fullstack.API.Controllers
{
    [ApiController]
    public class EmployeesController : Controller
    {
        
        public IActionResult Index()
        {
            return View();
        }
    }
}
