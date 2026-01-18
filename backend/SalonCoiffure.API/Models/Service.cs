namespace SalonCoiffure.API.Models;

public class Service
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Icon { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public List<string> Features { get; set; } = new();
    public string Category { get; set; } = string.Empty;
}
