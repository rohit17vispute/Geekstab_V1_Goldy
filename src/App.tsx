import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import HowWeWork from "./components/HowWeWork";
import Portfolio from "./components/Portfolio";
import Industries from "./components/Industries";
import WhyGeekstab from "./components/WhyGeekstab";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "approach", "portfolio", "industries", "differentiators"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPos = element.offsetTop - 80; // offset for sticky nav
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-darker text-brand-gray overflow-x-hidden selection:bg-brand-cyan/20 selection:text-brand-cyan">
      
      {/* Absolute floating circuit layout dots background */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,194,255,0.14),rgba(255,255,255,0))] pointer-events-none" />

      {/* Sticky Header Nav */}
      <Header
        activeSection={activeSection}
        onContactClick={() => setContactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Hero Presentation */}
      <Hero
        onContactClick={() => setContactOpen(true)}
        onWorkClick={() => handleNavigate("portfolio")}
      />

      {/* About Section - Who We Are & What Clients Get */}
      <About />

      {/* Capability/Service Matrix Grid */}
      <Services />

      {/* Technologies We Work With Grid */}
      <TechStack />

      {/* Delivery Stepper Framework */}
      <HowWeWork />

      {/* Client Portfolio & PDF Slide Swapper Case Studies */}
      <Portfolio />

      {/* Sectors & Industries Cards Column */}
      <Industries />

      {/* The Geekstab Differentiators Edge */}
      <WhyGeekstab />



      {/* Interactive Contact Slate Modal */}
      <ContactForm
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* Corporate Footnotes and taglines */}
      <Footer
        onContactClick={() => setContactOpen(true)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
