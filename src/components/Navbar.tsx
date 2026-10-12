import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Escuchar el scroll para activar el halo sutil detrás del logo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'Inicio', label: 'Inicio', href: '#home' },
    { id: 'curses', label: 'Cursos', href: '#cursos' },
    { id: 'Entrenamioentos', label: 'Entrenamientos', href: '#entrenamientos' },
    { id: 'Competencias', label: 'Competencias', href: '#competencias' },
    { id: 'blog', label: 'BLOG', href: '#blog' },
    { id: 'contacto', label: 'Contactanos', href: '#contacto' },
  ];

  return (
    <header className="fixed top-3 md:top-5 left-0 right-0 z-50 px-4 max-w-7xl mx-auto flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
      
      {/* Contenedor del Logo con halo/fondo súper suave y mimetizado */}
      <div 
        className={`flex-shrink-0 select-none p-3 sm:p-4 rounded-full transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'bg-slate-950/35 backdrop-blur-md shadow-2xl shadow-black/20' 
            : 'bg-transparent'
        }`}
      >
        <img 
          src="/somos-apnea-logo-oficial.png" 
          alt="Somos Apnea" 
          className="h-16 sm:h-20 md:h-24 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] pointer-events-none transition-all duration-700"
        />
      </div>

      {/* Cápsula Gris (glass-nav) */}
      <nav className="glass-nav rounded-2xl md:rounded-full px-5 sm:px-7 py-2.5 sm:py-3 flex items-center gap-6 sm:gap-8 transition-all duration-300">
        
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
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
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenJoinModal}
            className="btn-coral text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full flex items-center gap-2 group cursor-pointer shadow-lg"
          >
            <span>COMUNIDAD</span>
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
        <div className="absolute top-full left-4 right-4 lg:hidden mt-2 glass-card rounded-2xl p-5 border border-cyan-500/20 shadow-2xl backdrop-blur-xl">
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
                <span>COMUNIDAD</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};