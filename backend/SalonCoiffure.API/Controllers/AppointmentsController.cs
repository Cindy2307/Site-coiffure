using Microsoft.AspNetCore.Mvc;
using SalonCoiffure.API.Models;
using SalonCoiffure.API.Services;

namespace SalonCoiffure.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AppointmentsController : ControllerBase
{
    private readonly IAppointmentService _appointmentService;

    public AppointmentsController(IAppointmentService appointmentService)
    {
        _appointmentService = appointmentService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
    {
        var appointments = await _appointmentService.GetAllAppointmentsAsync();
        return Ok(appointments);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Appointment>> GetAppointment(int id)
    {
        var appointment = await _appointmentService.GetAppointmentByIdAsync(id);
        if (appointment == null)
            return NotFound();

        return Ok(appointment);
    }

    [HttpPost]
    public async Task<ActionResult<Appointment>> CreateAppointment(Appointment appointment)
    {
        if (string.IsNullOrEmpty(appointment.Name) || 
            string.IsNullOrEmpty(appointment.Email) || 
            string.IsNullOrEmpty(appointment.Phone) || 
            string.IsNullOrEmpty(appointment.ServiceType))
        {
            return BadRequest("Les champs obligatoires doivent être remplis");
        }

        var createdAppointment = await _appointmentService.CreateAppointmentAsync(appointment);
        return CreatedAtAction(nameof(GetAppointment), new { id = createdAppointment.Id }, createdAppointment);
    }

    [HttpPut("{id}/status")]
    public async Task<IActionResult> UpdateAppointmentStatus(int id, [FromBody] Status status)
    {
        var result = await _appointmentService.UpdateAppointmentStatusAsync(id, status);
        if (!result)
            return NotFound();

        return NoContent();
    }
}
