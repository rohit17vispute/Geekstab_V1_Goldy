import { useState, useRef } from "react";
import { 
  Cloud, Award, Code, Cpu, Database, Link, Server, Coffee, Box, 
  Brain, BarChart3, Workflow, Binary, ShieldAlert, Bot, Layers, Network, GitBranch, ArrowRight, ChevronDown, ChevronUp
} from "lucide-react";

interface SubService {
  title: string;
  description: string;
  bullets: string[];
}

interface Pillar {
  id: string;
  number: string;
  title: string;
  accentClass: string;
  borderClass: string;
  textAccentClass: string;
  bgGlowClass: string;
  description: string;
  subServices: SubService[];
}

// Interactive custom SVG Brand logos for Salesforce, React, Node.js, Python, Java etc.
const BrandLogos = {
  Salesforce: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sky-400 opacity-90 transition-transform group-hover:scale-110 duration-300">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
    </svg>
  ),
  React: () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 stroke-cyan-400 fill-none stroke-[1.2] animate-[spin_12s_linear_infinite] group-hover:stroke-cyan-300">
      <circle cx="0" cy="0" r="2.05" className="fill-cyan-400 stroke-none" />
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </svg>
  ),
  Nodejs: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-emerald-500 opacity-90 transition-transform group-hover:scale-110 duration-300">
      <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm6 14.5l-6 3.4-6-3.4v-6.9l6-3.4 6 3.4v6.9zM12 7.8l-4 2.3v4.6l4 2.3 4-2.3v-4.6l-4-2.3z" />
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-95 transition-transform group-hover:scale-110 duration-300">
      <path d="M11.95 2c-2.73 0-5.11.19-5.11 2.89v1.94h5.21V8h-7.3c-2.26 0-3.11 1.7-3.11 3.24v3.13c0 2.22 1.34 2.87 3.56 2.87h1.65v-2.34c0-2 1.57-3.69 3.56-3.69h5.17V8.58c0-2.8-2.22-3.13-4.14-3.13H6.84V4.89c0-1.42 1.33-1.63 2.91-1.63H15s.84-2 0-2H11.95zm.05 20c2.73 0 5.11-.19 5.11-2.89v-1.94h-5.21V16h7.3c2.26 0 3.11-1.7 3.11-3.24V9.63c0-2.22-1.34-2.87-3.56-2.87h-1.65v2.34c0 2-1.57 3.69-3.56 3.69H11.4v2.64c0 2.8 2.22 3.13 4.14 3.13h4.63v.56c0 1.42-1.33 1.63-2.91 1.63H9s-.84 2 0 2h3.05z" fill="#3776AB" />
      <circle cx="9" cy="5" r="0.75" fill="#3776AB" />
      <circle cx="15" cy="19" r="0.75" fill="#FFD343" />
    </svg>
  ),
  Java: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500 opacity-90 transition-transform group-hover:scale-110 duration-300">
      <path d="M2 21h20v2H2v-2zM9.5 2c-.5 1.5.5 3 1.5 4S13 9 12 11c-.5 1-1.5 1.5-1 2.5s2 .5 2-1c0-2-1.5-3.5-2.5-4.5s-1-2.5 0-4c.4-.7-.5-1-.7-2zm4.5 1.5c-.3 1 0 2 .5 2.5s1 1.5.5 2.5c-.3.7-1 1-.7 1.7.4.8 1.4.3 1.4-.7 0-1.2-1-2-1.5-2.5S14 4.5 14.5 4c.2-.5-.5-1-.5-.5zM3 17.5c1.5 1 5 1.5 8 1.5s7-.5 8.5-1.5V14H3v3.5zm11-10c2.5.5 4.5 2 4.5 4.5s-2 4-4.5 4.5H9c-2.5-.5-4.5-2-4.5-4.5s2-4 4.5-4.5h5z" />
    </svg>
  ),
  Default: () => (
    <div className="w-5 h-5 flex items-center justify-center font-mono font-bold text-xs text-brand-cyan select-none group-hover:scale-110 duration-300">
      [+]
    </div>
  )
};

