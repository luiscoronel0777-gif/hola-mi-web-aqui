import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BookingSection } from "@/components/BookingSection";
import { LocationSection } from "@/components/LocationSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <BookingSection />
      <LocationSection />
      <ContactSection />
    </div>
  );
};

export default Index;
