import React, { useEffect, useRef } from "react";
import { ArrowRight, ChevronRight, Terminal, Shield, Database, Cpu } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
  onWorkClick: () => void;
}

interface Particle3D {
  ux: number;
  uy: number;
  uz: number;
  baseSize: number;
  isLarge: boolean;
  color: string;
}

class BurstParticleImpl {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number = 1.0;
  decay: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.2 + Math.random() * 4.2;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.size = 0.8 + Math.random() * 2.2;
    this.decay = 0.015 + Math.random() * 0.018;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.95;
    this.vy *= 0.95;
    this.life -= this.decay;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.life <= 0) return;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * this.life, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 194, 255, ${this.life})`;
    ctx.fill();
  }
}

class RippleRingImpl {
  x: number;
  y: number;
  radius: number = 0;
  maxRadius: number;
  life: number = 1.0;
  decay: number = 0.018;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.maxRadius = 65 + Math.random() * 45;
  }

  update() {
    this.radius += (this.maxRadius - this.radius) * 0.08;
    this.life -= this.decay;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.life <= 0) return;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(0, 194, 255, ${this.life * 0.65})`;
    ctx.lineWidth = 1.5 * this.life;
    ctx.stroke();
  }
}

export default function Hero({ onContactClick, onWorkClick }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const burstsRef = useRef<BurstParticleImpl[]>([]);
  const ripplesRef = useRef<RippleRingImpl[]>([]);

  const interactionRef = useRef({
    targetTiltX: 0,
    targetTiltY: 0,
    currentTiltX: 0,
    currentTiltY: 0,
    autoRotationY: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Generate 3,500 particles with Fibonacci spiral placement
    const particles: Particle3D[] = [];
    const N = 3500;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < N; i++) {
      const uy = 1 - (i / (N - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - uy * uy);
      const theta = goldenAngle * i;
      const ux = Math.cos(theta) * radiusAtY;
      const uz = Math.sin(theta) * radiusAtY;

      // Particle size distributions
      const rand = Math.random();
      let baseSize = 0;
      let isLarge = false;
      if (rand < 0.80) {
        baseSize = 0.3 + Math.random() * 0.5; // mostly tiny (0.3 - 0.8px)
      } else if (rand < 0.95) {
        baseSize = 1.2 + Math.random() * 1.3; // some medium (1.2 - 2.5px)
      } else {
        baseSize = 2.8 + Math.random() * 2.2; // few large (2.8 - 5.0px)
        isLarge = true;
      }

      // Cybernetic color mapping
      let color = "rgba(255, 255, 255, 0.9)";
      if (isLarge) {
        color = "rgba(0, 194, 255, 1)";
      } else if (Math.random() < 0.3) {
        color = "rgba(0, 194, 255, 0.75)";
      } else if (Math.random() < 0.1) {
        color = "rgba(59, 130, 246, 0.7)";
      }

      particles.push({ ux, uy, uz, baseSize, isLarge, color });
    }

    let width = 0;
    let height = 0;
    let animationFrameId = 0;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      if (!entries || entries.length === 0) return;
      const { width: newWidth, height: newHeight } = entries[0].contentRect;
      width = newWidth;
      height = newHeight;
      canvas.width = newWidth;
      canvas.height = newHeight;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(section);

    const tick = () => {
      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(tick);
        return;
      }

      // Fill solid background #060B14 style
      ctx.fillStyle = "#060B14";
      ctx.fillRect(0, 0, width, height);

      const R = Math.min(width, height) * 0.28;
      const perspective = R * 1.6;
      const centerX = width / 2;
      const centerY = height / 2;

      const state = interactionRef.current;
      state.autoRotationY += 0.0012; // slow Y-axis auto-rotation

      // Smooth lirp transition
      state.currentTiltX += (state.targetTiltX - state.currentTiltX) * 0.045;
      state.currentTiltY += (state.targetTiltY - state.currentTiltY) * 0.045;

      const rotY = state.autoRotationY + state.currentTiltY;
      const rotX = state.currentTiltX;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      interface TempProj {
        xCanvas: number;
        yCanvas: number;
        zRotated: number;
        drawSize: number;
        alpha: number;
        isLarge: boolean;
        color: string;
      }

      const projectedList: TempProj[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const x0 = p.ux * R;
        const y0 = p.uy * R;
        const z0 = p.uz * R;

        // Apply slow rotate & tilts
        const x1 = x0 * cosY - z0 * sinY;
        const z1 = x0 * sinY + z0 * cosY;
        const y1 = y0;

        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        // Perspective division
        const zDist = perspective + z2;
        const f = perspective / zDist;

        const xCanvas = centerX + x2 * f;
        const yCanvas = centerY + y2 * f;

        const depthRatio = (z2 + R) / (2 * R);
        const alpha = Math.max(0.06, 1.0 - depthRatio * 0.82);

        const drawSize = p.baseSize * f;

        projectedList.push({
          xCanvas,
          yCanvas,
          zRotated: z2,
          drawSize,
          alpha,
          isLarge: p.isLarge,
          color: p.color
        });
      }

      // Occluding back-to-front sorting (Painter's Algorithm)
      projectedList.sort((a, b) => b.zRotated - a.zRotated);

      // Draw sorted sphere
      for (let i = 0; i < projectedList.length; i++) {
        const p = projectedList[i];

        // Cyan glow on large front-facing spheres
        if (p.isLarge && p.zRotated < 0) {
          ctx.beginPath();
          const glowRadius = p.drawSize * 3.8;
          const gradient = ctx.createRadialGradient(
            p.xCanvas, p.yCanvas, p.drawSize * 0.4,
            p.xCanvas, p.yCanvas, glowRadius
          );
          gradient.addColorStop(0, `rgba(0, 194, 255, ${p.alpha * 0.35})`);
          gradient.addColorStop(0.3, `rgba(0, 194, 255, ${p.alpha * 0.12})`);
          gradient.addColorStop(1, "rgba(0, 194, 255, 0)");
          ctx.fillStyle = gradient;
          ctx.arc(p.xCanvas, p.yCanvas, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.xCanvas, p.yCanvas, p.drawSize, 0, Math.PI * 2);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1.0; // reset

      // Render ripples
      const ripples = ripplesRef.current;
      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].update();
        if (ripples[i].life <= 0) {
          ripples.splice(i, 1);
        } else {
          ripples[i].draw(ctx);
        }
      }

      // Render bursts
      const bursts = burstsRef.current;
      for (let i = bursts.length - 1; i >= 0; i--) {
        bursts[i].update();
        if (bursts[i].life <= 0) {
          bursts.splice(i, 1);
        } else {
          bursts[i].draw(ctx);
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = 0.22; // subtle shift tilt
    const interaction = interactionRef.current;
    interaction.targetTiltY = ((mouseX - centerX) / centerX) * maxTilt;
    interaction.targetTiltX = -((mouseY - centerY) / centerY) * maxTilt;
  };

  const handleMouseLeave = () => {
    const interaction = interactionRef.current;
    interaction.targetTiltX = 0;
    interaction.targetTiltY = 0;
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Spawn 25-30 cyan burst particles
    const count = 25 + Math.floor(Math.random() * 6);
    const bursts = burstsRef.current;
    for (let i = 0; i < count; i++) {
      bursts.push(new BurstParticleImpl(clickX, clickY));
    }

    // Spawn expanding ripple ring
    const ripples = ripplesRef.current;
    ripples.push(new RippleRingImpl(clickX, clickY));
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#060B14]"
    >
      {/* HTML5 pure Canvas rotating particle background sphere */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 block cursor-crosshair"
      />

      {/* Ambient gradient glows layered on top of the base sphere canvas */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] radial-glow-cyan pointer-events-none opacity-30 z-5" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] radial-glow-blue pointer-events-none opacity-30 z-5" />

      {/* Embedded CSS for infinite background matrix pulse */}
      <style>{`
        @keyframes tech-pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }
        .animate-tech-grid {
          animation: tech-pulse 8s infinite ease-in-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Meta Label */}
            <div className="inline-flex items-center gap-2 text-[#00C2FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-10 h-[1px] bg-[#00C2FF]" /> Enterprise Salesforce Partner
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.05] mb-6">
              Enterprise Technology Delivery <span className="text-brand-cyan">—</span> Salesforce, Full-Stack & AI
            </h1>

            {/* Subline */}
            <p className="font-sans text-base sm:text-lg text-white/50 max-w-2xl font-light mb-8 leading-relaxed">
              We build scalable platforms, intelligent systems, and connected enterprise experiences — across Salesforce, Python, React, Node.js, Java, and AI/ML.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-cta-work"
                onClick={onWorkClick}
                className="bg-white text-brand-navy px-8 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-brand-cyan hover:text-brand-navy transition-all duration-300 cursor-pointer text-center"
              >
                View Our Work
              </button>

              <button
                id="hero-cta-contact"
                onClick={onContactClick}
                className="border border-white/20 text-white px-8 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:border-brand-cyan hover:text-brand-cyan transition-all duration-300 cursor-pointer text-center"
              >
                Start a Conversation
              </button>
            </div>

            {/* Trust Indicator Metrics */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-brand-border/60 w-full animate-fade-in">
              <div>
                <span className="block font-display font-bold text-2xl sm:text-3xl text-white">45+</span>
                <span className="block text-xs font-mono text-brand-gray-dark tracking-wide uppercase mt-1">Core Tech Stack</span>
              </div>
              <div>
                <span className="block font-display font-bold text-2xl sm:text-3xl text-white">7+</span>
                <span className="block text-xs font-mono text-brand-gray-dark tracking-wide uppercase mt-1">Fortune Clients</span>
              </div>
              <div>
                <span className="block font-display font-bold text-2xl sm:text-3xl text-brand-cyan">100%</span>
                <span className="block text-xs font-mono text-brand-gray-dark tracking-wide uppercase mt-1">Audited Delivery</span>
              </div>
            </div>
          </div>

          {/* Interactive Core Pillars / Code mockup Card Column */}
          <div className="lg:col-span-5 h-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 to-transparent blur-3xl rounded-full scale-75 opacity-30 pointer-events-none" />

            {/* Immersive Terminal UI / Page 1 Blueprint representation */}
            <div className="w-full max-w-md bg-brand-navy/90 border border-brand-border rounded-xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-md hover:border-brand-cyan/20 transition-all duration-300">
              <div className="flex items-center justify-between border-b border-brand-border/60 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-mono text-[10px] text-brand-gray-dark select-none font-bold">
                    geekstab_blueprint_layer.yaml
                  </span>
                </div>
              </div>

              {/* Blueprint pillars with icons */}
              <div className="space-y-4">
                {/* Full-Stack & Cloud */}
                <div className="p-3.5 rounded-lg bg-brand-darker border border-brand-border/60 hover:border-brand-cyan/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2.5">
                    <Terminal className="w-4 h-4 text-brand-cyan" />
                    <span className="text-sm font-semibold text-white tracking-wide">Full-Stack & Cloud Architecture</span>
                  </div>
                  <p className="text-xs text-brand-gray/80 pl-7 leading-relaxed font-light">
                    High-performance platforms built with React, Node.js, Python, Java, Docker, and secure AWS/GCP cloud environments.
                  </p>
                </div>

                {/* AI & ML */}
                <div className="p-3.5 rounded-lg bg-brand-darker border border-brand-border/60 hover:border-brand-cyan/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2.5">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-white tracking-wide">Enterprise AI & Private LLMs</span>
                  </div>
                  <p className="text-xs text-brand-gray/80 pl-7 leading-relaxed font-light">
                    Grounded prompt architectures, autonomous agentic workflows, custom semantic vector search, and model tuning.
                  </p>
                </div>

                {/* Data Sync & Salesforce */}
                <div className="p-3.5 rounded-lg bg-brand-darker border border-brand-border/60 hover:border-brand-cyan/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2.5">
                    <Database className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-semibold text-white tracking-wide">Data Integration & CRM Sync</span>
                  </div>
                  <p className="text-xs text-brand-gray/80 pl-7 leading-relaxed font-light">
                    Secure real-time database synchronization, automated high-scale ETL, custom REST/GraphQL APIs, and Salesforce ecosystem integrations.
                  </p>
                </div>
              </div>

              {/* Minimalist interactive terminal prompt */}
              <div className="mt-5 pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs font-mono select-none">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">$</span>
                  <span className="text-brand-gray-dark">geekstab --validate --release</span>
                  <span className="w-2 h-4 bg-brand-cyan animate-pulse" />
                </div>
                <span className="text-[10px] text-emerald-400/80 font-bold uppercase tracking-wider">
                  Active
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
