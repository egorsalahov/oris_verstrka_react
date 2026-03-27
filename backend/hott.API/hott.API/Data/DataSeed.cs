using System.Text.Json;
using hott.API.Data.Models;

namespace hott.API.Data
{
    public static class DataSeed
    {
        public static List<Hotel> Hotels { get; set; } = new List<Hotel>();
        public static Filters Filter { get; set; } = new Filters();

        private static readonly JsonSerializerOptions _options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };

        // TODO: Заменить на относительный путь в будущем
        private const string BasePath = @"C:\Users\egors\source\repos\oris_verstrka_react\Frontend\public\api";

        public static void InitAll()
        {
            InitHotels();
            InitFilters();
        }

        private static void InitHotels()
        {
            string filePath = Path.Combine(BasePath, "tours.json");
            try
            {
                if (File.Exists(filePath))
                {
                    string jsonString = File.ReadAllText(filePath);
                    Hotels = JsonSerializer.Deserialize<List<Hotel>>(jsonString, _options) ?? new List<Hotel>();
                    Console.WriteLine($"[Data] Загружено отелей: {Hotels.Count}");
                }
            }
            catch (Exception ex) { Console.WriteLine($"Ошибка при загрузке отелей: {ex.Message}"); }
        }

        private static void InitFilters()
        {
            string filePath = Path.Combine(BasePath, "filters.json");
            try
            {
                if (File.Exists(filePath))
                {
                    string jsonString = File.ReadAllText(filePath);
                    Filter = JsonSerializer.Deserialize<Filters>(jsonString, _options) ?? new Filters();
                    Console.WriteLine("[Data] Фильтры успешно загружены.");
                }
                else
                {
                    Console.WriteLine("Файл filters.json не найден.");
                }
            }
            catch (Exception ex) { Console.WriteLine($"Ошибка при загрузке фильтров: {ex.Message}"); }
        }
    }
}