const PILLARS: Pillar[] = [
  {
    id: "salesforce-platform",
    number: "01",
    title: "Salesforce Platform",
    accentClass: "bg-brand-cyan",
    borderClass: "border-t-4 border-t-brand-cyan",
    textAccentClass: "text-brand-cyan",
    bgGlowClass: "from-brand-cyan/10",
    description: "Enterprise Salesforce delivery, advanced architecture, and seamless cloud implementations.",
    subServices: [
      {
        title: "Sales Cloud",
        description: "We design and build complete Sales Cloud environments from the ground up — covering pipeline architecture, account and territory management, lead-to-opportunity workflows, forecasting models, and custom UI components that help sales teams move faster and close more. Every build is shaped around how your sellers actually work, not how Salesforce works out of the box.",
        bullets: ["Pipeline Architecture", "Territory Management", "Workflows & Forecasting", "Custom UI Components"]
      },
      {
        title: "Service Cloud",
        description: "We deliver end-to-end Service Cloud implementations that transform how support teams operate — building case management frameworks, intelligent support flows, escalation logic, SLA tracking, and omni-channel routing patterns that handle voice, email, chat, and social in a unified agent experience. We also build knowledge bases, agent productivity tools, and reporting structures that give managers real visibility into team performance.",
        bullets: ["Case Management Framework", "Omni-Channel Routing", "Escalation & SLA Logic", "Agent Productivity Tools"]
      },
      {
        title: "Experience Cloud",
        description: "We design and develop branded digital portals, partner communities, and customer self-service experiences on Experience Cloud — including authenticated user journeys, guest-access flows, and community-driven engagement models. Whether it's a customer support portal, a partner enablement hub, or an employee-facing community, we build experiences that are secure, scalable, and aligned to your brand identity.",
        bullets: ["Branded Portals & Hubs", "Authenticated Journeys", "Secure Guest Access", "Self-Service Communities"]
      },
      {
        title: "AI & Agentforce",
        description: "We implement Salesforce's Agentforce platform to deploy autonomous AI agents that handle real service and sales interactions without human intervention — including intelligent case routing, automated responses, and action execution across connected systems. We also handle prompt engineering for grounded, enterprise-safe AI interactions, Einstein AI configuration, and model strategy for industry-specific compliance and response quality requirements.",
        bullets: ["Agentforce Deployments", "Autonomous Agent Flows", "Grounded Prompt Engineering", "Einstein Compliance"]
      },
      {
        title: "Data Cloud",
        description: "We build unified customer data architectures on Salesforce Data Cloud — ingesting, harmonising, and activating data from fragmented sources across your enterprise into a single, real-time customer profile. This includes segmentation, identity resolution, real-time activation using live signals and event-driven triggers, and zero-copy integration patterns that connect your data without unnecessary duplication across systems.",
        bullets: ["Customer Data Architecture", "Fragmented Source Ingest", "Identity Resolution Rules", "Zero-Copy Integrations"]
      },
      {
        title: "Integrations & DevOps",
        description: "We design and build the integration and release infrastructure that makes enterprise Salesforce delivery sustainable — covering REST and SOAP API patterns, MuleSoft middleware architecture, CI/CD pipeline setup using GitHub and Flosum, 4-tier sandbox lifecycle management, and release governance frameworks that give your team full control over what goes to production, when, and how safely.",
        bullets: ["REST & SOAP APIs", "MuleSoft Architecture", "CI/CD & GitHub/Flosum", "Sandbox Lifecycle Support"]
      }
    ]
  },
  {
    id: "full-stack-engineering",
    number: "02",
    title: "Full-Stack Engineering",
    accentClass: "bg-teal-500",
    borderClass: "border-t-4 border-t-teal-500",
    textAccentClass: "text-teal-400",
    bgGlowClass: "from-teal-500/10",
    description: "Bespoke web applications, high-performance backends, and decoupled modern microservices.",
    subServices: [
      {
        title: "React & Next.js",
        description: "We build modern, high-performance web applications and enterprise portals using React and Next.js — from single-page applications and customer-facing dashboards to complex internal tools that need real-time data, role-based access, and seamless integration with backend APIs or Salesforce. Our frontend builds are component-driven, fully typed with TypeScript, and built with performance and maintainability as first-class requirements.",
        bullets: ["High-Performance Web Apps", "React & Next.js Frameworks", "TypeScript Typing", "Real-Time Access Control"]
      },
      {
        title: "Node.js & Express",
        description: "We architect and develop scalable backend APIs and microservices using Node.js and Express — handling authentication, business logic, third-party integrations, and data transformation layers that sit between your frontend applications and your core systems. Our Node builds are designed for production from day one, with structured error handling, logging, rate limiting, and documentation that make them easy to maintain and extend.",
        bullets: ["Scalable Express APIs", "Decoupled Business Logic", "Rate Limiting & Security", "Robust Microservices"]
      },
      {
        title: "Python",
        description: "We use Python across a wide range of backend and data engineering contexts — building automation scripts, data ingestion pipelines, ETL workflows, REST APIs with FastAPI or Flask, scheduled jobs, and integration connectors that tie together disparate systems. Python is also our primary language for machine learning work, making it a natural bridge between our engineering and AI/ML capabilities within a single engagement.",
        bullets: ["ETL Data Pipelines", "FastAPI & Flask APIs", "Automation & Scaling Jobs", "Engineering / AI Bridge"]
      },
      {
        title: "Java & Spring Boot",
        description: "We deliver enterprise-grade backend systems using Java and Spring Boot — building robust REST APIs, service layers, and integration components that meet the reliability and security standards expected by large organisations. Java is particularly well-suited to high-throughput, compliance-sensitive environments where thread safety, strong typing, and long-term maintainability matter more than development speed alone.",
        bullets: ["Spring Boot Frameworks", "Compliance & Threat Safety", "Highly Typed API Security", "Enterprise Service Layers"]
      },
      {
        title: "Database & Cloud",
        description: "We design and manage the data and infrastructure layer that underpins modern applications — including relational databases like PostgreSQL and MySQL, document stores like MongoDB, and cloud infrastructure across AWS and GCP. We handle schema design, query optimisation, data migration, environment configuration, and the infrastructure-as-code patterns that make cloud environments reproducible, secure, and cost-efficient at scale.",
        bullets: ["PostgreSQL & Mongo Stores", "AWS & GCP Architectures", "Query Optimisation Schemes", "Infrastructure as Code"]
      },
      {
        title: "DevOps & CI/CD",
        description: "We build the automated delivery pipelines and engineering infrastructure that allow teams to ship software confidently and consistently — using Docker for containerisation, GitHub Actions for CI/CD automation, automated testing frameworks for quality gates, and environment management strategies that eliminate the 'works on my machine' problem. Good DevOps practice is not an afterthought in our engagements — it is built into the delivery model from the start",
        bullets: ["Delivery Automation Paths", "Docker Containerisation", "GitHub Actions & Pipelines", "Quality Gates & Testing"]
      }
    ]
  },
  {
    id: "ai-data",
    number: "03",
    title: "AI & Data Solutions",
    accentClass: "bg-amber-500",
    borderClass: "border-t-4 border-t-amber-500",
    textAccentClass: "text-amber-400",
    bgGlowClass: "from-amber-500/10",
    description: "Intelligent automation, predictive machine learning pipelines, and structured analytical systems.",
    subServices: [
      {
        title: "AI Implementation",
        description: "We design and build custom AI solutions tailored to real business problems — including large language model (LLM) integration using OpenAI, Anthropic, and open-source models, retrieval-augmented generation (RAG) architectures for grounded enterprise responses, and AI-powered features embedded directly into web applications or Salesforce workflows. We handle the full lifecycle from use-case definition and model selection through to deployment, monitoring, and ongoing improvement.",
        bullets: ["LLM Grounded Integrations", "Custom RAG Architectures", "OpenAI & Anthropic Models", "Deployment & Verification"]
      },
      {
        title: "Python ML Pipelines",
        description: "We build end-to-end machine learning pipelines using Python — covering data ingestion and preprocessing, feature engineering, model training and evaluation using frameworks like TensorFlow, PyTorch, and scikit-learn, and inference workflows that serve predictions to production applications in real time. We also handle model versioning, experiment tracking, and the retraining pipelines that keep models accurate as data distributions change over time.",
        bullets: ["Ingestion & Preprocessing", "TensorFlow & PyTorch Models", "Real-Time Prediction Flows", "Retraining Pipelines"]
      },
      {
        title: "Intelligent Automation",
        description: "We identify and automate the high-volume, rule-based, and increasingly judgment-requiring processes that consume disproportionate time in enterprise operations — using AI-driven workflow orchestration, robotic process automation (RPA) patterns, and intelligent document processing to eliminate manual bottlenecks. The result is not just faster processes but smarter ones — systems that learn, adapt, and escalate to humans only when genuinely necessary.",
        bullets: ["Workflow Orchestration", "Intelligent Doc Processing", "Process Bottleneck Removal", "Smart Autonomous Escalate"]
      },
      {
        title: "Data Engineering",
        description: "We design and build the data infrastructure that organisations need to turn raw information into reliable, queryable, and actionable assets — including ETL and ELT pipelines, data warehouse design on platforms like BigQuery, Redshift, or Snowflake, real-time streaming architectures using Kafka or event-driven patterns, and analytics layers that connect to BI tools. Good data engineering is what makes AI and reporting actually trustworthy.",
        bullets: ["ELT & ETL Data Pipelines", "BigQuery, Redshift, Snowflake", "Real-Time Kafka Streaming", "Analytics BI integrations"]
      },
      {
        title: "API & Integration Layer",
        description: "We design the integration architecture that connects your systems cleanly and reliably — building REST and GraphQL APIs, WebSocket connections for real-time communication, event-driven architectures using message queues and pub/sub patterns, and webhook frameworks that keep data in sync across platforms without tight coupling. Well-designed integrations are invisible to end users and invaluable to engineering teams maintaining the system long-term.",
        bullets: ["REST & GraphQL Gateways", "WebSockets & Event Queues", "Loose Platform Coupling", "Long-Term Maintainability"]
      },
      {
        title: "Agentforce & Einstein",
        description: "We deploy Salesforce-native AI capabilities through Agentforce and Einstein — building autonomous agent flows that reason, retrieve, and act across your CRM data without requiring external AI infrastructure. This includes configuring agent topics and actions, engineering grounded prompts that stay within policy boundaries, connecting agents to external knowledge sources, and designing the fallback and escalation logic that keeps autonomous AI behaviour safe and auditable in enterprise environments",
        bullets: ["Agentforce Configuration", "CRM Grounded Actions", "Einstein Guardrail Policy", "Fallback & Escalation Logs"]
      }
    ]
  }
];

