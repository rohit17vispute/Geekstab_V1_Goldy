import { useState } from "react";
import { CASE_STUDIES } from "../data";
import { CaseStudy } from "../types";
import { Check, ArrowRight, ExternalLink, Shield, Cpu, Code, Database, Flag, ChevronLeft, ChevronRight } from "lucide-react";

const COMPANY_PROFILES: Record<string, {
  name: string;
  country: string;
  subtags: string[];
  industry: string;
  about: string;
}> = {
  unicef: {
    name: "UNICEF",
    country: "Global",
    subtags: ["United Nations Agency", "Global Humanitarian Fund"],
    industry: "Humanitarian / NGO",
    about: "UNICEF — the United Nations Children's Fund — is one of the world's most recognised humanitarian organisations, operating in over 190 countries to protect the rights of every child. Founded in 1946, UNICEF delivers life-saving nutrition, healthcare, education, clean water, and emergency relief across some of the world's most challenging environments, reaching over 100 million children every year.\n\nAs a United Nations agency, UNICEF operates under governance, data privacy, and compliance requirements that go significantly beyond commercial enterprises. Their technology platforms must support global humanitarian operations — spanning field offices, donor management, programme delivery tracking, and emergency response coordination — while maintaining the highest standards of data security, accountability, and transparency to governments and donors worldwide. Their Salesforce platform underpins critical operational and fundraising functions, making reliability, data integrity, and platform governance non-negotiable at every level of the organisation."
  },
  docusign: {
    name: "DocuSign",
    country: "USA",
    subtags: ["eSignature & SaaS", "Digital Agreement Cloud"],
    industry: "Technology / SaaS",
    about: "DocuSign is the world and industry leader in electronic signature and contract lifecycle management technologies, serving over 1 million customers and hundreds of millions of users worldwide. Their enterprise systems require robust, high-availability architecture with optimized Lightning components, seamless asynchronous API integrations, and continuous integration flows that enable flawless execution at global scale."
  },
  coinbase: {
    name: "Coinbase",
    country: "USA",
    subtags: ["Digital Assets & Exchange", "Web3 Finance Infrastructure"],
    industry: "Fintech / Cryptocurrency",
    about: "Coinbase is the largest and most trusted cryptocurrency exchange platform in the United States, providing a reliable and secure environment for millions of users to trade, store, and manage digital assets. To sustain scale in highly volatile, 24/7 financial markets, their Salesforce core requires robust FFLIB service layers, bulletproof declarative automation rules, secure user access controls, and low-latency API integration networks."
  },
  ebay: {
    name: "eBay",
    country: "USA",
    subtags: ["Global e-Commerce Engine", "Marketplace Communities"],
    industry: "Commerce / Technology",
    about: "eBay is an international e-commerce pioneer connecting millions of buyers and sellers across 190 global markets. Their Salesforce Experience Cloud communities and partner portals must support extreme consumer and merchant request volumes, demanding clean core trigger structures, highly performant document attachment processes, and comprehensive DevOps test pipelines to support seamless system upgrades without downtime."
  },
  "first-american": {
    name: "First American",
    country: "USA",
    subtags: ["Financial Services & Title Insurance", "Enterprise Risk Management"],
    industry: "Financial Services / Real Estate",
    about: "First American Financial Corporation is a premier global provider of title insurance and settlement services, protecting real estate transactions and providing critical risk analytics. Handling sensitive customer financial information requires a strictly audited security matrix, hard-coded least-privilege sharing controls, and high-scale asynchronous Batch Apex processing nodes capable of importing millions of client transaction logs without governor limit errors."
  },
  "marcus-millichap": {
    name: "Marcus & Millichap",
    country: "USA",
    subtags: ["Commercial Real Estate", "Investment Advisory & Brokerage Services"],
    industry: "Commercial Real Estate",
    about: "Marcus & Millichap is a leading commercial real estate brokerage company specializing in investment sales, financing, research, and advisory services. Coordinating complex multi-million dollar property listings requires a sophisticated Salesforce instance integrated deeply with MuleSoft middleware, using JWT token authentication patterns, and packaging core features neatly to distribute modular capabilities to independent subsidiary domains."
  },
  "bajaj-finserv": {
    name: "Bajaj Finserv",
    country: "India",
    subtags: ["Conglomerate Financial Services", "Consumer Lending Operations"],
    industry: "Non-Banking Financial Company (NBFC)",
    about: "Bajaj Finserv is one of India's preeminent financial services groups, serving millions of active borrowers with consumer finance, wealth management, and insurance portfolios. Navigating dense regional lending compliance constraints demands advanced Apex trigger automation, streamlined loan approval processing rules, highly responsive custom Aura modules, and reliable database ETL routines to securely optimize borrower lifecycle touchpoints."
  },
  "idfc-first-bank": {
    name: "IDFC FIRST Bank",
    country: "India",
    subtags: ["Private Sector Banking", "Retail & Corporate Banking"],
    industry: "Banking",
    about: "IDFC FIRST Bank is one of India's fastest-growing private sector banks, with over 38 million customers and a nationwide network of branches and digital touchpoints. Born from the merger of IDFC Bank and Capital First, the bank has built a reputation for customer-first banking with a strong emphasis on digital innovation, financial inclusion, and responsible lending. Their Salesforce environment supports mission-critical banking workflows across both retail and corporate banking segments — demanding high-quality component engineering, precise data handling, and deep security customisation at every level."
  }
};

