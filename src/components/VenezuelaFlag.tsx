import React from 'react';

interface VenezuelaFlagProps {
  className?: string;
}

export const VenezuelaFlag: React.FC<VenezuelaFlagProps> = ({ className = "w-6 h-4" }) => {
  return (
    <svg 
      viewBox="0 0 38 24" 
      className={`inline-block shrink-0 select-none drop-shadow-md ${className}`} 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bandera ondulante de Venezuela"
    >
      <title>Bandera de Venezuela ondeando al viento</title>
      <defs>
        <linearGradient id="flag-wave-ripple" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.12" />
          <stop offset="28%" stopColor="#ffffff" stopOpacity="0.32" />
          <stop offset="55%" stopColor="#000000" stopOpacity="0.25" />
          <stop offset="78%" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Asta metálica de la bandera */}
      <line x1="2.5" y1="1" x2="2.5" y2="23.5" stroke="#cbd5e1" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="2.5" cy="1.2" r="1.1" fill="#f59e0b" />

      {/* Franja Amarilla Ondulante (superior) */}
      <path 
        d="M 3.5,3 C 10.5,1.5 16.5,5.8 22.5,3.5 C 27.5,1.5 31.5,4 35.5,3.8 L 35.5,9.3 C 31.5,9.5 27.5,7 22.5,9 C 16.5,11.3 10.5,7 3.5,8.5 Z" 
        fill="#FFCC00" 
      />

      {/* Franja Azul Ondulante (centro) */}
      <path 
        d="M 3.5,8.5 C 10.5,7 16.5,11.3 22.5,9 C 27.5,7 31.5,9.5 35.5,9.3 L 35.5,14.8 C 31.5,15 27.5,12.5 22.5,14.5 C 16.5,16.8 10.5,12.5 3.5,14 Z" 
        fill="#00247D" 
      />

      {/* Franja Roja Ondulante (inferior) */}
      <path 
        d="M 3.5,14 C 10.5,12.5 16.5,16.8 22.5,14.5 C 27.5,12.5 31.5,15 35.5,14.8 L 35.5,20.3 C 31.5,20.5 27.5,18 22.5,20 C 16.5,22.3 10.5,18 3.5,19.5 Z" 
        fill="#CF142B" 
      />

      {/* 8 Estrellas Blancas en Arco siguiendo la onda de la tela */}
      <g fill="#FFFFFF">
        <circle cx="13.2" cy="12.8" r="0.65" />
        <circle cx="15.0" cy="11.7" r="0.65" />
        <circle cx="17.0" cy="10.9" r="0.65" />
        <circle cx="19.2" cy="10.5" r="0.65" />
        <circle cx="21.3" cy="10.5" r="0.65" />
        <circle cx="23.5" cy="11.0" r="0.65" />
        <circle cx="25.3" cy="11.8" r="0.65" />
        <circle cx="27.0" cy="12.9" r="0.65" />
      </g>

      {/* Capa de Sombras y Relieves de la Tela al Viento */}
      <path 
        d="M 3.5,3 C 10.5,1.5 16.5,5.8 22.5,3.5 C 27.5,1.5 31.5,4 35.5,3.8 L 35.5,20.3 C 31.5,20.5 27.5,18 22.5,20 C 16.5,22.3 10.5,18 3.5,19.5 Z" 
        fill="url(#flag-wave-ripple)" 
        style={{ mixBlendMode: 'multiply' }} 
      />
    </svg>
  );
};
