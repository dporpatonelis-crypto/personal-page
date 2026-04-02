import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ServiceCards from "@/components/ServiceCards";
import FeaturedSection from "@/components/FeaturedSection";
import TestimonialSection from "@/components/TestimonialSection";
import GalleryStrip from "@/components/GalleryStrip";
import Footer from "@/components/Footer";
import SettingsPanel from "@/components/SettingsPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <ServiceCards />
      <FeaturedSection />
      <TestimonialSection />
      <GalleryStrip />
      <Footer />
      <SettingsPanel />
    </div>
  );
};

export default Index;
