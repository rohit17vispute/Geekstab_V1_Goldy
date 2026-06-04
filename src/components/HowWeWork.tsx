import { useState } from "react";
import { HOW_WE_WORK_STEPS } from "../data";
import { ChevronRight, Database, Code, Shield, CheckCircle2, RefreshCw, Send, Milestone } from "lucide-react";

export default function HowWeWork() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const getStepIcon = (num: number) => {
    switch (num) {
      case 1:
        return <Milestone className="w-5 h-5 text-brand-cyan" />;
      case 2:
        return <Database className="w-5 h-5 text-brand-cyan" />;
      case 3:
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 4:
        return <Shield className="w-5 h-5 text-amber-500" />;
      case 5:
        return <Send className="w-5 h-5 text-blue-500" />;
      case 6:
        return <RefreshCw className="w-5 h-5 text-brand-cyan animate-spin-slow" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-brand-cyan" />;
    }
  };

  const getStepColorClass = (num: number) => {
    if (num === 1 || num === 2 || num === 6) return "border-brand-cyan bg-brand-cyan/10 text-brand-cyan";
    if (num === 3) return "border-emerald-500 bg-emerald-500/10 text-emerald-400";
    if (num === 4) return "border-amber-500 bg-amber-500/10 text-amber-400";
    return "border-blue-500 bg-blue-500/10 text-blue-400";
  };

  return (
    <section id="approach" className="py-24 relative border-t border-brand-border/40 scroll-mt-20">
      <div className="absolute inset-0 radial-glow pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-cyan uppercase block mb-3">
            DELIVERY FRAMEWORK
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-5 leading-tight">
            How We Work: From Architecture Blueprint to Support Operations
          </h2>
          <p className="font-sans text-base text-brand-gray/80 font-light max-w-2xl leading-relaxed">
            Our structured, 6-phase release governance pipeline ensures that zero-defect code transfers safely from localized sandboxes into your critical production environments.
          </p>
        </div>

        {/* Stepper Display (Horizontal for desktop, stacked for mobile) */}
        <div className="hidden lg:grid grid-cols-6 gap-6 relative mb-12">
          {/* Connecting line background */}
          <div className="absolute top-[32px] left-[5%] right-[5%] h-px bg-brand-border/60 z-0" />

          {HOW_WE_WORK_STEPS.map((step, idx) => {
            const isHovered = hoveredStep === idx;
            const isSelected = selectedStep === idx;
            const stepColor = step.number === 3 ? "text-emerald-400" : step.number === 4 ? "text-amber-500" : "text-brand-cyan";

            return (
              <div
                id={`framework-step-desktop-${step.number}`}
                key={step.number}
                className="relative z-10 flex flex-col items-center text-center cursor-pointer group"
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setSelectedStep(idx)}
              >
                {/* Visual Circle Indicator */}
                <div
                  className={`w-16 h-16 rounded-full border flex items-center justify-center mb-5 transition-all duration-300 ${
                    isSelected
                      ? "border-brand-cyan bg-brand-cyan/15 scale-105"
                      : "border-white/10 bg-[#0D1527] hover:border-brand-cyan/40 hover:scale-102"
                  }`}
                >
                  {getStepIcon(step.number)}
                </div>

                {/* Info and Titles */}
                <span className="font-mono text-[10px] font-bold tracking-widest text-brand-gray-dark uppercase mb-1">
                  Phase 0{step.number}
                </span>
                <h4 className="font-sans font-bold text-sm text-white group-hover:text-brand-cyan transition-colors duration-300">
                  {step.phase}
                </h4>
                <p className="font-sans text-xs text-brand-gray-dark tracking-wide font-medium mt-1 uppercase max-w-[120px]">
                  {step.title.split(" & ")[0]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Phase Detail Showcase Card */}
        <div className="hidden lg:block bg-[#0D1527] border border-white/10 p-8 rounded-xl shadow-xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] radial-glow-cyan pointer-events-none opacity-20" />
          <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
            HOW_WE_WORK_STEPS[selectedStep].number === 3
              ? "bg-emerald-500"
              : HOW_WE_WORK_STEPS[selectedStep].number === 4
              ? "bg-amber-500"
              : "bg-brand-cyan"
          }`} />

          <div className="flex items-center gap-4 mb-4 select-none">
            <span className="font-mono text-xs font-semibold tracking-wider text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-lg">
              Phase 0{HOW_WE_WORK_STEPS[selectedStep].number}
            </span>
            <ChevronRight className="w-4 h-4 text-white/30" />
            <span className="font-display font-semibold text-sm uppercase tracking-wider text-white">
              {HOW_WE_WORK_STEPS[selectedStep].phase} Framework
            </span>
          </div>

          <h3 className="font-display font-bold text-2xl text-white mb-2">
            {HOW_WE_WORK_STEPS[selectedStep].title}
          </h3>
          <p className="font-sans text-xs text-white/60 leading-relaxed font-light max-w-4xl">
            {HOW_WE_WORK_STEPS[selectedStep].description}
          </p>

          <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/10 text-xs font-mono text-white/40">
            <div>
              <span className="block text-brand-cyan font-bold uppercase mb-1">Deliverable</span>
              <span className="text-white font-sans font-light">Comprehensive specification & architectural models</span>
            </div>
            <div>
              <span className="block text-brand-cyan font-bold uppercase mb-1">Governance Standard</span>
              <span className="text-white font-sans font-light">Peer-reviewed documentation, locked sharing rules</span>
            </div>
            <div>
              <span className="block text-brand-cyan font-bold uppercase mb-1">Audit Check</span>
              <span className="text-white font-sans font-light">100% trace records checked before status signoff</span>
            </div>
          </div>
        </div>

        {/* Mobile / Vertical representation (Always visible on small screens, replacement on large) */}
        <div className="lg:hidden space-y-6">
          {HOW_WE_WORK_STEPS.map((step) => (
            <div
              id={`framework-step-mobile-${step.number}`}
              key={step.number}
              className="flex gap-4 p-5 bg-[#0D1527] border border-white/10 rounded-xl hover:border-brand-cyan/40 transition-colors relative"
            >
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 ${getStepColorClass(step.number)}`}>
                {getStepIcon(step.number)}
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[10px] font-bold text-brand-cyan uppercase tracking-wider">
                    Phase 0{step.number} — {step.phase}
                  </span>
                </div>
                <h4 className="font-display font-semibold text-sm text-white mb-1">
                  {step.title}
                </h4>
                <p className="font-sans text-xs text-white/60 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Orchestration How It Works footer bar */}
        <div className="mt-8 bg-brand-darker border border-brand-border/60 rounded-xl p-6 shadow-md">
          <div className="flex flex-col sm:flex-row items-slate-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-400/5 px-2 py-1 rounded-md border border-emerald-400/10">
                Agentforce Path
              </span>
              <h4 className="font-sans font-bold text-sm text-white select-none">
                AI Agent Lifecycle Alignment
              </h4>
            </div>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] font-semibold text-brand-gray-dark/95">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-navy border border-brand-border">
                <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[10px]">1</span>
                Data Cloud Ingestion
              </span>
              <ChevronRight className="w-3 h-3 text-brand-border" />
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-navy border border-brand-border">
                <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-[10px]">2</span>
                Prompt Context Grounding
              </span>
              <ChevronRight className="w-3 h-3 text-brand-border" />
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-navy border border-brand-border">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">3</span>
                Autonomous Agent Execution
              </span>
              <ChevronRight className="w-3 h-3 text-brand-border" />
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-navy border border-brand-border text-white border-brand-cyan/20 bg-brand-cyan/5">
                <span className="w-5 h-5 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center font-bold text-[10px]">4</span>
                Decoupled Service Action
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
