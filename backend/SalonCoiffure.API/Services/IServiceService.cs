using SalonCoiffure.API.Models;

namespace SalonCoiffure.API.Services;

public interface IServiceService
{
    Task<IEnumerable<Service>> GetAllServicesAsync();
    Task<Service?> GetServiceByIdAsync(int id);
    Task<IEnumerable<Service>> GetServicesByCategoryAsync(string category);
}
