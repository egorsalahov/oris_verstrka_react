using hott.API.Data;
using hott.API.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace hott.API.EF
{
    public class AppDbContext : DbContext
    {
        public DbSet<Tour> Tours { get; set; }

        public DbSet<Hotel> Hotels { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Hotel>(entity =>
            {
                entity.OwnsOne(h => h.Amenities);
                entity.OwnsOne(h => h.Meals);
                entity.OwnsOne(h => h.Tourists);
            });

            modelBuilder.Entity<Tour>()
                .HasOne(t => t.Hotel)
                .WithMany()
                .HasForeignKey(t => t.HotelId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
