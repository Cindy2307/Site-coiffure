using SalonCoiffure.API.Models;

namespace SalonCoiffure.API.Services;

public interface IAppointmentService
{
    Task<IEnumerable<Appointment>> GetAllAppointmentsAsync();
    Task<Appointment?> GetAppointmentByIdAsync(int id);
    Task<Appointment> CreateAppointmentAsync(Appointment appointment);
    Task<bool> UpdateAppointmentStatusAsync(int id, Status status);
}
