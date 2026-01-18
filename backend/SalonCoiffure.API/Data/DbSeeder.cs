using SalonCoiffure.API.Models;

namespace SalonCoiffure.API.Data;

public static class DbSeeder
{
    public static void SeedData(SalonDbContext context)
    {
        // Check if database has been seeded
        if (context.Services.Any())
        {
            return; // DB has been seeded
        }

        var services = new List<Service>
        {
            new Service
            {
                Name = "Coupe & Coiffure",
                Description = "Coupes modernes et classiques adaptées à votre morphologie et votre style de vie.",
                Icon = "✂️",
                Price = 45m,
                Category = "Coupe",
                Features = new List<string> { "Shampooing", "Coupe au bol", "Brushing" }
            },
            new Service
            {
                Name = "Coupe Homme",
                Description = "Coupes précises et modernes pour hommes avec finition soignée.",
                Icon = "✂️",
                Price = 30m,
                Category = "Coupe",
                Features = new List<string> { "Shampooing", "Coupe précise", "Finition" }
            },
            new Service
            {
                Name = "Coloration",
                Description = "Colorations personnalisées, balayages et mèches pour sublimer votre chevelure.",
                Icon = "🎨",
                Price = 65m,
                Category = "Coloration",
                Features = new List<string> { "Diagnostics couleur", "Application", "Soins post-coloration" }
            },
            new Service
            {
                Name = "Balayage",
                Description = "Mèches personnalisées pour un effet naturel et lumineux.",
                Icon = "🎨",
                Price = 85m,
                Category = "Coloration",
                Features = new List<string> { "Préparation", "Mèches personnalisées", "Brushing final" }
            },
            new Service
            {
                Name = "Soins Capillaires",
                Description = "Soins profonds pour nourrir, réparer et protéger la santé de vos cheveux.",
                Icon = "💆‍♀️",
                Price = 40m,
                Category = "Soins",
                Features = new List<string> { "Diagnostic capillaire", "Soin profond", "Massage" }
            },
            new Service
            {
                Name = "Coiffure Événementielle",
                Description = "Coiffures sophistiquées pour mariages, soirées et occasions spéciales.",
                Icon = "👰",
                Price = 120m,
                Category = "Événement",
                Features = new List<string> { "Consultation", "Essai", "Coiffure finale" }
            }
        };

        context.Services.AddRange(services);
        context.SaveChanges();
    }
}
