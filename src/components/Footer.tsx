import { Mail, Linkedin, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

interface FooterProps {
  onContactClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onContactClick, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0b14] border-t border-white/10 py-16 relative overflow-hidden font-sans">
      
      {/* Decorative Radial Elements */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-cyan/5 blur-3xl rounded-full scale-75 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Core footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-12 mb-10">
          
          {/* Tagline & Logo Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <button
              id="footer-logo-btn"
              onClick={() => onNavigate("hero")}
              className="flex items-center gap-2.5 cursor-pointer group text-left mb-5"
            >
              <svg
                id="footer-brand-brain-logo"
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
                <span className="block text-[8px] font-mono tracking-wider text-[#00C2FF] uppercase mt-1 font-bold">
                  Salesforce · Full-Stack · AI/ML · Data Engineering · Integrations · DevOps
                </span>
              </div>
            </button>

            <p className="text-xs text-white/50 leading-relaxed font-light max-w-sm mb-6">
              Modern technology delivery for companies that want robust full-stack systems, secure Salesforce implementations, and intelligent enterprise AI architectures.
            </p>

            {/* Email link badge */}
            <a
              id="footer-email-link"
              href="mailto:info@geekstab.com"
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-brand-navy border border-white/10 hover:border-brand-cyan/35 rounded-lg transition-all text-xs font-mono text-white/70 hover:text-white"
            >
              <Mail className="w-4 h-4 text-brand-cyan" />
              info@geekstab.com
            </a>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-2 col-span-1">
            <h4 className="font-mono text-xs font-semibold text-white tracking-widest uppercase mb-4 select-none">
              Capabilities
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <button onClick={() => onNavigate("services")} className="text-white/50 hover:text-brand-cyan transition-colors cursor-pointer text-left">
                  Salesforce Solutions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="text-white/50 hover:text-brand-cyan transition-colors cursor-pointer text-left">
                  Full-Stack Dev
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="text-white/50 hover:text-brand-cyan transition-colors cursor-pointer text-left">
                  AI/ML Engineering
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="text-white/50 hover:text-brand-cyan transition-colors cursor-pointer text-left">
                  Data Engineering
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="text-white/50 hover:text-brand-cyan transition-colors cursor-pointer text-left">
                  System Integrations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="text-white/50 hover:text-brand-cyan transition-colors cursor-pointer text-left">
                  Release & DevOps
                </button>
              </li>
            </ul>
          </div>

          {/* Client Center quick link items */}
          <div className="md:col-span-2 col-span-1">
            <h4 className="font-mono text-xs font-semibold text-white tracking-widest uppercase mb-4 select-none">
              Client Center
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <button onClick={() => onNavigate("portfolio")} className="text-white/50 hover:text-brand-cyan transition-colors cursor-pointer text-left">
                  Selected Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("approach")} className="text-white/50 hover:text-brand-cyan transition-colors cursor-pointer text-left">
                  Delivery Framework
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("differentiators")} className="text-white/50 hover:text-brand-cyan transition-colors cursor-pointer text-left">
                  The Geekstab Edge
                </button>
              </li>
              <li>
                <button onClick={onContactClick} className="text-white/50 hover:text-brand-cyan transition-colors cursor-pointer text-left">
                  Schedule Audit Call
                </button>
              </li>
            </ul>
          </div>

          {/* Prompt CTA Column */}
          <div className="md:col-span-3 flex flex-col items-start bg-[#0D1527] border border-white/10 rounded-xl p-5">
            <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#00C2FF] bg-[#00C2FF]/5 px-2 py-0.5 border border-[#00C2FF]/10 rounded-md mb-3 select-none">
              Direct Contact
            </span>
            <span className="font-display font-bold text-sm text-white leading-normal mb-1.5">
              Ready to eliminate platform regressions?
            </span>
            <p className="text-xs text-white/50 font-light mb-4 text-left leading-normal">
              Schedule a 45-minute zero-obligation sandbox review with our Lead Systems Architect.
            </p>
            <button
              id="footer-inline-contact-btn"
              onClick={onContactClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-cyan hover:bg-cyan-400 text-brand-navy rounded-lg font-bold text-xs tracking-wider transition-colors cursor-pointer"
            >
              Consult an Architect
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Footer Base Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-white/50 select-none">
          <div className="flex items-center gap-2">
            <span className="font-light">
              © {currentYear} Geekstab Consulting. All Technical Designs and Assets Reserved.
            </span>
          </div>

          {/* Social placeholder and metadata notes */}
          <div className="flex items-center gap-4">
            <a
              id="linkedin-placeholder-ref"
              href="https://www.linkedin.com/company/geekstab-technology/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors border border-white/10 rounded-lg px-3 py-1.5 bg-brand-navy"
            >
              <Linkedin className="w-4 h-4 text-brand-cyan" />
              <span>LinkedIn Portal</span>
            </a>
            <span className="hidden sm:inline-block h-4 w-px bg-white/10" />
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-white/50">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>STRICT COMPLIANCE ENVIRONMENT</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
