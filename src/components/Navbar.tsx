import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { VenezuelaFlag } from './VenezuelaFlag';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navLinks = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'curses', label: 'CURSOS', href: '#cursos' },
    { id: 'training', label: 'TRAINING', href: '#entrenamientos' },
    { id: 'competitions', label: 'COMPETITIONS', href: '#competencias' },
    { id: 'blog', label: 'BLOG', href: '#blog' },
    { id: 'contact', label: 'CONTACT', href: '#contacto' },
  ];

  return (
    <header className="fixed top-3 md:top-5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <nav className="glass-nav rounded-2xl md:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300">
        
        {/* Logo Oficial: SOMOS + Ballena Grande + APNEA en una sola fila */}
        <a href="#home" className="flex items-center gap-2 sm:gap-2.5 md:gap-3 group">
          {/* SOMOS (letras más pequeñas y estilizadas) */}
          <span className="text-white text-xs sm:text-[13px] md:text-sm font-bold tracking-[0.2em] drop-shadow leading-none uppercase">
            SOMOS
          </span>

          {/* En el medio: Solo la ballena flotante más grande (sin botón ni círculo) */}
          <div className="relative h-12 sm:h-14 md:h-16 w-10 sm:w-12 md:w-14 flex items-center justify-center shrink-0">
            <img 
              src="/whale-only.png" 
              alt="Somos Apnea Ballena" 
              className="h-full w-full object-contain filter drop-shadow-[0_0_10px_rgba(56,164,224,0.6)] group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* APNEA (letras más pequeñas) + Bandera oficial de Venezuela */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-cyan-300 text-xs sm:text-[13px] md:text-sm font-extrabold tracking-[0.18em] drop-shadow leading-none uppercase">
              APNEA
            </span>
            <VenezuelaFlag className="w-4 h-2.5 sm:w-5 sm:h-3.5 shadow" />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.id)}
                className={`text-xs font-semibold tracking-wider transition-all duration-200 relative py-1 ${
                  isActive 
                    ? 'text-cyan-300 font-bold' 
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_#38a4e0]"></span>
                )}
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenJoinModal}
            className="btn-coral text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full flex items-center gap-2 group cursor-pointer shadow-lg"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-200 hover:text-white p-1.5 focus:outline-none"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 glass-card rounded-2xl p-5 border border-cyan-500/20 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-3 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                  activeTab === link.id
                    ? 'bg-cyan-500/20 text-cyan-300'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full btn-coral text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <span>JOIN NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
