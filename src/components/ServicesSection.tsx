import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import maquillajeNovaImg from "@/assets/maquillaje-novia.png";
import maquillajeArtisticoImg from "@/assets/maquillaje-artistico.png";
import tratamientosFacialesImg from "@/assets/tratamientos-faciales.png";
import asesoriaPersonalImg from "@/assets/asesoria-personal.png";
import quinceanearasImg from "@/assets/quinceaneras.png";
import maquillajeSocialImg from "@/assets/maquillaje-social.png";

const services = [
  {
    title: "Maquillaje de Novia",
    description: "Look perfecto para tu día especial con productos de larga duración.",
    price: "$150",
    image: maquillajeNovaImg
  },
  {
    title: "Maquillaje Artístico",
    description: "Diseños creativos para eventos especiales y sesiones fotográficas.",
    price: "$120",
    image: maquillajeArtisticoImg
  },
  {
    title: "Tratamientos Faciales",
    description: "Limpieza profunda, hidratación y rejuvenecimiento facial.",
    price: "$80",
    image: tratamientosFacialesImg
  },
  {
    title: "Asesoría Personal",
    description: "Aprende las mejores técnicas y productos para tu tipo de piel.",
    price: "$60",
    image: asesoriaPersonalImg
  },
  {
    title: "Quinceañeras",
    description: "Maquillaje y peinado para celebrar tus 15 años con estilo.",
    price: "$130",
    image: quinceanearasImg
  },
  {
    title: "Maquillaje Social",
    description: "Perfecto para eventos corporativos, reuniones y ocasiones especiales.",
    price: "$70",
    image: maquillajeSocialImg
  }
];

export const ServicesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra amplia gama de servicios profesionales diseñados para realzar tu belleza natural
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-beauty transition-all duration-300 group border-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">{service.price}</div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Button 
                  className="w-full bg-beauty-gradient hover:opacity-90 text-white border-0"
                  onClick={() => scrollToSection('turnos')}
                >
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};