export default function Services() {
  // Track hovered state for each pillar ID
  const [hoveredPillarId, setHoveredPillarId] = useState<string | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // State for tracked expanded sub-service within each custom pillar
  // Set all to -1 so first subtitle is closed by default
  const [activeSubIndex, setActiveSubIndex] = useState<Record<string, number>>({
    "salesforce-platform": -1,
    "full-stack-engineering": -1,
    "ai-data": -1
  });

  const handleMouseEnter = (id: string) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setHoveredPillarId(id);
  };

  const handleMouseLeave = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredPillarId(null);
    }, 250); // Generous 250ms grace window prevents accidental micro-leaves from closing early
  };

  const getSubServiceIcon = (title: string, id: string) => {
    const t = title.toLowerCase();
    
    // Check main parent pillar to assign brand logos or beautiful themed vectors
    if (id === "salesforce-platform") {
      return <BrandLogos.Salesforce />;
    }
    if (t.includes("react") || t.includes("next")) {
      return <BrandLogos.React />;
    }
    if (t.includes("node")) {
      return <BrandLogos.Nodejs />;
    }
    if (t.includes("python")) {
      return <BrandLogos.Python />;
    }
    if (t.includes("java") || t.includes("spring")) {
      return <BrandLogos.Java />;
    }

    // Default fallbacks with fine brand coloring
    if (t.includes("ai") || t.includes("intelligence")) return <Brain className="w-5 h-5 text-amber-400 group-hover:scale-110 duration-200" />;
    if (t.includes("data") || t.includes("database")) return <Database className="w-5 h-5 text-teal-400 group-hover:scale-110 duration-200" />;
    if (t.includes("api")) return <Link className="w-5 h-5 text-brand-cyan group-hover:scale-110 duration-200" />;
    if (t.includes("devops")) return <GitBranch className="w-5 h-5 text-sky-400 group-hover:scale-110 duration-200" />;
    
    return <Box className="w-5 h-5 text-brand-cyan group-hover:scale-110 duration-200" />;
  };

  const handleToggle = (pillarId: string, itemIndex: number) => {
    setActiveSubIndex(prev => ({
      ...prev,
      [pillarId]: prev[pillarId] === itemIndex ? -1 : itemIndex
    }));
  };

  return (
    <section id="services" className="py-24 bg-brand-navy/30 relative border-t border-brand-border/40 scroll-mt-20">
      <div className="absolute inset-0 radial-glow pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full font-sans">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-cyan uppercase block mb-3">
            CAPABILITY PILLARS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-5 leading-tight">
            Integrated Enterprise Portals, Deep CRM, and AI Engineering
          </h2>
          <p className="font-sans text-base text-brand-gray/80 font-light max-w-2xl leading-relaxed">
            We bridge the gap between enterprise systems of record, custom decoupled platforms, and artificial intelligence architectures with disciplined engineering.
          </p>
        </div>

        {/* 3 Pillars Dynamic Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
          {PILLARS.map((pillar) => {
            const currentActiveIdx = activeSubIndex[pillar.id];
            const isPillarActive = hoveredPillarId === pillar.id;

            return (
              <div 
                id={`pillar-${pillar.id}`}
                key={pillar.id}
                className={`flex flex-col gap-4 bg-[#0A0E1A] p-6 rounded-2xl border transition-all duration-300 relative ${
                  isPillarActive ? "border-brand-cyan/20 bg-[#0E1528] shadow-[0_4px_30px_rgba(0,194,255,0.06)] scale-[1.01]" : "border-white/10 shadow-2xl"
                }`}
                onMouseEnter={() => handleMouseEnter(pillar.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Pillar Header Card - Compacted elegant wrapper */}
                <div 
                  className={`group/header p-6 bg-[#0D1527] ${pillar.borderClass} rounded-xl relative overflow-hidden transition-all duration-300 ${
                    isPillarActive ? "bg-[#111C35]" : ""
                  }`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${pillar.bgGlowClass} to-transparent blur-2xl opacity-30 pointer-events-none`} />
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-[9px] font-black tracking-widest uppercase ${pillar.textAccentClass}`}>
                      Pillar {pillar.number}
                    </span>
                    <div className={`w-1.5 h-1.5 rounded-full ${pillar.accentClass}`} />
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-white tracking-tight mb-2 transition-colors duration-200 group-hover/header:text-brand-cyan">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs text-brand-gray/65 leading-relaxed font-light mb-4">
                    {pillar.description}
                  </p>

                  {/* Active / Hint State footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="font-mono text-[9px] text-[#8892A4] uppercase tracking-wider flex items-center gap-1.5">
                      <span className={`w-1 h-1 rounded-full ${isPillarActive ? "bg-brand-cyan animate-ping" : "bg-[#8892A4]"}`} />
                      {isPillarActive ? "Exploring pillar" : "Hover block to expand"}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 text-[#8892A4] transition-all duration-300 ${
                      isPillarActive ? "text-brand-cyan translate-x-1" : "group-hover/header:translate-x-0.5"
                    }`} />
                  </div>
                </div>

                {/* Sub Services Accordion Interface: Ultra space-efficient & dynamic */}
                <div 
                  className={`flex flex-col gap-2.5 transition-all duration-500 ease-in-out origin-top ${
                    isPillarActive 
                      ? "opacity-100 max-h-[1400px] pointer-events-auto transform translate-y-0 visible pt-1" 
                      : "opacity-0 max-h-0 pointer-events-none select-none overflow-hidden h-0 invisible"
                  }`}
                >
                  {pillar.subServices.map((sub, sIdx) => {
                    const isOpen = currentActiveIdx === sIdx;

                    return (
                      <div
                        id={`subservice-${pillar.id}-${sIdx}`}
                        key={sIdx}
                        className={`group border rounded-xl transition-all duration-300 ${
                          isOpen 
                            ? "bg-[#0D1527] border-brand-cyan/20 ring-1 ring-brand-cyan/10" 
                            : "bg-[#0D1527]/35 border-white/5 hover:border-white/10 hover:bg-[#0D1527]/50"
                        }`}
                      >
                        {/* Selector Header Bar */}
                        <button
                          onClick={() => handleToggle(pillar.id, sIdx)}
                          className="w-full text-left p-4 flex items-center justify-between gap-3 cursor-pointer select-none"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-brand-navy border border-white/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                              {getSubServiceIcon(sub.title, pillar.id)}
                            </div>
                            <h4 className={`font-display font-bold text-xs sm:text-sm transition-colors duration-300 ${
                              isOpen ? "text-brand-cyan" : "text-white/80 group-hover:text-white"
                            }`}>
                              {sub.title}
                            </h4>
                          </div>

                          <div className="text-white/30 group-hover:text-white/60 transition-colors">
                            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </div>
                        </button>

                        {/* Interactive Expandable Segment */}
                        <div 
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="p-4 pt-0 border-t border-white/5 space-y-3">
                              <p className="font-sans text-xs text-white/70 font-light leading-relaxed">
                                {sub.description}
                              </p>

                              <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 pt-1.5">
                                {sub.bullets.map((b, bIdx) => (
                                  <span 
                                    key={bIdx}
                                    className="font-mono text-[9px] text-brand-cyan/85 bg-brand-cyan/5 border border-brand-cyan/10 rounded px-2 py-0.5 flex items-center gap-1.5"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-brand-cyan/70" />
                                    {b}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering foundations banner */}
        <div className="p-5 bg-[#0D1527]/80 border border-white/10 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-cyan/10 flex items-center justify-center flex-shrink-0 border border-brand-cyan/20">
              <ShieldAlert className="w-4 h-4 text-brand-cyan" />
            </div>
            <div>
              <h4 className="font-sans font-semibold text-sm text-white tracking-wide">
                Apex, Cloud Infrastructure, and Compliance Security Inherent in Every Work Unit
              </h4>
              <p className="text-xs text-white/50 font-light mt-0.5">
                Recursive runtime checks, least-privilege permission schemas, CI/CD code analyzers, and clean API interface documentation are delivered standard.
              </p>
            </div>
          </div>
          <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-brand-cyan bg-brand-cyan/5 px-2.5 py-1 rounded border border-brand-cyan/10 self-start sm:self-center">
            Standard Delivery
          </span>
        </div>

      </div>
    </section>
  );
}
