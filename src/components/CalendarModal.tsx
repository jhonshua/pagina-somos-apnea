import React, { useState } from 'react';
import { 
  X, Calendar as CalendarIcon, ChevronLeft, ChevronRight, 
  MapPin, Clock, Users, ArrowRight, Sparkles, CheckCircle2,
  Filter, Compass
} from 'lucide-react';

export interface Activity {
  id: string;
  title: string;
  category: 'certificacion' | 'taller' | 'salida' | 'entrenamiento';
  categoryLabel: string;
  categoryColor: string;
  month: number; // 0 to 11
  year: number;
  startDate: string; // YYYY-MM-DD
  endDate: string;
  daysDisplay: string;
  location: string;
  description: string;
  status: 'en_curso' | 'inscripciones_abiertas' | 'ultimos_cupos' | 'completado';
  statusLabel: string;
  spotsLeft?: number;
}

const ACTIVITIES_2026: Activity[] = [
  // 10 y 11 de Octubre 2026 - Culminado con éxito
  {
    id: 'act-oct-ccs-cup',
    title: 'CCS FREEDIVING CUP 2026 (Competencia en Piscina)',
    category: 'entrenamiento',
    categoryLabel: 'Competencia Oficial AIDA',
    categoryColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    month: 9, // Octubre
    year: 2026,
    startDate: '2026-10-10',
    endDate: '2026-10-11',
    daysDisplay: '10 y 11 de Octubre de 2026',
    location: 'Caracas, Venezuela (Complejo de Piscinas)',
    description: 'Segundo evento oficial del año bajo estándar internacional AIDA con destacada participación de nuestros atletas y la comunidad freediver venezolana.',
    status: 'completado',
    statusLabel: 'Evento Culminado con Éxito',
  },

  // 5 y 6 de Diciembre 2026 - Anuncio único de fin de año
  {
    id: 'act-dic-festival',
    title: 'FESTIVAL SOMOS APNEA 2026 (Cierre de Año)',
    category: 'salida',
    categoryLabel: 'Cierre del Año por Todo lo Alto',
    categoryColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    month: 11, // Diciembre
    year: 2026,
    startDate: '2026-12-05',
    endDate: '2026-12-06',
    daysDisplay: '5 y 6 de Diciembre de 2026',
    location: 'Piscina por confirmar (Caracas)',
    description: 'El gran festival de cierre de año de Somos Apnea. Dos jornadas completas de pruebas, integración y celebración en nuestro elemento.',
    status: 'inscripciones_abiertas',
    statusLabel: 'En Anuncio / Save the Date',
  }
];

