import NowShowingTicker from "@/components/NowShowingTicker";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CurrentShowsSection from "@/components/CurrentShowsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NowShowingTicker />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CurrentShowsSection />
      <ExperienceSection />
      <GallerySection />
      <AboutSection />
      <LocationSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
