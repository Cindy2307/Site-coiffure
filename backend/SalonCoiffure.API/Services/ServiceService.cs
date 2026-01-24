using Microsoft.EntityFrameworkCore;
using SalonCoiffure.API.Data;
using SalonCoiffure.API.Models;

namespace SalonCoiffure.API.Services;

public class ServiceService : IServiceService
{
    private readonly SalonDbContext _context;

    public ServiceService(SalonDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Service>> GetAllServicesAsync()
    {
        return await _context.Services.ToListAsync();
    }

    public async Task<Service?> GetServiceByIdAsync(int id)
    {
        return await _context.Services.FindAsync(id);
    }

    public async Task<IEnumerable<Service>> GetServicesByCategoryAsync(string category)
    {
        return await _context.Services
            .Where(s => s.Category.Equals(category, StringComparison.OrdinalIgnoreCase))
            .ToListAsync();
    }
}
