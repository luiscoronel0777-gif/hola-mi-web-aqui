import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Por favor ingresa tu email",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "¡Suscripción exitosa!",
      description: "Te mantendremos informada sobre nuestras novedades y promociones",
    });
    setEmail("");
  };

  return (
    <section id="contacto" className="py-20 bg-hero-gradient text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Conectemos</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Síguenos en redes sociales y mantente al día con nuestros trabajos, tips de belleza y promociones exclusivas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Redes Sociales */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Instagram className="w-8 h-8 mx-auto mb-3 text-white" />
                  <h3 className="font-bold text-white mb-1">Instagram</h3>
                  <p className="text-white/80 text-sm mb-1">@ginastudioglam</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-transparent border-white/30 text-white hover:bg-white/20"
                    onClick={() => window.open('https://instagram.com/ginastudioglam', '_blank')}
                  >
                    Seguir
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Facebook className="w-8 h-8 mx-auto mb-3 text-white" />
                  <h3 className="font-bold text-white mb-1">Facebook</h3>
                  <p className="text-white/80 text-sm mb-1">Belleza Profesional</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-transparent border-white/30 text-white hover:bg-white/20"
                    onClick={() => window.open('https://facebook.com', '_blank')}
                  >
                    Seguir
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 mx-auto mb-3 text-white" />
                  <h3 className="font-bold text-white mb-1">WhatsApp</h3>
                  <p className="text-white/80 text-sm mb-1">+54 9 351 385 6951</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-transparent border-white/30 text-white hover:bg-white/20"
                    onClick={() => window.open('https://wa.me/543513856951', '_blank')}
                  >
                    Chatear
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-white" />
                  <h3 className="font-bold text-white mb-1">Email</h3>
                  <p className="text-white/80 text-sm mb-1 truncate">Romerogeorgina2020@gmail.com</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-transparent border-white/30 text-white hover:bg-white/20"
                    onClick={() => window.open('mailto:Romerogeorgina2020@gmail.com', '_blank')}
                  >
                    Escribir
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Newsletter */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 text-center mb-6">
                Suscríbete para recibir promociones exclusivas, tips de belleza y novedades sobre nuestros servicios.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  Suscribir
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-white/20 text-center">
                <p className="text-white/80 text-sm">
                  Al suscribirte, aceptas recibir emails promocionales. 
                  Puedes cancelar en cualquier momento.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-white/80">
            © 2024 Belleza Profesional - Maquilladora & Cosmetóloga. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};