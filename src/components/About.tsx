import { CheckCircle2, ShieldCheck, HelpCircle, Briefcase } from "lucide-react";

export default function About() {
  const glanceBullets = [
    "Enterprise technology consulting across modern full-stack web platforms, custom AI/ML integrations, scalable data pipelines, and robust CRM systems",
    "Hands-on expertise in React, Node.js, Python, Java, cloud-native services (AWS/GCP), Apex, and scalable SaaS architectures",
    "Built to deliver end-to-end software solutions — from robust customer web portals and automated machine learning agents to highly optimized ETL data pipelines",
    "Security-first mindset with 90%+ core unit test coverage, CI/CD automated pipeline governance, and documented high-fidelity release deliveries"
  ];

  const clientBullets = [
    "Unified architectural approach — bridging high-performance frontends, robust backends, advanced AI tools, and key enterprise database layers in one cohesive partner",
    "Faster development and lower regression rates through modern modular software patterns, pre-built security blueprints, and structured release governance",
    "Tailor-made system designs — whether that's a multi-tenant SaaS application, an autonomous machine learning flow, or an integrated enterprise CRM workspace"
  ];

  const industryExposures = [
    {
      title: "Fintech & Cryptocurrencies",
      desc: "High-volume transaction ledgers, trading systems, and wallet integrations."
    },
    {
      title: "SaaS & Cloud Platforms",
      desc: "Multi-tenant onboarding pipelines, subscription billing, and telemetry."
    },
    {
      title: "Banking & Insurance",
      desc: "Least-privilege security models, branch-level isolation, and auditable ETL."
    },
    {
      title: "Commercial Real Estate",
      desc: "Modular app distribution, advisory listings, and MuleSoft integration."
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-brand-border/40 scroll-mt-20">
      <div className="absolute inset-0 radial-glow pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full font-sans">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-cyan uppercase block mb-3">
            WHO WE ARE
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-5 leading-tight">
            Bridging Enterprise CRM, Modern Engineering & AI
          </h2>
          <p className="text-base text-brand-gray/80 font-light max-w-2xl leading-relaxed">
            Geekstab is built differently. We combine standard enterprise platform consulting with full-stack capabilities and AI orchestrations to deliver robust digital assets.
          </p>
        </div>

        {/* 3-Column Bento style layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Geekstab at a Glance */}
          <div className="lg:col-span-4 bg-[#0D1527] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center text-brand-cyan">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-display font-extrabold text-lg text-white tracking-tight">
                  Geekstab at a Glance
                </h3>
              </div>

              <ul className="space-y-4">
                {glanceBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-white/70 leading-relaxed font-light">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: What Clients Get */}
          <div className="lg:col-span-4 bg-[#0D1527] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-400">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h3 className="font-display font-extrabold text-lg text-white tracking-tight">
                  What Clients Get
                </h3>
              </div>

              <ul className="space-y-4">
                {clientBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-white/70 leading-relaxed font-light">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: Featured Industry Exposure */}
          <div className="lg:col-span-4 bg-[#0D1527] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center text-brand-cyan">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="font-display font-extrabold text-lg text-white tracking-tight">
                  Featured Industry Exposure
                </h3>
              </div>

              <div className="space-y-4">
                {industryExposures.map((ind, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-3.5 last:border-0 last:pb-0">
                    <h4 className="font-display font-bold text-xs text-white mb-1">
                      {ind.title}
                    </h4>
                    <p className="text-[11px] text-white/50 leading-relaxed font-light">
                      {ind.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
