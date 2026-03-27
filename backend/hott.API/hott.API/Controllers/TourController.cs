using Microsoft.AspNetCore.Mvc;
using hott.API.Data;
using hott.API.Data.Models;

namespace hott.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // Это базовый путь: api/tour
    public class TourController : ControllerBase
    {
        //api/tour
        [HttpGet]
        public ActionResult<List<Hotel>> GetAllHotels()
        {
            return Ok(DataSeed.Hotels);
        }

        //api/tour
        [HttpGet("search")]
        public ActionResult<List<Hotel>> GetAllHotelsByQuery([FromQuery] HotelQueryParameters query)
        {
            var result = DataSeed.Hotels.AsQueryable();

            // Город вылета (Departure)
            if (!string.IsNullOrEmpty(query.Departure))
            {
                result = result.Where(h => h.DepartureCity.Contains(query.Departure, StringComparison.OrdinalIgnoreCase));
            }

            // Страна (Country)
            if (!string.IsNullOrEmpty(query.Country))
            {
                result = result.Where(h => h.Country.Equals(query.Country, StringComparison.OrdinalIgnoreCase));
            }

            // Даты (Dates)
            if (!string.IsNullOrEmpty(query.Dates))
            {
                var cleanQueryDates = query.Dates.Replace(" ", "");
                result = result.Where(h => h.Dates.Replace(" ", "") == cleanQueryDates);
            }

            // Ночи (Nights)
            if (!string.IsNullOrEmpty(query.Nights))
            {
                var cleanQueryNights = query.Nights.Replace(" ", "");
                result = result.Where(h => h.Nights.Replace(" ", "") == cleanQueryNights);
            }

            // Туристы (Парсинг строки типа "2 взрослых 1 реб")
            if (!string.IsNullOrEmpty(query.Tourists))
            {
                // Вытаскиваем только число взрослых (первое слово в строке)
                var parts = query.Tourists.Split(' ');
                if (int.TryParse(parts[0], out int adultsCount))
                {
                    result = result.Where(h => h.Tourists.Adults == adultsCount);
                }
                
                // Опционально: если в строке есть "реб", можно проверять h.Tourists.Childrenы
                if (query.Tourists.Contains("реб"))
                {
                    result = result.Where(h => h.Tourists.Childrens > 0);
                }
            }

            // Удобства (Amenities) - фильтруем только если в запросе пришло true
            if (query.Amenities_wifi == true) result = result.Where(h => h.Amenities.Wifi);
            if (query.Amenities_tv == true) result = result.Where(h => h.Amenities.Tv);
            if (query.Amenities_airConditioner == true) result = result.Where(h => h.Amenities.AirConditioner);
            if (query.Amenities_shower == true) result = result.Where(h => h.Amenities.Shower);
            if (query.Amenities_slippers == true) result = result.Where(h => h.Amenities.Slippers);
            if (query.Amenities_miniBar == true) result = result.Where(h => h.Amenities.MiniBar);
            if (query.Amenities_phone == true) result = result.Where(h => h.Amenities.Phone);
            if (query.Amenities_heating == true) result = result.Where(h => h.Amenities.Heating);

            return Ok(result.ToList());
        }


        //api/tour/1
        [HttpGet("{id}")]
        public ActionResult<Hotel> GetById(int id)
        {
            var tour = DataSeed.Hotels.FirstOrDefault(x => x.Id == id);
            if (tour == null) return NotFound();
            return Ok(tour);
        }
    }
}