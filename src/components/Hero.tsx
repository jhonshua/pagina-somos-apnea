import React from 'react';
import { Compass, Award, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16 md:py-0"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Somos Apnea - Escuela de apnea deportiva en Venezuela" 
          className="w-full h-full object-cover object-[60%_center] md:object-center filter brightness-95 contrast-[1.05]"
        />
        {/* Ambient Oceanic Overlays for readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-ocean-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/90 via-ocean-950/40 to-transparent max-w-4xl" />
        {/* Subtle Water Caustic / God Rays Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center min-h-[85vh]">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-nav border border-cyan-400/30 text-cyan-200 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Formación de Alto Rendimiento & Iniciación</span>
          </div>

          {/* Main Title - 3D embossed look from reference image */}
          <h1 className="title-3d font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] uppercase mb-4">
            LIBERTAD EN UNA<br />
            <span className="text-white drop-shadow-[0_4px_16px_rgba(20,99,148,0.8)]">
              RESPIRACIÓN
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-base sm:text-lg md:text-xl font-medium tracking-wide uppercase mb-8 max-w-xl text-shadow">
            ESCUELA DE APNEA DEPORTIVA EN VENEZUELA
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenJoinModal}
              className="btn-coral text-white font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>DESCUBRE TUS LÍMITES</span>
            </button>

            <a
              href="#cursos"
              className="glass-nav text-cyan-100 hover:text-white font-semibold text-sm px-6 py-3.5 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 border border-white/20 hover:border-cyan-300/40 transition-colors"
            >
              <span>Ver Programas</span>
            </a>
          </div>

          {/* Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
            <div className="glass-nav rounded-xl p-3 border border-white/10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase">100% Seguro</h4>
                <p className="text-[11px] text-slate-300">Protocolos y rescate</p>
              </div>
            </div>

            <div className="glass-nav rounded-xl p-3 border border-white/10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase">Certificación</h4>
                <p className="text-[11px] text-slate-300">Aval internacional</p>
              </div>
            </div>

            <div className="glass-nav rounded-xl p-3 border border-white/10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase">Mar y Piscina</h4>
                <p className="text-[11px] text-slate-300">Caracas y La Guaira</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#cursos"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-cyan-300/80 hover:text-cyan-200 transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold">Explorar</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