export default function Portfolio() {
  const [activeCaseId, setActiveCaseId] = useState<string>("unicef");

  const currentCase = CASE_STUDIES.find(c => c.id === activeCaseId) || CASE_STUDIES[0];

  const getClientLogoSVG = (id: string, name: string) => {
    switch (id) {
      case "unicef":
        return (
          <div className="flex items-center gap-2 select-none text-[#00ADEF]">
            {/* Symmetrical leaves representing UN laurel */}
            <svg className="w-7 h-7 flex-shrink-0 text-[#00ADEF]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" className="opacity-40" />
              {/* Mother & Child Silhouette inside circle */}
              <circle cx="14" cy="13" r="2.5" fill="currentColor" />
              <path d="M14 16.5C12 16.5 10 18 10 20.5C10 22 11 23 12 23.5C12 21 13 19.5 14.5 18.8C14.5 18 15 17.2 15.5 16.8C15 16.6 14.5 16.5 14 16.5Z" fill="currentColor" />
              <circle cx="17.5" cy="17.5" r="1.8" fill="currentColor" />
              <path d="M16 20.5C13.5 21.5 13 23 13 24.5C14.5 25 15.5 25.2 17 25.2C19 25.2 21 24.2 21.5 22.2C21 21.2 20.2 20.5 19.5 20.2C18.5 20.2 17.5 19.8 16 20.5Z" fill="currentColor" />
              {/* Outer laurel leaves */}
              <path d="M7 16c0-4 1.5-6.5 3.5-8.5C9.5 9 9 11 9.5 13c.5 2 1.5 3.5 1.5 3.5s-2-1.5-3.5-1.5C7 16 7 17 7 17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              <path d="M25 16c0-4-1.5-6.5-3.5-8.5C22.5 9 23 11 22.5 13c-.5 2-1.5 3.5-1.5 3.5s2-1.5 3.5-1.5c.5 1 0.5 1.7.5 1.7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <span className="text-white text-base font-bold tracking-tighter lowercase leading-none">unicef</span>
          </div>
        );
      case "docusign":
        return (
          <div className="flex items-center gap-2.5 select-none font-sans font-bold text-white">
            <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Bottom-left dark blue block */}
              <rect x="6" y="15" width="11" height="11" rx="1.5" fill="#4B39EF" />
              {/* Top-right coral portion */}
              <path d="M15 6C21.0751 6 26 10.9249 26 17H15V6Z" fill="#FF5349" />
              {/* Center white document */}
              <path d="M10 10H19C19.5523 10 20 10.4477 20 11V22C20 22.5523 19.5523 23 19 23H10V10Z" fill="white" />
              {/* Document fold */}
              <path d="M17 10V13H20L17 10Z" fill="#94A3B8" />
            </svg>
            <span className="text-white text-lg font-sans font-extrabold lowercase tracking-tight">docusign</span>
          </div>
        );
      case "coinbase":
        return (
          <div className="flex items-center gap-2.5 select-none font-sans font-bold text-xl tracking-tight text-white">
            <div className="w-6 h-6 rounded-full bg-[#0052FF] flex items-center justify-center text-white text-[12px] font-black font-sans">
              C
            </div>
            coinbase
          </div>
        );
      case "ebay":
        return (
          <div className="flex items-center select-none font-sans font-extrabold text-3xl tracking-tighter lowercase leading-none">
            <span className="text-[#E53238] -mr-[1.5px]">e</span>
            <span className="text-[#0064D2] -mr-[1px]">b</span>
            <span className="text-[#F5B100] -mr-[1.5px]">a</span>
            <span className="text-[#86B817]">y</span>
          </div>
        );
      case "first-american":
        return (
          <div className="flex flex-col items-center select-none text-center">
            <svg className="w-12 h-7.5 text-brand-cyan" viewBox="0 0 24 12" fill="currentColor">
              {/* Eagle spreading wings SVG */}
              <path d="M12 1.5c-0.5 0-1 0.2-1.5 0.5-1.5 0.9-3 1.5-5 1.8 1 0.3 2 0.3 3 0-1.5 0.3-2.5 0.9-3 1.8 0.5 0 1-0.3 1.5-0.6-1 0.6-1.5 1.5-1 2.4 1-0.3 1.5-0.9 1.5-1.2-0.5 0.6-0.5 1.2 0 1.5 1-0.6 1.5-1.2 2-2.1 0 0.6 0.5 0.9 0.5 1.2 0-1.2 1-2.1 2-2.7 0.5-0.3 0.5-0.6 1-0.9V1.5zm0 0c0.5 0 1 0.2 1.5 0.5 1.5 0.9 3 1.5 5 1.8-1 0.3-2 0.3-3 0 1.5 0.3 2.5 0.9 3 1.8-0.5 0-1-0.3-1.5-0.6 1 0.6 1.5 1.5 1 2.4-1-0.3-1.5-0.9-1.5-1.2 0.5 0.6 0.5 1.2 0 1.5-1-0.6-1.5-1.2-2-2.1 0 0.6-0.5 0.9-0.5 1.2 0-1.2-1-2.1-2-2.7-0.5-0.3-0.5-0.6-1-0.9V1.5z" />
            </svg>
            <span className="font-serif text-[11px] text-white/70 tracking-[0.08em] uppercase font-bold leading-none mt-1">FIRST AMERICAN</span>
          </div>
        );
      case "marcus-millichap":
        return (
          <div className="text-center flex flex-col justify-center items-center select-none font-serif">
            <span className="text-[13px] font-medium tracking-tight text-white leading-none">Marcus &</span>
            <span className="text-[13px] font-bold tracking-tight text-white leading-none mt-1">Millichap</span>
          </div>
        );
      case "bajaj-finserv":
        return (
          <div className="flex items-center gap-1.5 select-none text-white font-sans">
            <div className="w-6 h-6 rounded-full bg-[#0072C6] flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                {/* High fidelity stylized B path */}
                <path d="M5 4h7a4.5 4.5 0 0 1 4.5 4.5c0 1.8-.9 3.3-2.3 4.1 1.8.7 3.3 2.4 3.3 4.4A4.5 4.5 0 0 1 13 21.5H5V4zm3 3v4.5h4c1.24 0 2.25-1 2.25-2.25S13.24 7 12 7H8zm0 7.5V18.5h5c1.24 0 2.25-1 2.25-2.25S14.24 14.5 13 14.5H8z"/>
              </svg>
            </div>
            <div className="flex flex-col items-start leading-[0.85]">
              <span className="text-white text-[13px] font-black tracking-wider uppercase">BAJAJ</span>
              <span className="text-brand-cyan text-[8px] font-bold tracking-[0.2em] uppercase opacity-95">FINSERV</span>
            </div>
          </div>
        );
      case "idfc-first-bank":
        return (
          <div className="flex flex-col items-center select-none text-center">
            <span className="font-sans font-black text-[14px] text-[#A6192E] tracking-tight leading-none">
              IDFC FIRST
            </span>
            <span className="font-mono text-[9px] text-white/80 tracking-widest mt-1 leading-none font-bold uppercase">
              BANK
            </span>
          </div>
        );
      default:
        return <span className="font-sans font-bold text-sm text-white">{name}</span>;
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-brand-navy/30 relative border-t border-brand-border/40 scroll-mt-20">
      <div className="absolute inset-0 radial-glow pointer-events-none opacity-30" />

      {/* Dynamic Keyframes for slow sliding clients */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-cyan uppercase block mb-3">
            CLIENT PORTFOLIO
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-5 leading-tight">
            Enterprise Client Engagements & Selected Case Studies
          </h2>
          <p className="font-sans text-base text-brand-gray/80 font-light max-w-2xl leading-relaxed">
            Review detailed execution proof-points spanning humanitarian missions, high-volume crypto operations, secure mortgage pipelines, complex Trigger refactoring, and Middleware integration architecture.
          </p>
        </div>

        {/* Slow-scrolling Infinitely Looping Client Line */}
        <div className="mb-6">
          <h3 className="font-mono text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-3">
            Clients Moving Along the Line — Hover to Pause • Click to inspect case study
          </h3>
          <div className="relative overflow-hidden w-full border border-white/10 bg-[#080F1E]/50 py-6 mb-10 rounded-2xl group">
            {/* Faded Left and Right Edges for Premium Look */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d1321] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d1321] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-slow flex items-center gap-14">
              {[...CASE_STUDIES, ...CASE_STUDIES, ...CASE_STUDIES].map((cs, idx) => {
                const isActive = activeCaseId === cs.id;
                return (
                  <button
                    id={`moving-client-logo-${cs.id}-${idx}`}
                    key={`${cs.id}-${idx}`}
                    onClick={() => setActiveCaseId(cs.id)}
                    className={`flex flex-col items-center gap-2 px-5 py-2.5 transition-all duration-300 transform rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 cursor-pointer ${
                      isActive
                        ? "opacity-100 scale-105 filter drop-shadow-[0_0_8px_rgba(0,194,255,0.3)] bg-white/5 border-white/10"
                        : "opacity-45 hover:opacity-100"
                    }`}
                    title={`View ${cs.clientName} Case Study`}
                  >
                    <div className="h-8 flex items-center justify-center">
                      {getClientLogoSVG(cs.id, cs.clientName)}
                    </div>
                    <span className="font-mono text-[8px] tracking-[0.15em] text-[#00C2FF] uppercase leading-none mt-1">
                      {cs.country} DIVISION
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Case Study Slide UI Layout (McKinsey-tier slide design) */}
        <div className="bg-[#0D1527] border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative">
          
          {/* Header Bar */}
          <div className="border-b border-white/10 bg-brand-navy/40 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="px-3.5 py-1.5 bg-brand-navy border border-white/10 rounded-lg">
                {getClientLogoSVG(currentCase.id, currentCase.clientName)}
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                  {currentCase.clientName}
                </h3>
                <p className="font-sans text-xs text-brand-cyan leading-none font-medium mt-1">
                  {currentCase.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] text-white/50 bg-brand-navy/60 border border-white/10 rounded-md px-3 py-1.5">
              <Flag className="w-3.5 h-3.5 text-brand-cyan" />
              <span>ENGAGEMENT FOCUS: ENTERPRISE CO-DEVELOPMENT</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            {(() => {
              const profile = COMPANY_PROFILES[currentCase.id] || {
                name: currentCase.clientName,
                country: currentCase.country,
                subtags: [currentCase.subtitle],
                industry: "Enterprise Automation",
                about: currentCase.engagementFocus
              };
              
              return (
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight leading-none">
                      {profile.name}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm font-sans text-brand-cyan/80 mt-1">
                      <span>{profile.country}</span>
                      {profile.subtags.map((sub, sIdx) => (
                        <span key={sIdx} className="flex items-center gap-x-3">
                          <span className="text-white/20">·</span>
                          <span>{sub}</span>
                        </span>
                      ))}
                    </div>

                    <div className="mt-3">
                      <span className="inline-block font-mono text-[10px] font-bold tracking-widest text-[#00C2FF] uppercase leading-none bg-brand-cyan/10 border border-brand-cyan/25 rounded px-2.5 py-1">
                        {profile.industry}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <h3 className="font-display font-bold text-lg text-white mb-3">
                      About the company
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-brand-gray/90 leading-relaxed font-light">
                      {profile.about}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

      </div>
    </section>
  );
}
