namespace SalonCoiffure.API.Models;

public class Appointment
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string ServiceType { get; set; } = string.Empty;
    public string? Message { get; set; }
    public DateTime RequestedDate { get; set; }
    public DateTime CreatedAt { get; set; }
    public Status Status { get; set; } = Status.Pending;
}

public enum Status
{
    Pending,
    Confirmed,
    Cancelled,
    Completed
}
