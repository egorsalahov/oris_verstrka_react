using hott.API.Data;
using hott.API.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace hott.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // Это базовый путь: api/tour
    public class FilterController : Controller
    {
        //api/tour/filters
        [HttpGet("filters")]
        public ActionResult<Filters> GetAllFilters()
        {
            return Ok(DataSeed.Filter);
        }
    }
}
