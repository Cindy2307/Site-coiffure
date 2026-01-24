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
    // Images locales du dossier coiffure
    '/assets/pexels-enginakyurt-3065096.jpg', // Coiffure homme
    '/assets/pexels-anthonyshkraba-production-8973500.jpg',
    '/assets/pexels-cottonbro-3998413.jpg',
    '/assets/pexels-maksgelatin-4422102.jpg', // Image avec cheveux violets
    '/assets/pexels-orione-conceicao-1531154-3014937.jpg',
    '/assets/pexels-ralph-rabago-3290886.jpg' // Nouvelle image ajoutée
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
            features: ["Shampooing", "Coupe", "Brushing"],
            category: "Coupe"
          },
          {
            id: 2,
            name: "Coloration",
            description: "Colorations personnalisées, balayages et mèches pour sublimer votre chevelure.",
            icon: "🎨",
            price: 65,
            features: ["Diagnostics couleur", "Application", "Soins post-coloration"],
            category: "Coloration"
          },
          {
            id: 3,
            name: "Balayage",
            description: "Mèches personnalisées pour un effet naturel et lumineux.",
            icon: "🎨",
            price: 85,
            features: ["Préparation", "Mèches personnalisées", "Brushing final"],
            category: "Coloration"
          },
          {
            id: 4,
            name: "Soins Capillaires",
            description: "Soins profonds pour nourrir, réparer et protéger la santé de vos cheveux.",
            icon: "💆‍♀️",
            price: 40,
            features: ["Diagnostic capillaire", "Soin profond", "Massage"],
            category: "Soins"
          },
          {
            id: 5,
            name: "Coiffure Événementielle",
            description: "Coiffures sophistiquées pour mariages, soirées et occasions spéciales.",
            icon: "👰",
            price: 120,
            features: ["Consultation", "Essai", "Coiffure finale"],
            category: "Événement"
          },
          {
            id: 6,
            name: "Coupe Homme",
            description: "Coupes précises et modernes pour hommes avec finition soignée.",
            icon: "✂️",
            price: 30,
            features: ["Shampooing", "Coupe précise", "Finition"],
            category: "Coupe"
          },
          {
            id: 7,
            name: "Barber Shop - Coupe Classique",
            description: "Coupe traditionnelle de barbier avec rasage à la lame pour une finition parfaite.",
            icon: "🪒",
            price: 35,
            features: ["Coupe précise", "Rasage nuque", "Soins après rasage"],
            category: "Barber"
          },
          {
            id: 8,
            name: "Barber Shop - Coupe + Barbe",
            description: "Service complet barbier : coupe de cheveux et entretien de la barbe.",
            icon: "🪒",
            price: 55,
            features: ["Coupe cheveux", "Taille barbe", "Contour barbe", "Huile à barbe"],
            category: "Barber"
          },
          {
            id: 9,
            name: "Barber Shop - Rasage Traditionnel",
            description: "Rasage complet à la lame chaude avec serviette chaude et soins premium.",
            icon: "🪒",
            price: 40,
            features: ["Préparation peau", "Rasage à la lame", "Serviette chaude", "Baume apaisant"],
            category: "Barber"
          },
          {
            id: 10,
            name: "Barber Shop - Soins Barbe",
            description: "Entretien complet de la barbe avec produits professionnels.",
            icon: "🪒",
            price: 25,
            features: ["Nettoyage", "Taille", "Contour", "Huile nourrissante"],
            category: "Barber"
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

  getWomenServices(): Service[] {
    return this.services.filter(service => 
      (service.category === 'Coupe' && !service.name.toLowerCase().includes('homme')) || 
      service.category === 'Coloration' || 
      service.category === 'Soins' || 
      service.category === 'Événement'
    );
  }

  getMenServices(): Service[] {
    return this.services.filter(service => 
      service.category === 'Barber' || 
      service.name.toLowerCase().includes('homme')
    );
  }
}