const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectActivityForBooking: (activityTitle: string) => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
  onSelectActivityForBooking,
}) => {
  // Inicializamos en Octubre 2026 (mes en curso)
  const [currentMonth, setCurrentMonth] = useState<number>(9);
  const currentYear = 2026;
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev > 0 ? prev - 1 : 11));
    setSelectedActivityId(null);
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev < 11 ? prev + 1 : 0));
    setSelectedActivityId(null);
  };

  // Filtrado de actividades del mes seleccionado
  const monthActivities = ACTIVITIES_2026.filter((act) => {
    const matchesMonth = act.year === currentYear && act.month === currentMonth;
    const matchesCategory = selectedCategory === 'todos' || act.category === selectedCategory;
    return matchesMonth && matchesCategory;
  });

  // Generación de la grilla de días del mes
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0 es Domingo
  // Ajuste para comenzar en Lunes (0: Lun, ..., 6: Dom)
  const startingCol = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Días con actividades en este mes
  const getActivitiesForDay = (dayNum: number) => {
    const dayStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
    return monthActivities.filter((act) => {
      return dayStr >= act.startDate && dayStr <= act.endDate;
    });
  };

  const selectedActivity = ACTIVITIES_2026.find(a => a.id === selectedActivityId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop con desenfoque oceánico */}
      <div 
        className="fixed inset-0 bg-ocean-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Principal */}
      <div className="relative w-full max-w-5xl bg-ocean-900/95 border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col max-h-[92vh] z-10 text-slate-100">
        
        {/* Encabezado con Logo Oficial de Somos Apnea */}
        <div className="relative px-6 py-5 bg-gradient-to-r from-ocean-950 via-ocean-900 to-ocean-950 border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-14 sm:h-16 w-32 sm:w-40 flex items-center">
              <img 
                src="/somos-apnea-logo-oficial.png" 
                alt="Somos Apnea Logo Oficial" 
                className="h-full w-auto object-contain drop-shadow-[0_2px_12px_rgba(34,211,238,0.4)]"
              />
            </div>
            <div className="border-l border-cyan-500/30 pl-4 hidden sm:block">
              <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5" />
                Calendario Oficial de Actividades
              </span>
              <h2 className="text-lg font-black text-white tracking-tight">Temporada {currentYear}</h2>
            </div>
          </div>

          {/* Botón de cierre */}
          <button 
            onClick={onClose}
            className="p-2.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10 cursor-pointer"
            aria-label="Cerrar calendario"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Barra de Control: Navegación de Mes y Filtros */}
        <div className="px-6 py-4 bg-ocean-950/60 border-b border-cyan-500/10 flex flex-wrap items-center justify-between gap-4">
          
          {/* Navegador de Meses */}
          <div className="flex items-center gap-2 bg-ocean-900/80 px-3 py-1.5 rounded-2xl border border-cyan-500/20 shadow-inner">
            <button 
              onClick={handlePrevMonth}
              className="p-1.5 rounded-xl hover:bg-cyan-500/20 text-cyan-300 hover:text-white transition-all"
              title="Mes anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="px-3 text-center min-w-[130px]">
              <span className="text-base font-extrabold text-white tracking-wide">
                {MONTH_NAMES[currentMonth]}
              </span>
              <span className="text-xs text-cyan-400 font-semibold block leading-none mt-0.5">
                {currentYear}
              </span>
            </div>
            <button 
              onClick={handleNextMonth}
              className="p-1.5 rounded-xl hover:bg-cyan-500/20 text-cyan-300 hover:text-white transition-all"
              title="Mes siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Selector de Meses Rápido */}
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto py-1">
            {MONTH_NAMES.map((mName, idx) => {
              const isSelected = currentMonth === idx;
              const hasEvents = ACTIVITIES_2026.some(a => a.month === idx && a.year === currentYear);
              return (
                <button
                  key={mName}
                  onClick={() => {
                    setCurrentMonth(idx);
                    setSelectedActivityId(null);
                  }}
                  className={`text-xs px-2.5 py-1.5 rounded-xl font-bold transition-all relative ${
                    isSelected 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {mName.slice(0, 3)}
                  {hasEvents && !isSelected && (
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Filtros de Categoría */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-slate-400 flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3 text-cyan-400" />
              Filtrar:
            </span>
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'certificacion', label: 'Cursos' },
              { id: 'taller', label: 'Talleres' },
              { id: 'salida', label: 'Salidas' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedCategory(f.id)}
                className={`text-xs px-3 py-1 rounded-xl font-medium transition-all ${
                  selectedCategory === f.id
                    ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/40'
                    : 'bg-white/5 text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido: Vista Dual (Calendario + Lista de Actividades) */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Columna Izquierda: Grilla Mensual Interactiva (7 cols) */}
          <div className="lg:col-span-7 bg-ocean-950/40 border border-cyan-500/15 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-cyan-400" />
                Días de {MONTH_NAMES[currentMonth]} {currentYear}
              </h3>
              <span className="text-xs text-cyan-400/80">
                {monthActivities.length} actividad(es) programada(s)
              </span>
            </div>

            {/* Cabecera de días de la semana */}
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2 text-center mb-2">
              {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((d) => (
                <div key={d} className="text-[11px] font-bold text-slate-400 py-1 uppercase">
                  {d}
                </div>
              ))}
            </div>

            {/* Celdas del Mes */}
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
              {/* Espacios vacíos antes del primer día */}
              {Array.from({ length: startingCol }).map((_, i) => (
                <div key={`empty-${i}`} className="min-h-[52px] sm:min-h-[64px] rounded-xl bg-white/[0.01] border border-transparent opacity-30" />
              ))}

              {/* Días del mes */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                const acts = getActivitiesForDay(dayNum);
                const hasActivity = acts.length > 0;
                const isSelectedDay = selectedActivity && acts.some(a => a.id === selectedActivity.id);

                return (
                  <button
                    key={`day-${dayNum}`}
                    type="button"
                    onClick={() => {
                      if (hasActivity) {
                        setSelectedActivityId(acts[0].id);
                      }
                    }}
                    className={`min-h-[52px] sm:min-h-[64px] rounded-xl p-1.5 text-left transition-all flex flex-col justify-between border relative ${
                      hasActivity
                        ? isSelectedDay
                          ? 'bg-gradient-to-br from-cyan-600/40 to-blue-700/40 border-cyan-300 ring-2 ring-cyan-400/50 shadow-lg cursor-pointer'
                          : 'bg-cyan-950/40 hover:bg-cyan-900/50 border-cyan-500/40 cursor-pointer hover:border-cyan-400'
                        : 'bg-white/[0.02] border-white/5 text-slate-500 cursor-default'
                    }`}
                  >
                    <span className={`text-xs font-bold leading-none ${
                      hasActivity ? 'text-white' : 'text-slate-500'
                    }`}>
                      {dayNum}
                    </span>

                    {/* Indicador de Actividad */}
                    {hasActivity && (
                      <div className="flex flex-col gap-0.5 mt-1">
                        {acts.slice(0, 2).map((a) => (
                          <span 
                            key={a.id}
                            className={`text-[9px] truncate font-semibold px-1 py-0.5 rounded leading-tight ${
                              a.status === 'en_curso' 
                                ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/40' 
                                : 'bg-cyan-500/25 text-cyan-200'
                            }`}
                          >
                            {a.category === 'certificacion' ? 'Curso' : a.category === 'taller' ? 'Taller' : 'Salida'}
                          </span>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Leyenda de Estados */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                <span>En Curso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                <span>Inscripciones Abiertas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>Últimos Cupos</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas de Actividades Detalladas (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center justify-between">
              <span>Detalle de Actividades</span>
              <span className="text-xs font-normal text-slate-400">
                {MONTH_NAMES[currentMonth]} {currentYear}
              </span>
            </h3>

            {monthActivities.length === 0 ? (
              <div className="bg-ocean-950/40 border border-white/5 rounded-2xl p-8 text-center flex flex-col items-center justify-center my-auto">
                <Compass className="w-10 h-10 text-cyan-400/40 mb-3 animate-pulse" />
                <p className="text-slate-300 font-medium">No hay actividades registradas en este mes</p>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  Revisa los meses contiguos (Octubre, Noviembre, Diciembre) para ver las certificaciones y salidas activas.
                </p>
                <button
                  onClick={() => setCurrentMonth(9)}
                  className="mt-4 px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold transition-all border border-cyan-500/30"
                >
                  Ir a Octubre 2026 (Mes Actual)
                </button>
              </div>
            ) : (
              <div className="space-y-3.5 overflow-y-auto max-h-[500px] pr-1">
                {monthActivities.map((activity) => {
                  const isHighlighted = selectedActivityId === activity.id;

                  return (
                    <div
                      key={activity.id}
                      onClick={() => setSelectedActivityId(activity.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                        isHighlighted
                          ? 'bg-cyan-900/50 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] ring-1 ring-cyan-400/50'
                          : 'bg-ocean-950/60 hover:bg-ocean-950 border-cyan-500/20 hover:border-cyan-400/50'
                      }`}
                    >
                      {/* Badge superior de Estado y Categoría */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${activity.categoryColor}`}>
                          {activity.categoryLabel}
                        </span>

                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                          activity.status === 'en_curso'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : activity.status === 'ultimos_cupos'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : activity.status === 'completado'
                            ? 'bg-slate-700 text-slate-300 border border-slate-600'
                            : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        }`}>
                          {activity.status === 'en_curso' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-0.5" />
                          )}
                          {activity.statusLabel}
                        </span>
                      </div>

                      {/* Título de la Actividad */}
                      <h4 className="text-base font-extrabold text-white leading-snug mb-2 group-hover:text-cyan-200">
                        {activity.title}
                      </h4>

                      {/* Metadatos (Fechas y Lugar) */}
                      <div className="space-y-1.5 text-xs text-slate-300 mb-3">
                        <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                          <CalendarIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{activity.daysDisplay}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-coral-400 shrink-0" />
                          <span className="truncate">{activity.location}</span>
                        </div>
                      </div>

                      {/* Descripción breve */}
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {activity.description}
                      </p>

                      {/* Botón de Acción para Reservar o Solicitar Información */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        {activity.spotsLeft !== undefined && (
                          <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                            <Users className="w-3 h-3 text-cyan-400" />
                            {activity.spotsLeft > 0 ? `${activity.spotsLeft} cupos libres` : 'Cupos completos'}
                          </span>
                        )}

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectActivityForBooking(activity.title);
                          }}
                          className="ml-auto text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-coral-500 to-rose-600 hover:from-coral-400 hover:to-rose-500 text-white shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <span>Reservar Cupo</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Footer del Modal */}
        <div className="px-6 py-4 bg-ocean-950 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>¿Tienes dudas sobre los requisitos o equipo para cada actividad?</span>
          </div>
          <button
            onClick={() => onSelectActivityForBooking('Consulta General sobre Calendario')}
            className="text-cyan-300 hover:text-white font-bold underline transition-colors cursor-pointer"
          >
            Contactar al equipo por WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
};
