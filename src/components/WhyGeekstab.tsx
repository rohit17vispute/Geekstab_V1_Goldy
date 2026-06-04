import { DIFFERENTIATORS } from "../data";
import { Check, ShieldCheck, Cpu, Code2, Compass, Key, Database, FileText, GitMerge } from "lucide-react";

export default function WhyGeekstab() {
  const getDifferentiatorIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-brand-cyan" />;
      case 1:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Key className="w-5 h-5 text-amber-500" />;
      case 3:
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case 4:
        return <FileText className="w-5 h-5 text-brand-cyan" />;
      case 5:
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 6:
        return <GitMerge className="w-5 h-5 text-amber-500" />;
      default:
        return <Check className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section id="differentiators" className="py-24 bg-brand-navy/30 relative border-t border-brand-border/40 scroll-mt-20">
      <div className="absolute inset-0 radial-glow pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Large Layout Divided into Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
          
          {/* Left sticky column */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <span className="font-mono text-xs font-bold tracking-widest text-brand-cyan uppercase block mb-3">
              THE GEEKSTAB EDGE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-5 leading-tight">
              Why Enterprise Leaders Select Geekstab
            </h2>
            <p className="text-base text-brand-gray/80 font-light leading-relaxed mb-6">
              We replace standard developer templates with disciplined full-stack engineering, advanced AI architectures, and secure, high-performance systems designed for long-term health.
            </p>

            <div className="p-4 bg-[#0D1527] border border-white/10 rounded-xl text-xs text-brand-gray-dark font-mono space-y-1 select-none">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <span>OWASP & SQLi Audited</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <span>Race-Condition Hardened</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <span>Mock Provider Layer Implemented</span>
              </div>
            </div>
          </div>

          {/* Right Cards Stack column */}
          <div className="lg:col-span-8 space-y-6">
            {DIFFERENTIATORS.map((diff, idx) => (
              <div
                id={`differentiator-item-${idx}`}
                key={idx}
                className="p-6 sm:p-8 bg-[#0D1527] border border-white/10 rounded-xl hover:border-brand-cyan/25 transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 backdrop-blur-sm"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 bg-brand-navy border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {getDifferentiatorIcon(idx)}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <h3 className="font-display font-bold text-base text-white select-none">
                      {diff.title}
                    </h3>
                    <span className="font-mono text-[10px] font-bold text-[#00C2FF] tracking-wider uppercase bg-brand-cyan/5 border border-brand-cyan/15 rounded-md px-2 py-0.5">
                      {diff.highlight}
                    </span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-light">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
