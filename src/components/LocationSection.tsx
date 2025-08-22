import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Navigation } from "lucide-react";

export const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Nuestra Ubicación</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Córdoba Capital - Estamos ubicados en el corazón de la ciudad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <MapPin className="w-6 h-6 text-primary" />
                Estudio de Belleza
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Zona Centro de Córdoba Capital</h3>
                <p className="text-muted-foreground mb-4">Consultar dirección exacta al reservar</p>
                <p className="text-lg font-medium text-primary">Córdoba, Argentina</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-primary" />
                  Cómo llegar
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Acceso por todas las líneas de transporte
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Múltiples paradas de colectivos cercanas
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Estacionamiento disponible en la zona
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <Clock className="w-6 h-6 text-primary" />
                Horario de Estudio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground font-medium">Lunes a Viernes</span>
                  <span className="font-semibold text-foreground">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground font-medium">Sábados</span>
                  <span className="font-semibold text-foreground">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground font-medium">Domingos</span>
                  <span className="font-semibold text-destructive">Cerrado</span>
                </div>
              </div>

              <div className="bg-beauty-gradient text-white p-6 rounded-lg text-center">
                <h4 className="font-bold text-lg mb-2">¡Visítanos!</h4>
                <p className="text-white/90">
                  Nuestro estudio está diseñado para brindarte la mejor experiencia de belleza 
                  en un ambiente cómodo y profesional.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};