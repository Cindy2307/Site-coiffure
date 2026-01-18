import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';
import { ServiceService } from '../services/service.service';
import { Appointment } from '../models/appointment.model';
import { Service } from '../models/service.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  appointment: Appointment = {
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  };
  
  services: Service[] = [];
  loading = false;
  submitted = false;
  error: string | null = null;
  success: string | null = null;

  constructor(
    private appointmentService: AppointmentService,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.serviceService.getServices().subscribe({
      next: (data: Service[]) => {
        this.services = data;
      },
      error: (err: any) => {
        console.error('Error loading services:', err);
      }
    });
  }

  onSubmit(): void {
    if (!this.validateForm()) {
      return;
    }

    this.loading = true;
    this.error = null;
    this.success = null;

    this.appointmentService.createAppointment(this.appointment).subscribe({
      next: (response: Appointment) => {
        this.success = 'Votre demande de rendez-vous a été envoyée avec succès! Nous vous contacterons rapidement.';
        this.submitted = true;
        this.loading = false;
        this.resetForm();
      },
      error: (err: any) => {
        this.error = 'Erreur lors de l\'envoi de votre demande. Veuillez réessayer.';
        this.loading = false;
        console.error('Error creating appointment:', err);
      }
    });
  }

  validateForm(): boolean {
    if (!this.appointment.name || !this.appointment.email || !this.appointment.phone || !this.appointment.serviceType) {
      this.error = 'Veuillez remplir tous les champs obligatoires';
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.appointment.email)) {
      this.error = 'Veuillez entrer une adresse email valide';
      return false;
    }

    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(this.appointment.phone)) {
      this.error = 'Veuillez entrer un numéro de téléphone valide';
      return false;
    }

    return true;
  }

  resetForm(): void {
    this.appointment = {
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      message: ''
    };
  }
}
