# Salon de Coiffure Élégance - .NET Core Angular

Une application web moderne pour un salon de coiffure développée avec .NET Core 10.0 et Angular 17, offrant une architecture propre et des fonctionnalités complètes.

## Architecture

### Backend (.NET Core Web API)
- **Framework**: .NET 10.0
- **Architecture**: Clean Architecture avec séparation des responsabilités
- **Base de données**: Entity Framework Core avec In-Memory Database (pour développement)
- **Structure**:
  - `Controllers/`: API endpoints
  - `Models/`: Entités de données
  - `Services/`: Logique métier
  - `Data/`: Configuration de la base de données et seeding

### Frontend (Angular 17)
- **Framework**: Angular 17 avec Standalone Components
- **Architecture**: Component-based avec services séparés
- **Structure**:
  - `app/components/`: Composants UI
  - `app/services/`: Services HTTP
  - `app/models/`: Interfaces TypeScript

## Fonctionnalités

### 🏠 Page d'accueil
- Hero section avec appel à l'action
- Design moderne et responsive

### 💇‍♀️ Services
- Affichage dynamique des services depuis l'API
- Cartes interactives avec animations
- Icônes et descriptions détaillées

### 🖼️ Galerie
- Grille d'images responsive
- Effets hover et lazy loading
- Images haute qualité

### 💰 Tarifs
- Affichage des prix depuis l'API
- Liste des fonctionnalités incluses
- Design en cartes modernes

### 📞 Contact & Rendez-vous
- Formulaire de prise de rendez-vous
- Validation côté client
- Intégration avec l'API backend
- Messages de succès/erreur

## Installation et Démarrage

### Prérequis
- .NET 10.0 SDK
- Node.js v18.13+ et npm
- Angular CLI

### Backend
```bash
cd backend/SalonCoiffure.API
dotnet restore
dotnet run
```
L'API sera disponible sur `https://localhost:5001`

### Frontend
```bash
cd frontend
npm install
ng serve
```
L'application sera disponible sur `http://localhost:4200`

## Points d'API

### Services
- `GET /api/services` - Lister tous les services
- `GET /api/services/{id}` - Obtenir un service par ID
- `GET /api/services/category/{category}` - Filtrer par catégorie

### Rendez-vous
- `GET /api/appointments` - Lister tous les rendez-vous
- `POST /api/appointments` - Créer un rendez-vous
- `PUT /api/appointments/{id}/status` - Mettre à jour le statut

## Technologies Utilisées

### Backend
- .NET 10.0
- Entity Framework Core
- ASP.NET Core Web API
- Swagger/OpenAPI

### Frontend
- Angular 17
- TypeScript
- RxJS
- Angular Forms
- Angular Router

### Design
- CSS3 avec Grid et Flexbox
- Google Fonts (Playfair Display, Montserrat)
- Design responsive
- Animations et transitions

## Caractéristiques Techniques

- **Architecture propre**: Séparation claire des responsabilités
- **Type Safety**: TypeScript côté frontend, C# côté backend
- **Responsive Design**: Adaptation mobile/desktop
- **Performance**: Lazy loading, optimisation des images
- **Sécurité**: Validation des données, CORS configuré
- **Développement**: Hot reload, API documentation avec Swagger

## Prochaines Évolutions

- [ ] Authentification utilisateur
- [ ] Base de données SQL Server
- [ ] Système de paiements
- [ ] Notifications par email/SMS
- [ ] Panel d'administration
- [ ] Tests unitaires et E2E

## Licence

Ce projet est créé à des fins démonstratives.
