export interface Appointment {
  id?: number;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message?: string;
  requestedDate?: Date;
  createdAt?: Date;
  status?: 'Pending' | 'Confirmed' | 'Cancelled' | 'Completed';
}
