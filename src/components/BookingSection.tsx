import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Clock, Calendar, CheckCircle } from "lucide-react";

export const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    fecha: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.servicio) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    // Crear mensaje para WhatsApp
    const whatsappMessage = `¡Hola! Me gustaría reservar una cita:
    
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Servicio: ${formData.servicio}
Fecha preferida: ${formData.fecha || 'A coordinar'}
${formData.mensaje ? `Mensaje: ${formData.mensaje}` : ''}`;

    const whatsappUrl = `https://wa.me/543513856951?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "¡Reserva Enviada!",
      description: "Te redirigimos a WhatsApp para confirmar tu cita",
    });
  };

  return (
    <section id="turnos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Reserva Tu Turno</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agenda tu cita fácilmente y transforma tu belleza con nuestros servicios profesionales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-foreground">Solicitar Cita</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-foreground font-medium">Nombre Completo *</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    placeholder="Tu nombre completo"
                    className="border-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="tu@email.com"
                    className="border-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-foreground font-medium">Teléfono *</Label>
                  <Input
                    id="telefono"
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    placeholder="+54 9 351 123 4567"
                    className="border-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servicio" className="text-foreground font-medium">Servicio *</Label>
                  <Select value={formData.servicio} onValueChange={(value) => setFormData({...formData, servicio: value})}>
                    <SelectTrigger className="border-2">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maquillaje-novia">Maquillaje de Novia - $150</SelectItem>
                      <SelectItem value="maquillaje-artistico">Maquillaje Artístico - $120</SelectItem>
                      <SelectItem value="tratamientos-faciales">Tratamientos Faciales - $80</SelectItem>
                      <SelectItem value="asesoria-personal">Asesoría Personal - $60</SelectItem>
                      <SelectItem value="quinceaneras">Quinceañeras - $130</SelectItem>
                      <SelectItem value="maquillaje-social">Maquillaje Social - $70</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fecha" className="text-foreground font-medium">Fecha Preferida</Label>
                  <Input
                    id="fecha"
                    type="date"
                    value={formData.fecha}
                    onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                    className="border-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-foreground font-medium">Mensaje (Opcional)</Label>
                  <Textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    placeholder="Cuéntanos sobre tus preferencias o necesidades especiales"
                    className="border-2 min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-beauty-gradient hover:opacity-90 text-white text-lg py-6 rounded-lg shadow-beauty"
                >
                  Reservar Turno
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información */}
          <div className="space-y-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Clock className="w-6 h-6 text-primary" />
                  Horario de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lunes - Viernes</span>
                  <span className="font-semibold text-foreground">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábados</span>
                  <span className="font-semibold text-foreground">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingos</span>
                  <span className="font-semibold text-foreground">Cerrado</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Políticas de Reserva
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Confirmación vía email o WhatsApp</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Cancelación con 24h de anticipación</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Pago al momento del servicio</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-card-gradient">
              <CardHeader>
                <CardTitle className="text-center text-foreground">Contacto Rápido</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <p className="text-2xl font-bold text-primary">+54 9 351 385 6951</p>
                  <p className="text-muted-foreground">Romerogeorgina2020@gmail.com</p>
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://wa.me/543513856951', '_blank')}
                >
                  WhatsApp: +54 9 351 385 6951
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};