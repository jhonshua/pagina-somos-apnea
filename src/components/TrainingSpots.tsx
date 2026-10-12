import React from 'react';
import { MapPin, Anchor, Waves, Calendar, Compass } from 'lucide-react';

export const TrainingSpots: React.FC = () => {
  const spots = [
    {
      name: 'Chichiriviche de la Costa',
      location: 'La Guaira, Venezuela',
      type: 'Mar Abierto & Profundidad',
      depth: 'Hasta 60+ metros',
      description: 'El spot icónico de la apnea en Venezuela. Cuenta con aguas profundas y protegidas a escasos metros de la playa, condiciones ideales para entrenar peso constante e inmersión libre todo el año.',
      highlights: ['Acceso directo desde orilla o embarcación', 'Sin corriente excesiva', 'Visibilidad excepcional']
    },
    {
      name: 'Entrenamientos en Piscina',
      location: 'Caracas & Valencia',
      type: 'Técnica & Acondicionamiento',
      depth: 'Piscina Olímpica 50m / Fosa',
      description: 'Sesiones semanales grupales guiadas por instructores certificados. Nos enfocamos en técnica de patada con bialetas y monoaleta, tablas de CO2, relajación mental y seguridad.',
      highlights: ['Horarios matutinos y vespertinos', 'Grabación y análisis de video técnica', 'Comunidad activa y compañerismo']
    },
    {
      name: 'Parque Nacional Mochima & Los Roques',
      location: 'Caribe Venezolano',
      type: 'Expediciones & Safari Marino',
      depth: 'Arrecifes & Azules Profundos',
      description: 'Salidas periódicas de inmersión en los paisajes marinos más hermosos del país. Combina entrenamiento de profundidad con exploración de corales, vida marina y convivencia en comunidad.',
      highlights: ['Aguas turquesas y arrecifes sanos', 'Talleres especiales de compensación', 'Fotografía subacuática profesional']
    }
  ];

  return (
    <section id="entrenamientos" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-nav border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Nuestros Puntos de Práctica</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
          Spots de Entrenamiento en Venezuela
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Entrenamos de manera constante tanto en fosa y piscina olímpica como en las mejores costas venezolanas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {spots.map((spot, idx) => (
          <div key={idx} className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-cyan-500/20 glass-card-hover">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-2 uppercase">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{spot.location}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                {spot.name}
              </h3>
              <div className="inline-block px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-4">
                {spot.type} • {spot.depth}
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                {spot.description}
              </p>

              <div className="space-y-2 mb-6">
                {spot.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium text-cyan-300">
                <Anchor className="w-4 h-4" /> Equipos de seguridad incluidos
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
