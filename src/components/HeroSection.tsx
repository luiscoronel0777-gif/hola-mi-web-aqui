import { Button } from "@/components/ui/button";
import { Palette, Sparkles, Crown } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-hero-gradient flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transforma Tu Belleza
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Servicios profesionales de maquillaje y cosmetología para realzar tu belleza natural
        </p>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Maquillaje Artístico</h3>
            <p className="text-white/80">Técnicas profesionales para cada ocasión</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Tratamientos Faciales</h3>
            <p className="text-white/80">Cuidado especializado para tu piel</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Asesoría Personal</h3>
            <p className="text-white/80">Consejos expertos para tu rutina diaria</p>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-glow"
          onClick={() => scrollToSection('servicios')}
        >
          Ver Nuestros Servicios
        </Button>
      </div>
    </section>
  );
};