import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

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
        
        {/* Logo Oficial */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-cyan-900/60 via-ocean-900 to-ocean-950 border border-cyan-300/50 p-1 flex items-center justify-center shadow-lg shadow-cyan-950/70 group-hover:border-cyan-200 transition-all">
            <img 
              src="/logo-somos-apnea.png" 
              alt="Somos Apnea Logo" 
              className="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(56,164,224,0.4)] group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none"></div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-white text-xs md:text-sm font-bold tracking-widest drop-shadow">SOMOS</span>
              {/* Venezuelan Flag Badge */}
              <span className="inline-flex items-center overflow-hidden rounded-sm w-4 h-2.5 shadow-sm border border-white/40" title="Venezuela">
                <span className="w-1/3 h-full bg-[#fdd116]"></span>
                <span className="w-1/3 h-full bg-[#003da5]"></span>
                <span className="w-1/3 h-full bg-[#ce1126]"></span>
              </span>
            </div>
            <span className="text-cyan-300 text-sm md:text-base font-black tracking-wider leading-none drop-shadow">APNEA</span>
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
