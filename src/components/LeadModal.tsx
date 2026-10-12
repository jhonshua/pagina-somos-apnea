import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, selectedCourse = '' }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    ciudad: 'Caracas',
    curso: selectedCourse || 'Discovery Apnea (Iniciación)',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedCourse) {
      setFormData(prev => ({ ...prev, curso: selectedCourse }));
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
    
    // Construct WhatsApp message URL
    const text = `¡Hola Somos Apnea! 🌊\nMi nombre es *${formData.nombre}*.\nEstoy interesado/a en: *${formData.curso}*.\nCiudad: *${formData.ciudad}*.\nWhatsApp: ${formData.telefono}.\n${formData.mensaje ? `Nota: ${formData.mensaje}` : ''}`;
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
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Inscripciones Abiertas</span>
            </div>
            
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
              Únete a Somos Apnea
            </h3>
            
            <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Completa tus datos y nos pondremos en contacto contigo de inmediato para coordinar tus clases y responder todas tus dudas.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-200 mb-1.5">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Sofía Mendoza"
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
                    Ciudad de Residencia
                  </label>
                  <select
                    value={formData.ciudad}
                    onChange={e => setFormData({ ...formData, ciudad: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ocean-900/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="Caracas" className="bg-ocean-950">Caracas</option>
                    <option value="La Guaira" className="bg-ocean-950">La Guaira</option>
                    <option value="Valencia" className="bg-ocean-950">Valencia</option>
                    <option value="Maracay" className="bg-ocean-950">Maracay</option>
                    <option value="Otra" className="bg-ocean-950">Otra ciudad</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-200 mb-1.5">
                  Curso o Nivel de Interés
                </label>
                <select
                  value={formData.curso}
                  onChange={e => setFormData({ ...formData, curso: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-ocean-900/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                >
                  <option value="Discovery Apnea (Iniciación)" className="bg-ocean-950">Discovery Apnea (Iniciación)</option>
                  <option value="Apnea Nivel 1 (Open Water)" className="bg-ocean-950">Apnea Nivel 1 (Open Water)</option>
                  <option value="Apnea Nivel 2 (Advanced)" className="bg-ocean-950">Apnea Nivel 2 (Avanzado)</option>
                  <option value="Entrenamientos en Piscina" className="bg-ocean-950">Entrenamientos en Piscina</option>
                  <option value="Salidas a Mar Abierto" className="bg-ocean-950">Salidas a Mar Abierto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-200 mb-1.5">
                  Comentarios o Experiencia previa (opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="¿Has practicado apnea antes? ¿Tienes dudas específicas?"
                  value={formData.mensaje}
                  onChange={e => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-ocean-900/80 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-coral text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-300 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase mb-2">¡Solicitud Lista!</h3>
            <p className="text-slate-300 text-sm max-w-xs mx-auto mb-6">
              Te estamos redirigiendo a WhatsApp para iniciar tu conversación con el equipo de Somos Apnea...
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
