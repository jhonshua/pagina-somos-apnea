import React from 'react';
import { Anchor, Users, Compass, ShieldCheck, HeartHandshake, Sparkles, MapPin } from 'lucide-react';

export const TrainingSpots: React.FC = () => {
  return (
    <section id="entrenamientos" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-nav border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Users className="w-3.5 h-3.5" />
          <span>Iniciativa de Comunidad • Somos Apnea</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
          Encuentros y Salidas al Mar
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Impulsamos la unión de la comunidad de apneístas en Venezuela para organizarnos, compartir logística e ir juntos a profundizar en el azul de manera segura.
        </p>
      </div>

      {/* Tarjeta Única Centralizada */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-b from-slate-900/90 via-cyan-950/30 to-slate-900/90">
        <div className="absolute -right-16 -top-16 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          {/* Header de la Tarjeta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                Autogestión & Desarrollo Deportivo
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Inmersiones Comunitarias en Profundidad
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold shrink-0 self-start sm:self-center">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Próximo Proyecto</span>
            </div>
          </div>

          {/* Descripción de la visión */}
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-8">
            Nuestra visión es reunir a los apneístas de todo el país para organizar logística colaborativa (transporte, hospedaje y logística en costa) para realizar jornadas de fin de semana en el mar. Queremos que la comunidad tenga espacios reales para practicar peso constante e inmersión libre, trabajar la ecualización en profundidad y pulirse junto a apneístas de seguridad experimentados e instructores y atletas de nivel internacional.
          </p>

          {/* Pilares clave de la iniciativa */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Seguridad Primero</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Organizar cada bajada con boyas, cabos y apneístas de seguridad dedicados para garantizar la tranquilidad de todos los asistentes.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase mb-2">
                <Anchor className="w-4 h-4" />
                <span>Experiencia en el Azul</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Ganar acuaticidad, soltura y confianza en mar abierto para preparar a nuestros atletas de cara a futuras competencias.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase mb-2">
                <HeartHandshake className="w-4 h-4" />
                <span>Comunidad & Aprendizaje</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Contar con el apoyo de atletas con experiencia internacional que compartan técnicas, consejos de compensación y preparación.
              </p>
            </div>
          </div>

          {/* Footer Callout */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Costas venezolanas (Chichiriviche de la Costa)</span>
            </div>
            <span className="text-xs font-semibold text-cyan-300 bg-cyan-950/60 px-4 py-2 rounded-xl border border-cyan-500/20">
              ¿Quieres sumarte a las próximas salidas? Regístrate en la comunidad
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};