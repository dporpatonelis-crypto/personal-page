import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ServiceCards from "@/components/ServiceCards";
import FeaturedSection from "@/components/FeaturedSection";
import TestimonialSection from "@/components/TestimonialSection";
import GalleryStrip from "@/components/GalleryStrip";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <MarqueeStrip text="EXPLORE MORE" />
      <ServiceCards />
      <FeaturedSection />
      <TestimonialSection />
      <GalleryStrip />
      <Footer />
    </div>
  );
};

export default Index;
