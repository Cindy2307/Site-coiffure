using Microsoft.EntityFrameworkCore;
using SalonCoiffure.API.Data;
using SalonCoiffure.API.Models;

namespace SalonCoiffure.API.Services;

public class AppointmentService : IAppointmentService
{
    private readonly SalonDbContext _context;

    public AppointmentService(SalonDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Appointment>> GetAllAppointmentsAsync()
    {
        return await _context.Appointments
            .OrderByDescending(a => a.CreatedAt)
            .ToListAsync();
    }

    public async Task<Appointment?> GetAppointmentByIdAsync(int id)
    {
        return await _context.Appointments.FindAsync(id);
    }

    public async Task<Appointment> CreateAppointmentAsync(Appointment appointment)
    {
        appointment.CreatedAt = DateTime.UtcNow;
        appointment.Status = Status.Pending;
        
        _context.Appointments.Add(appointment);
        await _context.SaveChangesAsync();
        
        return appointment;
    }

    public async Task<bool> UpdateAppointmentStatusAsync(int id, Status status)
    {
        var appointment = await _context.Appointments.FindAsync(id);
        if (appointment == null)
            return false;

        appointment.Status = status;
        await _context.SaveChangesAsync();
        
        return true;
    }
}
