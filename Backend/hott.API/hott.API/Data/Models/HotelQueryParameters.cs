public class HotelQueryParameters
{
    public string? Departure { get; set; }
    public string? Country { get; set; }
    public string? Dates { get; set; }
    public string? Nights { get; set; }
    public string? Tourists { get; set; } // Например: "2 взрослых 1 реб"

    // Параметры удобств
    public bool? Amenities_tv { get; set; }
    public bool? Amenities_slippers { get; set; }
    public bool? Amenities_shower { get; set; }
    public bool? Amenities_airConditioner { get; set; }
    public bool? Amenities_miniBar { get; set; }
    public bool? Amenities_phone { get; set; }
    public bool? Amenities_heating { get; set; }
    public bool? Amenities_wifi { get; set; }
}