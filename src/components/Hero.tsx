import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenJoinModal: () => void;
  onOpenCalendarModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal, onOpenCalendarModal }) => {
  return (
    /* Reducimos el alto del scroll de 185vh a 130vh para que el efecto sticky se mantenga pero no sea tan largo */
    <section id="home" className="relative w-full min-h-[130vh] isolate">
      {/* Contenedor del fondo fijo (Sticky) mientras dura el scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Somos Apnea - Comunidad de apnea deportiva en Venezuela" 
          className="w-full h-full object-cover object-[55%_center] md:object-center select-none"
          loading="eager"
          // @ts-ignore
          fetchPriority="high"
        />
        {/* Ambient Oceanic Overlays for readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-ocean-950/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/85 via-ocean-950/35 to-transparent max-w-4xl pointer-events-none" />
        {/* Subtle Water Caustic / God Rays Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Contenedor del texto que sube sobre el fondo fijo */}
      <div className="relative -mt-[100vh] min-h-[130vh] flex flex-col justify-between pt-28 sm:pt-32 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 pointer-events-none">
        
        {/* Bloque principal centrado en pantalla */}
        <div className="min-h-[calc(100vh-10rem)] flex flex-col justify-center pointer-events-auto">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Main Title - 3D embossed look */}
            <h1 className="title-3d font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] uppercase mb-5">
              LIBERTAD EN UNA<br />
              <span className="text-white drop-shadow-[0_4px_16px_rgba(20,99,148,0.8)]">
                RESPIRACIÓN
              </span>
            </h1>

            {/* Botón: Calendario de actividades */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onOpenCalendarModal}
                className="btn-coral text-white font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center gap-3 cursor-pointer w-fit group hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <span>Calendario de actividades</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator - Apuntando al siguiente id (p. ej. #stats) */}
        <div className="pb-4 flex justify-center pointer-events-auto">
          <a 
            href="#stats"
            className="flex flex-col items-center gap-1 text-cyan-300/80 hover:text-cyan-200 transition-colors cursor-pointer"
          >
            <span className="text-[10px] tracking-widest uppercase font-semibold">Explorar</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};