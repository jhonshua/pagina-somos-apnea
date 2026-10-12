import React from 'react';
import { Users, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '+300',
      label: 'Apneistas Formados',
      description: 'Desde principiantes hasta atletas competitivos'
    },
    {
      icon: Award,
      value: '65m',
      label: 'Récord de Profundidad',
      description: 'Alcanzado por atletas de nuestro equipo'
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Seguridad en el Agua',
      description: 'Protocolos internacionales y cero accidentes'
    },
    {
      icon: HeartHandshake,
      value: '5 Años',
      label: 'Creando Comunidad',
      description: 'Impulsando la apnea deportiva en Venezuela'
    }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-nav rounded-3xl p-8 sm:p-12 border border-cyan-400/20 shadow-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-6 lg:pt-0 lg:px-6' : 'lg:pr-6'}`}>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-3 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-cyan-200 uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-300">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
