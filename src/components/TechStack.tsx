import React from "react";
import { Cpu, Terminal, Layers, Database, GitMerge, Cloud, Globe, HelpCircle, Shield } from "lucide-react";

interface TechCategory {
  label: string;
  icon: React.ReactNode;
  tags: string[];
  description: string;
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    label: "CRM & Cloud Platform",
    icon: <Database className="w-4 h-4" />,
    tags: ["Salesforce", "Sales Cloud", "Service Cloud", "Experience Cloud", "Data Cloud", "Agentforce", "MuleSoft", "Apex", "LWC"],
    description: "Enterprise tenant administration, custom lightning development, autonomous workflows, and low-latency synchronization."
  },
  {
    label: "Frontend",
    icon: <Layers className="w-4 h-4" />,
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "Vue.js"],
    description: "High-fidelity responsive user interfaces, structured modular web portals, and polished, optimized layouts."
  },
  {
    label: "Backend",
    icon: <Terminal className="w-4 h-4" />,
    tags: ["Node.js", "Python", "Java", "Spring Boot", "Express.js", "REST API", "GraphQL", "FastAPI"],
    description: "Secure application backends, fast and scalable microservices, custom endpoints, and data processing nodes."
  },
  {
    label: "Data & AI",
    icon: <Cpu className="w-4 h-4" />,
    tags: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "LangChain", "OpenAI API", "Einstein AI", "SQL", "PostgreSQL", "MongoDB"],
    description: "Grounded autonomous LLM flow models, cognitive prompts, semantic database schemas, and intelligent analytics."
  },
  {
    label: "DevOps & Infrastructure",
    icon: <GitMerge className="w-4 h-4" />,
    tags: ["AWS", "GCP", "Docker", "GitHub Actions", "CI/CD", "Git", "Flosum", "Sandbox Management"],
    description: "Automated deployment, high-isolation dev branches, unified sandbox security pipelines, and zero-downtime server scaling."
  },
  {
    label: "Security & Compliance",
    icon: <Shield className="w-4 h-4" style={{ color: '#00C2FF' }} />,
    tags: ["OAuth 2.0", "SSO/SAML", "Field-Level Security", "Shield Encryption", "PMD Analysis", "SonarQube", "OWASP Rules", "GDPR Guard"],
    description: "Adherence to security-first operations, least-privilege permission schemas, and rigorous automated code analysis."
  }
];

