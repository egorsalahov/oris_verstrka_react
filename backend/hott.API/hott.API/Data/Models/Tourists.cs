using Microsoft.EntityFrameworkCore;

namespace hott.API.Data.Models
{
    [Owned]
    public class Tourists
    {
        public int Adults { get; set; }
        public int Childrens { get; set; } 
    }
}
