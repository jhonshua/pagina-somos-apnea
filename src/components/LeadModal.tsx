import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Sparkles, Bell, HeartHandshake } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string; // Lo mantenemos por compatibilidad con los clics anteriores, pero ahora actúa como interés general o actividad
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, selectedCourse = '' }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    ciudad: 'Caracas',
    interes: selectedCourse || 'Inmersiones y Salidas al Mar',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedCourse) {
      setFormData(prev => ({ ...prev, interes: selectedCourse }));
    }
  }, [selectedCourse]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct WhatsApp message URL for community registration / bulletin
    const text = `¡Hola Somos Apnea! 🌊\nQuiero registrarme en la comunidad.\nNombre: *${formData.nombre}*.\nCiudad: *${formData.ciudad}*.\nInterés principal: *${formData.interes}*.\nWhatsApp: ${formData.telefono}.\n${formData.mensaje ? `Nota: ${formData.mensaje}` : ''}`;
    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/584120000000?text=${encoded}`;

    // Give a brief delay for UI animation before opening WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-ocean-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border border-cyan-400/40 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3.5 mb-3">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-cyan-900/60 to-ocean-950 border border-cyan-400/40 p-2 flex items-center justify-center shrink-0 shadow-md">
                <HeartHandshake className="w-6 h-6 text-cyan-300" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Comunidad de Apnea en Venezuela</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  Regístrate en la Comunidad
                </h3>
              </div>
            </div>
            
            <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Únete a nuestra red de apneístas. Recibe boletines informativos sobre las próximas salidas al mar, clínicas de profundidad, talleres y el calendario oficial de competencias AIDA en el país.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-200 mb-1.5">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Carlos Mendoza"
                  value={formData.nombre}
                  onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-ocean-900/80 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-200 mb-1.5">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+58 412 1234567"
                    value={formData.telefono}
                    onChange={e => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ocean-900/80 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div>
  <label className="block text-xs font-semibold uppercase text-slate-200 mb-1.5">
    Estado / Ubicación
  </label>
  <select
    value={formData.ciudad}
    onChange={e => setFormData({ ...formData, ciudad: e.target.value })}
    className="w-full px-4 py-3 rounded-xl bg-ocean-900/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
  >
    <option value="Amazonas" className="bg-ocean-950">Amazonas</option>
    <option value="Anzoátegui" className="bg-ocean-950">Anzoátegui</option>
    <option value="Apure" className="bg-ocean-950">Apure</option>
    <option value="Aragua" className="bg-ocean-950">Aragua</option>
    <option value="Barinas" className="bg-ocean-950">Barinas</option>
    <option value="Bolívar" className="bg-ocean-950">Bolívar</option>
    <option value="Carabobo" className="bg-ocean-950">Carabobo</option>
    <option value="Cojedes" className="bg-ocean-950">Cojedes</option>
    <option value="Delta Amuro" className="bg-ocean-950">Delta Amacuro</option>
    <option value="Distrito Capital" className="bg-ocean-950">Distrito Capital (Caracas)</option>
    <option value="Falcón" className="bg-ocean-950">Falcón</option>
    <option value="Guárico" className="bg-ocean-950">Guárico</option>
    <option value="La Guaira" className="bg-ocean-950">La Guaira</option>
    <option value="Lara" className="bg-ocean-950">Lara (Barquisimeto)</option>
    <option value="Mérida" className="bg-ocean-950">Mérida</option>
    <option value="Miranda" className="bg-ocean-950">Miranda</option>
    <option value="Monagas" className="bg-ocean-950">Monagas</option>
    <option value="Nueva Esparta" className="bg-ocean-950">Nueva Esparta</option>
    <option value="Portuguesa" className="bg-ocean-950">Portuguesa</option>
    <option value="Sucre" className="bg-ocean-950">Sucre</option>
    <option value="Táchira" className="bg-ocean-950">Táchira</option>
    <option value="Trujillo" className="bg-ocean-950">Trujillo</option>
    <option value="Yaracuy" className="bg-ocean-950">Yaracuy</option>
    <option value="Zulia" className="bg-ocean-950">Zulia</option>
    <option value="Internacional" className="bg-ocean-950">🌍 Otro país / Internacional</option>
  </select>
</div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-200 mb-1.5">
                  ¿Qué actividad te interesa más?
                </label>
                <select
                  value={formData.interes}
                  onChange={e => setFormData({ ...formData, interes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-ocean-900/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                >
                  <option value="Inmersiones y Salidas al Mar" className="bg-ocean-950">Salidas y Bajadas a Profundidad en el Mar</option>
                  <option value="Boletín de Próximos Eventos y Talleres" className="bg-ocean-950">Boletín Informativo de Talleres y Clínicas</option>
                  <option value="Competencias y Calendario AIDA" className="bg-ocean-950">Competencias Oficiales y Torneos AIDA</option>
                  <option value="Entrenamientos Comunitarios" className="bg-ocean-950">Encuentros y Prácticas de Comunidad</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-200 mb-1.5">
                  Comentarios o Experiencia en Apnea (opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Cuéntanos brevemente sobre tu experiencia o expectativas..."
                  value={formData.mensaje}
                  onChange={e => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-ocean-900/80 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-coral text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <Bell className="w-4 h-4" />
                <span>Registrarme en la Comunidad</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-300 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase mb-2">¡Registro Exitoso!</h3>
            <p className="text-slate-300 text-sm max-w-xs mx-auto mb-6">
              Te estamos redirigiendo a WhatsApp para completar tu ingreso a la comunidad de Somos Apnea...
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs text-cyan-300 font-semibold hover:underline"
            >
              Cerrar ventana
            </button>
          </div>
        )}

      </div>
    </div>
  );
};