import React from 'react';

interface VenezuelaFlagProps {
  className?: string;
}

export const VenezuelaFlag: React.FC<VenezuelaFlagProps> = ({ className = "w-5 h-3.5" }) => {
  return (
    <svg 
      viewBox="0 0 30 20" 
      className={`inline-block overflow-hidden rounded-[3px] shadow-sm border border-white/50 shrink-0 select-none ${className}`} 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bandera de Venezuela"
    >
      <title>Bandera de Venezuela</title>
      {/* 3 Franjas Horizontales: Amarillo, Azul y Rojo */}
      <rect x="0" y="0" width="30" height="6.67" fill="#FFCC00" />
      <rect x="0" y="6.67" width="30" height="6.67" fill="#00247D" />
      <rect x="0" y="13.34" width="30" height="6.67" fill="#CF142B" />
      
      {/* Arco oficial de las 8 estrellas blancas en la franja azul */}
      <g fill="#FFFFFF">
        <circle cx="8.2" cy="11.4" r="0.6" />
        <circle cx="10.0" cy="9.9" r="0.6" />
        <circle cx="12.2" cy="8.9" r="0.6" />
        <circle cx="14.4" cy="8.4" r="0.6" />
        <circle cx="16.6" cy="8.4" r="0.6" />
        <circle cx="18.8" cy="8.9" r="0.6" />
        <circle cx="21.0" cy="9.9" r="0.6" />
        <circle cx="22.8" cy="11.4" r="0.6" />
      </g>
    </svg>
  );
};