export default function TechStack() {
  const [hoveredCategoryIdx, setHoveredCategoryIdx] = React.useState<number | null>(null);

  // Renders beautiful inline vector logos matching modern brand signatures standard
  const renderTagLogo = (tag: string) => {
    const name = tag.toLowerCase();

    if (name.includes("salesforce") || name.includes("sales cloud") || name.includes("service cloud") || name.includes("experience cloud") || name.includes("data cloud") || name.includes("agentforce") || name.includes("einstein")) {
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-sky-400 mr-1.5 flex-shrink-0 animate-pulse">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      );
    }
    if (name === "react") {
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-3.5 h-3.5 stroke-cyan-400 fill-none stroke-[1.4] mr-1.5 flex-shrink-0">
          <circle cx="0" cy="0" r="2.05" className="fill-cyan-400 stroke-none" />
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </svg>
      );
    }
    if (name === "typescript") {
      return (
        <span className="w-3.5 h-3.5 bg-[#3178C6] text-white text-[7.5px] font-black rounded-sm flex items-center justify-center mr-1.5 flex-shrink-0 select-none font-sans shadow-sm">
          TS
        </span>
      );
    }
    if (name === "javascript") {
      return (
        <span className="w-3.5 h-3.5 bg-[#F7DF1E] text-black text-[7.5px] font-black rounded-sm flex items-center justify-center mr-1.5 flex-shrink-0 select-none font-sans shadow-sm">
          JS
        </span>
      );
    }
    if (name === "next.js") {
      return (
        <span className="w-3.5 h-3.5 bg-black text-white text-[8px] font-bold rounded-full flex items-center justify-center mr-1.5 flex-shrink-0 select-none font-sans border border-white/20 shadow-sm leading-none">
          N
         </span>
      );
    }
    if (name === "node.js" || name === "express.js") {
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-emerald-500 mr-1.5 flex-shrink-0">
          <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm6 14.5l-6 3.4-6-3.4v-6.9l6-3.4 6 3.4v6.9zM12 7.8l-4 2.3v4.6l4 2.3 4-2.3v-4.6l-4-2.3z" />
        </svg>
      );
    }
    if (name === "python" || name.includes("pandas") || name.includes("numpy")) {
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 mr-1.5 flex-shrink-0">
          <path d="M11.95 2c-2.73 0-5.11.19-5.11 2.89v1.94h5.21V8h-7.3c-2.26 0-3.11 1.7-3.11 3.24v3.13c0 2.22 1.34 2.87 3.56 2.87h1.65v-2.34c0-2 1.57-3.69 3.56-3.69h5.17V8.58c0-2.8-2.22-3.13-4.14-3.13z" fill="#3776AB" />
          <path d="M12.05 22c2.73 0 5.11-.19 5.11-2.89v-1.94h-5.21V16h7.3c2.26 0 3.11-1.7 3.11-3.24V9.63c0-2.22-1.34-2.87-3.56-2.87h-1.65v2.34c0 2-1.57 3.69-3.56 3.69H11.4v2.64c0 2.8 2.22 3.13 4.14 3.13" fill="#FFD43B" />
        </svg>
      );
    }
    if (name === "java" || name.includes("spring")) {
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-amber-500 mr-1.5 flex-shrink-0">
          <path d="M2 21h20v2H2v-2zM9.5 2c-.5 1.5.5 3 1.5 4S13 9 12 11c-.5 1-1.5 1.5-1 2.5s2 .5 2-1c0-2-1.5-3.5-2.5-4.5" />
        </svg>
      );
    }
    if (name === "aws") {
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-orange-400 mr-1.5 flex-shrink-0">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      );
    }
    if (name === "gcp") {
      return (
        <div className="w-3 h-3 rounded-full bg-blue-500 border border-white/20 mr-1.5 flex-shrink-0 flex items-center justify-center text-[6.5px] font-black text-white">
          G
        </div>
      );
    }
    if (name === "docker") {
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-sky-400 mr-1.5 flex-shrink-0">
          <path d="M3 13.5h2V12c0-.5-.5-1-1-1H3M12.5 10H14M9.5 10H11" />
        </svg>
      );
    }
    if (name === "openai api" || name.includes("langchain")) {
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-emerald-400 mr-1.5 flex-shrink-0 animate-spin-slow">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 1.93-.68 3.7-1.8 5.1z" />
        </svg>
      );
    }
    if (name === "tailwind css") {
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-cyan-400 mr-1.5 flex-shrink-0">
          <path d="M12 .587l3.668 5.568 5.61.945-3.9 3.948.818 5.612L12 14.12" fill="none" stroke="#22d3ee" strokeWidth="2" />
        </svg>
      );
    }
    if (name.includes("mysql") || name.includes("sql") || name.includes("postgres") || name.includes("mongodb")) {
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-teal-500 mr-1.5 flex-shrink-0">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93" />
        </svg>
      );
    }

    // Default neutral tech indicator
    return (
      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/70 mr-1.5 flex-shrink-0" />
    );
  };

  return (
    <section id="tech-stack" className="py-24 relative border-t border-brand-border/40 scroll-mt-20">
      <div className="absolute inset-0 radial-glow pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full font-sans">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-cyan uppercase block mb-3">
            ENGINEERING TOOLKIT
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-5 leading-tight">
            Technologies We Work With
          </h2>
          <p className="font-sans text-base text-brand-gray/80 font-light max-w-2xl leading-relaxed">
            A complete engineering toolkit — from enterprise CRM to full-stack web and AI/ML.
          </p>
        </div>

        {/* Compact Grid Layout of Tech Cards - Dynamically rendered with interactive hover reveals, fully symmetric 3-column configuration */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH_CATEGORIES.map((cat, idx) => {
            const isHovered = hoveredCategoryIdx === idx;
            return (
              <div
                id={`tech-row-${idx}`}
                key={idx}
                className={`group flex flex-col justify-start bg-[#0D1527]/50 border rounded-xl p-5 transition-all duration-300 relative overflow-hidden shadow-lg ${
                  isHovered ? "border-brand-cyan/25 bg-[#0E1528] scale-[1.01] shadow-[0_4px_30px_rgba(0,194,255,0.04)]" : "border-white/5"
                }`}
                onMouseEnter={() => setHoveredCategoryIdx(idx)}
                onMouseLeave={() => setHoveredCategoryIdx(null)}
              >
                {/* Category Label */}
                <div className="flex items-center gap-3 select-none">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-transform flex-shrink-0">
                    {cat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-brand-cyan transition-colors">
                      {cat.label}
                    </span>
                    <span className="font-mono text-[9px] text-[#8892A4] mt-0.5 uppercase tracking-wide">
                      {isHovered ? "Authorized Stack" : "Production Stack"}
                    </span>
                  </div>
                </div>

                {/* Subtext description of focus area */}
                <p className="text-xs text-white/50 font-light mt-3 leading-relaxed">
                  {cat.description}
                </p>

                {/* Badges Container - Smooth expandable grid with height and opacity transition */}
                <div 
                  className={`flex flex-wrap gap-2 transition-all duration-500 ease-in-out ${
                    isHovered 
                      ? "opacity-100 max-h-[300px] mt-4 pt-3 border-t border-white/5 scale-100 pointer-events-auto" 
                      : "opacity-0 max-h-0 overflow-hidden scale-95 mt-0 border-t-0 pointer-events-none select-none"
                  }`}
                >
                  {cat.tags.map((tag, tIdx) => (
                    <span
                      id={`tech-badge-${idx}-${tIdx}`}
                      key={tIdx}
                      className="inline-flex items-center font-mono text-[10px] font-medium text-white/80 bg-brand-navy border border-white/10 rounded-md px-2.5 py-1.5 hover:border-brand-cyan/35 hover:text-brand-cyan transition-all duration-200"
                    >
                      {renderTagLogo(tag)}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
