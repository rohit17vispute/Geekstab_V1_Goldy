import { INDUSTRIES } from "../data";
import { Building2, Code, Shield, Cpu, ChevronRight, Heart, ShoppingBag } from "lucide-react";

export default function Industries() {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "saas-tech":
        return <Code className="w-5 h-5 text-brand-cyan" />;
      case "fintech-crypto":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case "finance-banking":
        return <Shield className="w-5 h-5 text-amber-500" />;
      case "realestate-enterprise":
        return <Building2 className="w-5 h-5 text-blue-500" />;
      case "healthcare-lifesciences":
        return <Heart className="w-5 h-5 text-[#EF4444]" />;
      case "retail-ecommerce":
        return <ShoppingBag className="w-5 h-5 text-emerald-400" />;
      default:
        return <Building2 className="w-5 h-5 text-brand-cyan" />;
    }
  };

  const getIndustryHighlight = (id: string) => {
    switch (id) {
      case "saas-tech": return "border-brand-cyan";
      case "fintech-crypto": return "border-emerald-500";
      case "finance-banking": return "border-amber-500";
      case "healthcare-lifesciences": return "border-[#EF4444]";
      case "retail-ecommerce": return "border-emerald-400";
      default: return "border-blue-500";
    }
  };

  return (
    <section id="industries" className="py-24 relative border-t border-brand-border/40 scroll-mt-20">
      <div className="absolute inset-0 radial-glow pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-cyan uppercase block mb-3">
            SECTORS & INDUSTRIES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-5 leading-tight">
            Tailored Solutions for Regulated and High-Growth Sectors
          </h2>
          <p className="font-sans text-base text-brand-gray/80 font-light max-w-2xl leading-relaxed">
            We operate comfortably within complex regulatory guidelines, high transaction loads, and custom security requirements, delivering absolute architectural precision.
          </p>
        </div>

        {/* Balanced Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              id={`industry-card-${ind.id}`}
              key={ind.id}
              className={`group flex flex-col p-6 sm:p-7 bg-[#0D1527] border border-white/10 rounded-xl transition-all duration-300 relative overflow-hidden`}
            >
              {/* Vertical left border accent */}
              <div className={`absolute top-0 bottom-0 left-0 w-1 ${getIndustryHighlight(ind.id)}`} />

              {/* Icon Container */}
              <div className="w-10 h-10 bg-brand-navy border border-white/10 rounded-lg flex items-center justify-center mb-5 ml-2">
                {getIndustryIcon(ind.id)}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-base text-white mb-2 ml-2 tracking-tight group-hover:text-brand-cyan transition-colors duration-300 font-sans tracking-wide">
                {ind.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs text-white/60 leading-relaxed font-light mb-5 ml-2 flex-grow">
                {ind.description}
              </p>

              {/* Highlights List */}
              <ul className="space-y-3.5 border-t border-white/10 pt-4 ml-2">
                {ind.bulletPoints.map((pt, idx) => (
                  <li key={idx} className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-xs text-white/70 leading-snug font-light">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
