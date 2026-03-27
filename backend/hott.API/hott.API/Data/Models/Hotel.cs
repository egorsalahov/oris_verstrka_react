namespace hott.API.Data.Models
{
    public class Hotel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public decimal Price { get; set; }
        public string Nights { get; set; }
        public string Dates { get; set; }
        public string DepartureCity { get; set; }
        public string OutboundDate { get; set; }
        public Tourists Tourists { get; set; }
        public string Airline { get; set; }
        public int Stars { get; set; }
        public string Image { get; set; }
        public int RoomsCount { get; set; }
        public int BuiltYear { get; set; }
        public string Phone { get; set; }
        public string Website { get; set; }
        public Filters Amenities { get; set; }
        public Meals Meals { get; set; }
    }
}
