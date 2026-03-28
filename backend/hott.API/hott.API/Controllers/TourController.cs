using hott.API.Data;
using hott.API.Data.Models;
using hott.API.EF;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace hott.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // Это базовый путь: api/tour
    public class TourController : ControllerBase
    {
        private readonly AppDbContext _context;
        public TourController(AppDbContext context)
        {
            _context = context;
        }

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

        //create
        [HttpPost]
        public async Task<ActionResult<Hotel>> Create(Hotel hotel)
        {
            _context.Hotels.Add(hotel);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = hotel.Id }, hotel);
        }

        //delete
        [HttpDelete("{id}")]
        public async Task<ActionResult<Hotel>> Delete(int id)
        {
            var hotel = await _context.Hotels.FirstOrDefaultAsync(x => x.Id == id);

            if (hotel == null) return NotFound();

            _context.Hotels.Remove(hotel);

            await _context.SaveChangesAsync();

            return NoContent();
        }

        //update
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Hotel updatedHotel)
        {
            var hotel = await _context.Hotels.FirstOrDefaultAsync(x => x.Id == id);

            if (hotel == null) return NotFound();

            hotel.Title = updatedHotel.Title;
            hotel.Country = updatedHotel.Country;
            hotel.City = updatedHotel.City;
            hotel.Price = updatedHotel.Price;
            hotel.Nights = updatedHotel.Nights;
            hotel.Dates = updatedHotel.Dates;
            hotel.DepartureCity = updatedHotel.DepartureCity;
            hotel.OutboundDate = updatedHotel.OutboundDate;
            hotel.Airline = updatedHotel.Airline;
            hotel.Stars = updatedHotel.Stars;
            hotel.Image = updatedHotel.Image;
            hotel.RoomsCount = updatedHotel.RoomsCount;
            hotel.BuiltYear = updatedHotel.BuiltYear;
            hotel.Phone = updatedHotel.Phone;
            hotel.Website = updatedHotel.Website;


            hotel.Tourists.Adults = updatedHotel.Tourists.Adults;
            hotel.Tourists.Childrens = updatedHotel.Tourists.Childrens;

            hotel.Amenities.Tv = updatedHotel.Amenities.Tv;
            hotel.Amenities.Slippers = updatedHotel.Amenities.Slippers;
            hotel.Amenities.Shower = updatedHotel.Amenities.Shower;
            hotel.Amenities.AirConditioner = updatedHotel.Amenities.AirConditioner;
            hotel.Amenities.MiniBar = updatedHotel.Amenities.MiniBar;
            hotel.Amenities.Phone = updatedHotel.Amenities.Phone;
            hotel.Amenities.Heating = updatedHotel.Amenities.Heating;
            hotel.Amenities.Wifi = updatedHotel.Amenities.Wifi;

            hotel.Meals.Breakfast = updatedHotel.Meals.Breakfast;
            hotel.Meals.Lunch = updatedHotel.Meals.Lunch;
            hotel.Meals.Dinner = updatedHotel.Meals.Dinner;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Hotels.Any(e => e.Id == id)) return NotFound();
                else throw;
            }

            return NoContent(); 
        }

    }
}