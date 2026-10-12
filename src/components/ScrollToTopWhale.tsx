import React, { useState, useEffect } from 'react';

export const ScrollToTopWhale: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Aparece cuando el usuario empieza a bajar (a partir de 250px de scroll)
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Volver al inicio"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-ocean-950/85 hover:bg-ocean-900/95 backdrop-blur-xl border border-cyan-400/40 hover:border-cyan-300 shadow-[0_8px_25px_rgba(0,0,0,0.5),0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] transition-all duration-300 cursor-pointer active:scale-90"
      >
        {/* Halo resplandeciente en hover */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-cyan-400/10 group-hover:bg-cyan-400/25 blur-sm transition-all duration-300 pointer-events-none" />

        {/* Logo de la ballena que apunta hacia arriba */}
        <img
          src="/whale-scroll-top.png"
          alt="Volver arriba - Somos Apnea"
          className="relative w-8 h-8 sm:w-10 sm:h-10 object-contain filter drop-shadow-[0_2px_8px_rgba(34,211,238,0.6)] group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300 select-none"
        />

        {/* Tooltip sutil flotante */}
        <span className="absolute -top-9 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-[11px] font-bold text-cyan-200 bg-ocean-950/90 px-2.5 py-1 rounded-lg border border-cyan-500/30 shadow-lg">
          Subir
        </span>
      </button>
    </div>
  );
};
