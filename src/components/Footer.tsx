import React from 'react';
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="relative border-t border-cyan-500/20 bg-ocean-950/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-ocean-900 border border-cyan-300 p-2 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-200" fill="currentColor">
                  <circle cx="50" cy="22" r="9" />
                  <path d="M46 34 L54 34 L58 55 L65 72 L61 74 L54 60 L50 78 L43 96 L37 94 L44 75 L45 52 L38 42 Z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-white text-xs font-bold tracking-widest">SOMOS</span>
                  <span className="inline-flex items-center overflow-hidden rounded-sm w-4 h-2.5 border border-white/40">
                    <span className="w-1/3 h-full bg-[#fdd116]"></span>
                    <span className="w-1/3 h-full bg-[#003da5]"></span>
                    <span className="w-1/3 h-full bg-[#ce1126]"></span>
                  </span>
                </div>
                <span className="text-cyan-300 text-sm font-extrabold tracking-wider leading-none">APNEA</span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Escuela de apnea deportiva en Venezuela. Promovemos el buceo a pulmón libre bajo estrictos estándares de seguridad, conexión mental y respeto absoluto por el ecosistema marino.
            </p>

            <div className="flex items-center gap-3 text-slate-300 text-xs">
              <span className="flex items-center gap-1 text-cyan-300">
                <MapPin className="w-4 h-4" /> Caracas & Chichiriviche de la Costa, Venezuela
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#home" className="hover:text-cyan-300 transition-colors">Inicio</a></li>
              <li><a href="#cursos" className="hover:text-cyan-300 transition-colors">Cursos & Certificaciones</a></li>
              <li><a href="#entrenamientos" className="hover:text-cyan-300 transition-colors">Entrenamientos & Spots</a></li>
              <li><a href="#competencias" className="hover:text-cyan-300 transition-colors">Atletas & Competencias</a></li>
              <li><a href="#blog" className="hover:text-cyan-300 transition-colors">Blog y Consejos de Respiración</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contacto Directo
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <a 
                href="https://wa.me/584120000000" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>WhatsApp: +58 412 000 0000</span>
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-cyan-300 transition-colors"
              >
                <Instagram className="w-4 h-4 text-cyan-400" />
                <span>Instagram: @somosapnea</span>
              </a>

              <a 
                href="mailto:info@somosapnea.com" 
                className="flex items-center gap-2.5 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@somosapnea.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Somos Apnea Venezuela. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-coral-500 fill-coral-500" />
            <span>para el mar venezolano 🇻🇪</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
