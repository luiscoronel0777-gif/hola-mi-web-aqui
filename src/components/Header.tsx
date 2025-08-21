import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-beauty-gradient flex items-center justify-center text-white font-bold text-lg">
              BP
            </div>
            <span className="font-semibold text-lg text-foreground">Belleza Profesional</span>
          </div>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('turnos')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Turnos
            </button>
            <button 
              onClick={() => scrollToSection('ubicacion')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Ubicación
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contacto
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};