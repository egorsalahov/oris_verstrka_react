namespace hott.API.Data.Models
{
    public class Hotel
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Nights { get; set; } = string.Empty;
        public string Dates { get; set; } = string.Empty;
        public string DepartureCity { get; set; } = string.Empty;
        public string OutboundDate { get; set; } = string.Empty;
        public string Airline { get; set; } = string.Empty;
        public int Stars { get; set; }
        public string Image { get; set; } = string.Empty;
        public int RoomsCount { get; set; }
        public int BuiltYear { get; set; }
        public string Phone { get; set; } = string.Empty;
        public string Website { get; set; } = string.Empty;


        public Tourists Tourists { get; set; } = new();
        public Filters Amenities { get; set; } = new();
        public Meals Meals { get; set; } = new();
    }
}
