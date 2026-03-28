using hott.API.Data.Models;

namespace hott.API.Data
{
    public class Tour
    {
        public int Id { get; set; }
        public int HotelId { get; set; }

        public Hotel Hotel { get; set; }
    }
}
