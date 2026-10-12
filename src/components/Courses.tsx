import React from 'react';
import { Waves, Award, CheckCircle2, Clock, MapPin, ArrowRight } from 'lucide-react';

interface CoursesProps {
  onSelectCourse: (courseName: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
  const courses = [
    {
      title: 'Discovery Apnea',
      subtitle: 'Bautizo & Primeras Sensaciones',
      badge: 'Iniciación',
      depth: '0 - 10 metros',
      duration: '1 Día intensivo',
      description: 'Ideal para personas sin experiencia previa que desean aprender a relajarse, respirar correctamente y experimentar la ingravidez en el agua.',
      features: [
        'Respiración diafragmática y control del estrés',
        'Técnicas básicas de ecualización',
        'Seguridad en el agua y compañero (Buddy system)',
        'Sesión práctica en piscina o bahía protegida'
      ],
      featured: false
    },
    {
      title: 'Apnea Nivel 1 (Open Water)',
      subtitle: 'Certificación Internacional',
      badge: 'Más Popular',
      depth: '12 - 20 metros',
      duration: '3 Días (Teoría + Piscina + Mar)',
      description: 'El curso fundamental para convertirte en un apneista certificado y seguro. Aprende técnica de aleteo, fisiología y rescate profesional.',
      features: [
        'Fisiología del buceo en apnea y reflejo mamífero',
        'Apnea Estática (STA > 2:00 min) y Dinámica (DYN)',
        'Inmersión libre (FIM) y Peso constante (CWT)',
        'Protocolos de rescate en superficie y profundidad',
        'Certificación y carnet internacional'
      ],
      featured: true
    },
    {
      title: 'Apnea Nivel 2 (Advanced)',
      subtitle: 'Profundidad & Freefall',
      badge: 'Avanzado',
      depth: '24 - 30 metros',
      duration: '4 Días completos',
      description: 'Perfecciona la caída libre (freefall), optimiza el consumo de oxígeno y domina la ecualización avanzada (Frenzel) a mayor profundidad.',
      features: [
        'Dominio de la técnica de Caída Libre (Freefall)',
        'Manejo de tablas de entrenamiento de CO2 y O2',
        'Ecualización Frenzel eficiente sin esfuerzo',
        'Rescate profundo y técnicas de coaching'
      ],
      featured: false
    }
  ];

  return (
    <section id="cursos" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-nav border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Formación Progresiva & Segura</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
          Cursos y Certificaciones
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Diseñados bajo los más altos estándares mundiales para que descubras tu verdadero potencial acuático con total tranquilidad y técnica.
        </p>
      </div>

      {/* Courses Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={`glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between glass-card-hover relative ${
              course.featured 
                ? 'border-cyan-400/50 shadow-[0_0_35px_rgba(28,130,191,0.3)] ring-1 ring-cyan-400/30' 
                : 'border-white/10'
            }`}
          >
            {/* Top Badge */}
            {course.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full btn-coral text-white text-[11px] font-extrabold uppercase tracking-widest shadow-md">
                {course.badge}
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                  {course.subtitle}
                </span>
                {!course.featured && (
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                    {course.badge}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
                {course.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 py-3 px-4 rounded-2xl bg-ocean-950/60 border border-white/5 mb-6 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <Waves className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{course.depth}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Feature points */}
              <ul className="space-y-3 mb-8">
                {course.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action button */}
            <button
              onClick={() => onSelectCourse(course.title)}
              className={`w-full py-3.5 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                course.featured
                  ? 'btn-coral text-white shadow-lg'
                  : 'glass-nav text-cyan-200 hover:text-white border border-cyan-400/30 hover:border-cyan-300'
              }`}
            >
              <span>Solicitar Información</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
