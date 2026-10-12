import React from 'react';
import { Instagram, Mail, Phone, MapPin, Heart, Users } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="relative border-t border-cyan-500/20 bg-ocean-950/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4 select-none">
              <img 
                src="/somos-apnea-logo-oficial.png" 
                alt="Somos Apnea" 
                className="h-24 sm:h-28 md:h-32 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] pointer-events-none"
              />
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Asociación civil sin fines de lucro y comunidad de apnea en Venezuela. Promovemos la práctica del buceo a pulmón libre, impulsamos el desarrollo de nuestros atletas y fomentamos inmersiones seguras en armonía con el mar.
            </p>

            <div className="flex items-center gap-3 text-slate-300 text-xs">
              <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
                <MapPin className="w-4 h-4 text-cyan-400" /> Caracas, Venezuela
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
              <li><a href="#cursos" className="hover:text-cyan-300 transition-colors">Talleres & Formación</a></li>
              <li><a href="#entrenamientos" className="hover:text-cyan-300 transition-colors">Comunidad & Salidas al Mar</a></li>
              <li><a href="#competencias" className="hover:text-cyan-300 transition-colors">Resultados & Torneos AIDA</a></li>
              <li><a href="#blog" className="hover:text-cyan-300 transition-colors">Blog y Consejos de Apnea</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contacto & Redes
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <a 
                href="https://instagram.com/somosapnea" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-cyan-300 transition-colors"
              >
                <Instagram className="w-4 h-4 text-cyan-400" />
                <span>Instagram: @somosapnea</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-cyan-400/60" />
                <span>Próximamente correo de contacto</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-cyan-400/60" />
                <span>Próximamente línea directa</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Somos Apnea Venezuela. Asociación Civil sin Fines de Lucro.
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span>Impulsando la apnea en el mar venezolano 🇻🇪❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};