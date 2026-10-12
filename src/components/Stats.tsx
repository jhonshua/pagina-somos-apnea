import React from 'react';
import { Timer, Waves, Zap, Trophy, MapPin, Calendar, Footprints } from 'lucide-react';

export const Stats: React.FC = () => {
  // 1. Apnea Dinámica con Bi-Aletas (DYNB)
  const dynbMasculino = [
    { rank: '1°', name: 'Jonathan Luna', dist: '151 m', pts: '75 pts' },
    { rank: '2°', name: 'Ronald Barney', dist: '120 m', pts: '60 pts' },
    { rank: '3°', name: 'Marcos Diaz', dist: '105 m', pts: '52 pts' },
  ];

  const dynbFemenino = [
    { rank: '1°', name: 'Rut Fermín', dist: '112 m', pts: '56 pts' },
  ];

  // 2. Apnea Dinámica con Monofin (DYN)
  const dynMasculino = [
    { rank: '1°', name: 'José Plaza', dist: '175 m', pts: '88 pts' },
    { rank: '2°', name: 'Jonathan Luna', dist: '151 m', pts: '75 pts' },
    { rank: '3°', name: 'Roger Ardila', dist: '117 m', pts: '58 pts' },
  ];

  const dynFemenino = [
    { rank: '1°', name: 'Rut Fermín', dist: '116 m', pts: '58 pts' },
  ];

  // 3. Apnea Dinámica Sin Aletas (DNF)
  const dnfMasculino = [
    { rank: '1°', name: 'José Plaza', dist: '137 m', pts: '69 pts' },
    { rank: '2°', name: 'Jonathan Luna', dist: '119 m', pts: '59 pts' },
    { rank: '3°', name: 'Marcos Diaz', dist: '78 m', pts: '39 pts' },
  ];

  const dnfFemenino = [
    { rank: '1°', name: 'Rut Fermín', dist: '82 m', pts: '41 pts' },
  ];

  // 4. Apnea Estática (STA)
  const staMasculino = [
    { rank: '1°', name: 'José Plaza', time: '6:12 min', pts: '74 pts' },
    { rank: '2°', name: 'Ronald Barney', time: '4:11 min', pts: '50 pts' },
    { rank: '3°', name: 'Julio Llinas', time: '3:55 min', pts: '47 pts' },
  ];

  const staFemenino = [
    { rank: '1°', name: 'Rut Fermín', time: '4:11 min', pts: '50 pts' },
  ];

  // 5. Clasificación General (Overall)
  const podiumMasculino = [
    { rank: '1°', name: 'José Plaza', points: '230 pts' },
    { rank: '2°', name: 'Jonathan Luna', points: '210 pts' },
    { rank: '3°', name: 'Roger Ardila', points: '182 pts' },
  ];

  const podiumFemenino = [
    { rank: '1°', name: 'Rut Fermín', points: '205 pts' },
  ];

  const highlights = [
    {
      icon: Timer,
      value: '6:12 min',
      label: 'Apnea Estática (STA)',
      athlete: 'José Plaza (1°)',
      sub: 'Rut Fermín: 4:11 min (1° Fem)'
    },
    {
      icon: Waves,
      value: '175 m',
      label: 'Dinámica Monofin (DYN)',
      athlete: 'José Plaza (1°)',
      sub: 'Rut Fermín: 116 m (1° Fem)'
    },
    {
      icon: Footprints,
      value: '151 m',
      label: 'Dinámica Bi-Aletas (DYNB)',
      athlete: 'Jonathan Luna (1°)',
      sub: 'Rut Fermín: 112 m (1° Fem)'
    },
    {
      icon: Zap,
      value: '137 m',
      label: 'Sin Aletas (DNF)',
      athlete: 'José Plaza (1°)',
      sub: 'Jonathan Luna: 119 m (2°)'
    }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-nav rounded-3xl p-6 sm:p-10 md:p-12 border border-cyan-400/20 shadow-2xl backdrop-blur-xl">
        
        {/* Encabezado Oficial */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-300 bg-cyan-950/70 px-4 py-1.5 rounded-full border border-cyan-500/30 mb-3 shadow-inner">
            AIDA Venezuela • Caracas Freediving Cup 2026
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            Resultados Oficiales por Disciplina
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-cyan-200/80 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Complejo Deportivo "YMCA Caracas", Venezuela
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-cyan-400" />
              07 de Marzo de 2026
            </span>
          </div>
        </div>

        {/* Tarjetas de Marcas Máximas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-3 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
                  {item.label}
                </div>
                <div className="text-sm font-semibold text-slate-100 mb-0.5">
                  {item.athlete}
                </div>
                <div className="text-[11px] text-slate-400">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* Rejilla de las 4 Modalidades */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* 1. DYNB - Bi-Aletas */}
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-cyan-500/20">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
              <Footprints className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Dinámica con Bi-Aletas (DYNB)
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] font-semibold text-cyan-300 block mb-2 uppercase">Masculino</span>
                <div className="space-y-1.5">
                  {dynbMasculino.map((item, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-white/5 text-xs">
                      <span className="font-semibold text-slate-200">{item.rank} {item.name}</span>
                      <span className="font-bold text-cyan-300">{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-cyan-300 block mb-2 uppercase">Femenino</span>
                <div className="space-y-1.5">
                  {dynbFemenino.map((item, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-white/5 text-xs">
                      <span className="font-semibold text-slate-200">{item.rank} {item.name}</span>
                      <span className="font-bold text-cyan-300">{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. DYN - Monofin */}
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-cyan-500/20">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
              <Waves className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Dinámica con Monofin (DYN)
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] font-semibold text-cyan-300 block mb-2 uppercase">Masculino</span>
                <div className="space-y-1.5">
                  {dynMasculino.map((item, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-white/5 text-xs">
                      <span className="font-semibold text-slate-200">{item.rank} {item.name}</span>
                      <span className="font-bold text-cyan-300">{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-cyan-300 block mb-2 uppercase">Femenino</span>
                <div className="space-y-1.5">
                  {dynFemenino.map((item, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-white/5 text-xs">
                      <span className="font-semibold text-slate-200">{item.rank} {item.name}</span>
                      <span className="font-bold text-cyan-300">{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. DNF - Sin Aletas */}
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-cyan-500/20">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
              <Zap className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Dinámica Sin Aletas (DNF)
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] font-semibold text-cyan-300 block mb-2 uppercase">Masculino</span>
                <div className="space-y-1.5">
                  {dnfMasculino.map((item, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-white/5 text-xs">
                      <span className="font-semibold text-slate-200">{item.rank} {item.name}</span>
                      <span className="font-bold text-cyan-300">{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-cyan-300 block mb-2 uppercase">Femenino</span>
                <div className="space-y-1.5">
                  {dnfFemenino.map((item, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-white/5 text-xs">
                      <span className="font-semibold text-slate-200">{item.rank} {item.name}</span>
                      <span className="font-bold text-cyan-300">{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. STA - Estática */}
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-cyan-500/20">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
              <Timer className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Apnea Estática (STA)
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] font-semibold text-cyan-300 block mb-2 uppercase">Masculino</span>
                <div className="space-y-1.5">
                  {staMasculino.map((item, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-white/5 text-xs">
                      <span className="font-semibold text-slate-200">{item.rank} {item.name}</span>
                      <span className="font-bold text-cyan-300">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-cyan-300 block mb-2 uppercase">Femenino</span>
                <div className="space-y-1.5">
                  {staFemenino.map((item, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-white/5 text-xs">
                      <span className="font-semibold text-slate-200">{item.rank} {item.name}</span>
                      <span className="font-bold text-cyan-300">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Podios Overall */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-slate-950/40 rounded-2xl p-5 border border-cyan-500/10">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Podio Overall Masculino
              </h3>
            </div>
            <div className="space-y-2">
              {podiumMasculino.map((athlete, i) => (
                <div key={i} className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-extrabold px-2 py-0.5 rounded-md ${
                      i === 0 ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' :
                      i === 1 ? 'bg-slate-300/20 text-slate-200 border border-slate-300/30' :
                      'bg-amber-700/20 text-amber-400 border border-amber-700/30'
                    }`}>
                      {athlete.rank}
                    </span>
                    <span className="text-sm font-semibold text-slate-100">{athlete.name}</span>
                  </div>
                  <span className="text-xs font-bold text-cyan-300">{athlete.points}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950/40 rounded-2xl p-5 border border-cyan-500/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Podio Overall Femenino
                </h3>
              </div>
              <div className="space-y-2">
                {podiumFemenino.map((athlete, i) => (
                  <div key={i} className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-extrabold px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        {athlete.rank}
                      </span>
                      <span className="text-sm font-semibold text-slate-100">{athlete.name}</span>
                    </div>
                    <span className="text-xs font-bold text-cyan-300">{athlete.points}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-center">
              <span className="text-[11px] text-slate-400">
                Aprobado por los Jueces Oficiales AIDA Venezuela
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};