import React, { useState } from 'react';
import { Award, Bell, CheckCircle2, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

interface CoursesProps {
  onSelectCourse: (courseName: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      onSelectCourse('Boletín Informativo de Cursos y Talleres');
    }
  };

  const upcomingOfferings = [
    {
      title: 'Talleres de Iniciación & Seguridad',
      subtitle: 'Promoción del Deporte',
      badge: 'Próximamente',
      description: 'Jornadas prácticas y teóricas orientadas a dar a conocer las bases de la apnea segura, técnicas de respiración y el sistema de compañeros (Buddy System).',
      features: [
        'Principios de respiración y relajación',
        'Protocolos de seguridad en piscina y mar',
        'Introducción al entrenamiento sin fines de lucro',
        'Abierto a toda la comunidad interesada'
      ]
    },
    {
      title: 'Formación de Jueces y Staff AIDA',
      subtitle: 'Certificación Oficial',
      badge: 'Anuncio Próximo',
      description: 'Programas especializados para capacitar jueces, cronometristas y personal técnico bajo los estándares internacionales de AIDA para nuestras competencias.',
      features: [
        'Reglamento oficial de competencias AIDA',
        'Manejo de protocolos de seguridad en plataforma',
        'Prácticas de marcaje y jueceo en torneos nacionales',
        'Certificación oficial para avalar eventos'
      ]
    },
    {
      title: 'Clínicas Especializadas de Apnea',
      subtitle: 'Perfeccionamiento',
      badge: 'En Planificación',
      description: 'Espacios de intercambio técnico enfocados en ecualización (Frenzel/Mouthfill), tablas de CO2/O2 y preparación mental dictados por atletas experimentados.',
      features: [
        'Talleres avanzados de ecualización',
        'Optimización del consumo de oxígeno',
        'Preparación física y mental para atletas',
        'Encuentros y conversatorios de la comunidad'
      ]
    }
  ];

  return (
    <section id="cursos" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-nav border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Asociación sin fines de lucro</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
          Cursos, Talleres y Formación
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Como asociación impulsamos el desarrollo de la apnea en Venezuela. Próximamente estaremos abriendo espacios de capacitación, talleres comunitarios y formación de jueces oficiales bajo los estándares de AIDA.
        </p>
      </div>

      {/* Offerings Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {upcomingOfferings.map((item, idx) => (
          <div
            key={idx}
            className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between glass-card-hover relative border-white/10"
          >
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-900/80 text-cyan-300 border border-cyan-500/30 text-[11px] font-extrabold uppercase tracking-widest shadow-md">
              {item.badge}
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                  {item.subtitle}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
                {item.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Feature points */}
              <ul className="space-y-3 mb-8">
                {item.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action button */}
            <button
              onClick={() => onSelectCourse(item.title)}
              className="w-full py-3.5 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all glass-nav text-cyan-200 hover:text-white border border-cyan-400/30 hover:border-cyan-300 cursor-pointer"
            >
              <span>Estar Informado</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Newsletter / Notification Banner */}
      <div className="glass-card rounded-3xl p-8 sm:p-10 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto mb-4 shadow-inner">
            <Bell className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
            ¿Quieres enterarte cuando abramos inscripciones?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-6">
            Regístrate en nuestra comunidad para recibir los boletines informativos sobre las fechas de nuestros próximos talleres, clínicas deportivas y el calendario oficial de competencias AIDA en Venezuela.
          </p>

          {subscribed ? (
            <div className="p-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-sm font-bold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>¡Gracias por registrarte! Te notificaremos en cuanto anunciemos nuevas actividades.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                required
                placeholder="Ingresa tu correo electrónico..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-5 py-3 rounded-2xl bg-slate-900/70 border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 flex-1 max-w-md"
              />
              <button
                type="submit"
                className="btn-coral text-white font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-2xl flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-transform hover:scale-[1.02]"
              >
                <span>Suscribirme</span>
                <Calendar className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};