using Microsoft.AspNetCore.Mvc;
using SalonCoiffure.API.Models;
using SalonCoiffure.API.Services;

namespace SalonCoiffure.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ServicesController : ControllerBase
{
    private readonly IServiceService _serviceService;

    public ServicesController(IServiceService serviceService)
    {
        _serviceService = serviceService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Service>>> GetServices()
    {
        var services = await _serviceService.GetAllServicesAsync();
        return Ok(services);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Service>> GetService(int id)
    {
        var service = await _serviceService.GetServiceByIdAsync(id);
        if (service == null)
            return NotFound();

        return Ok(service);
    }

    [HttpGet("category/{category}")]
    public async Task<ActionResult<IEnumerable<Service>>> GetServicesByCategory(string category)
    {
        var services = await _serviceService.GetServicesByCategoryAsync(category);
        return Ok(services);
    }
}
