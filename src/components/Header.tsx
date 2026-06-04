import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onContactClick, onNavigate, activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "services", label: "Services" },
    { id: "approach", label: "Approach" },
    { id: "portfolio", label: "Work" },
    { id: "industries", label: "Industries" },
    { id: "differentiators", label: "Why Us" }
  ];

  const handleNavItemClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-brand-navy/90 backdrop-blur-md py-4 border-white/10"
          : "bg-transparent py-5 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          id="logo-brand-btn"
          onClick={() => handleNavItemClick("hero")}
          className="flex items-center gap-2.5 cursor-pointer group text-left"
        >
          {/* Geekstab electronic logo */}
          <svg
            id="brand-brain-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8 text-brand-cyan transition-transform duration-300 group-hover:scale-105"
            fill="none"
          >
            {/* Left Hemisphere Outline */}
            <path
              d="M15 4.5C10.5 4.5 7 8 7 12.5C7 14 7.5 15.4 8.2 16.5C6.5 17.5 5.5 19.5 5.5 21.5C5.5 24.5 8 27 11 27C11.5 27 12 26.9 12.5 26.7C13.5 28.1 15 28.5 16 28.5V18.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Right Hemisphere Outline */}
            <path
              d="M17 4.5C21.5 4.5 25 8 25 12.5C25 14 24.5 15.4 23.8 16.5C25.5 17.5 26.5 19.5 26.5 21.5C26.5 24.5 24 27 21 27C20.5 27 20 26.9 19.5 26.7C18.5 28.1 17 28.5 16 28.5V18.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            
            {/* Dynamic Circuit Tracks with Square Terminals precisely drawn to resemble the brain logo in the image */}
            {/* Track 1 (Left top) */}
            <path d="M12.5 9.5H15M12.5 9.5V12.5H10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <rect x="9" y="11.5" width="2" height="2" rx="0.3" fill="currentColor" />
            
            {/* Track 2 (Right top) */}
            <path d="M19.5 9.5H17M19.5 9.5V12.5H22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <rect x="21" y="11.5" width="2" height="2" rx="0.3" fill="currentColor" />

            {/* Track 3 (Left middle) */}
            <path d="M11 16.5H15M11 16.5V19.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <rect x="10" y="18.5" width="2" height="2" rx="0.3" fill="currentColor" />

            {/* Track 4 (Right middle) */}
            <path d="M21 16.5H17M21 16.5V19.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <rect x="20" y="18.5" width="2" height="2" rx="0.3" fill="currentColor" />

            {/* Track 5 (Left bottom) */}
            <path d="M13 22H15M13 22V24.5H11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <rect x="10.5" y="23.5" width="2" height="2" rx="0.3" fill="currentColor" />

            {/* Track 6 (Right bottom) */}
            <path d="M19 22H17M19 22V24.5H20.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <rect x="19.5" y="23.5" width="2" height="2" rx="0.3" fill="currentColor" />
          </svg>
          <div>
            <span className="font-display font-extrabold text-lg tracking-tight text-white select-none">
              Geek<span className="text-brand-cyan">stab</span>
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              id={`nav-link-${item.id}`}
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              className={`font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeSection === item.id
                  ? "text-brand-cyan"
                  : "text-white/70 hover:text-brand-cyan"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="desktop-contact-btn"
            onClick={onContactClick}
            className="px-5 py-2 border border-brand-cyan text-brand-cyan rounded-full hover:bg-brand-cyan hover:text-brand-navy font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-brand-gray hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-dropdown-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-brand-navy border-b border-brand-border transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              id={`mobile-nav-link-${item.id}`}
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              className={`py-3 text-left border-b border-brand-border/40 font-sans text-base font-medium tracking-wide last:border-0 ${
                activeSection === item.id ? "text-brand-cyan" : "text-brand-gray/95"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            id="mobile-contact-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="w-full mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-cyan text-brand-darker font-sans text-base font-bold tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(0,194,255,0.3)] hover:shadow-[0_0_25px_rgba(0,194,255,0.5)] cursor-pointer"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
