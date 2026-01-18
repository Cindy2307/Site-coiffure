import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Service } from '../models/service.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services: Service[] = [];
  loading = true;

  galleryImages = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1562322145-93f6ab6b7b9b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1562322145-93f6ab6b7b9b?w=400&h=300&fit=crop'
  ];

  constructor(
    private router: Router,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.loading = true;
    this.serviceService.getServices().subscribe({
      next: (data: Service[]) => {
        console.log('Services loaded:', data); // Debug log
        this.services = data;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error loading services:', err);
        this.loading = false;
        // Fallback data for testing
        this.services = [
          {
            id: 1,
            name: "Coupe & Coiffure",
            description: "Coupes modernes et classiques adaptées à votre morphologie et votre style de vie.",
            icon: "✂️",
            price: 45,
            features: ["Shampooing", "Coupe au bol", "Brushing"],
            category: "Coupe"
          },
          {
            id: 2,
            name: "Coupe Homme",
            description: "Coupes précises et modernes pour hommes avec finition soignée.",
            icon: "✂️",
            price: 30,
            features: ["Shampooing", "Coupe précise", "Finition"],
            category: "Coupe"
          },
          {
            id: 3,
            name: "Coloration",
            description: "Colorations personnalisées, balayages et mèches pour sublimer votre chevelure.",
            icon: "🎨",
            price: 65,
            features: ["Diagnostics couleur", "Application", "Soins post-coloration"],
            category: "Coloration"
          },
          {
            id: 4,
            name: "Balayage",
            description: "Mèches personnalisées pour un effet naturel et lumineux.",
            icon: "🎨",
            price: 85,
            features: ["Préparation", "Mèches personnalisées", "Brushing final"],
            category: "Coloration"
          },
          {
            id: 5,
            name: "Soins Capillaires",
            description: "Soins profonds pour nourrir, réparer et protéger la santé de vos cheveux.",
            icon: "💆‍♀️",
            price: 40,
            features: ["Diagnostic capillaire", "Soin profond", "Massage"],
            category: "Soins"
          },
          {
            id: 6,
            name: "Coiffure Événementielle",
            description: "Coiffures sophistiquées pour mariages, soirées et occasions spéciales.",
            icon: "👰",
            price: 120,
            features: ["Consultation", "Essai", "Coiffure finale"],
            category: "Événement"
          }
        ];
      }
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
