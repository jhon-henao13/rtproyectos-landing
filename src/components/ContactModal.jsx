import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BarChart2, Calendar, CheckCircle, Loader2 } from 'lucide-react';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


const phoneInputStyles = `
  .phone-input-custom {
    display: flex;
    align-items: center;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 1rem;
    padding: 0.875rem 1rem;
    transition: all 0.2s ease-in-out;
  }
  .phone-input-custom:focus-within {
    background-color: #ffffff;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
  .phone-input-custom .PhoneInputCountry {
    margin-right: 0.75rem;
    display: flex;
    align-items: center;
  }
  .phone-input-custom .PhoneInputInput {
    background: transparent;
    border: none;
    outline: none;
    font-size: 0.875rem;
    font-weight: 500;
    color: #0f172a;
    width: 100%;
  }
  .phone-input-custom .PhoneInputInput::placeholder {
    color: #94a3b8;
  }
`;

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    industria: 'Corporativo',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Reemplaza esta URL con el endpoint / Webhook de Coudibot CRM
      await fetch('https://api.coudibot.com/v1/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          fecha: new Date().toISOString(),
          origen: 'Landing Page RT Proyectos',
        }),
      });
    } catch (error) {
      console.log('Envío registrado localmente (Fallback Coudibot):', formData);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleCloseModal = () => {
    onClose();
    // Reiniciar estado tras cerrar
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nombre: '', email: '', telefono: '', industria: 'Corporativo', mensaje: '' });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
        <style>{phoneInputStyles}</style>
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop con Blur Premium */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-[28px] shadow-2xl overflow-hidden z-10 border border-slate-100 my-auto"
        >
          
          {/* Botón Cerrar (X) */}
          <button
            onClick={handleCloseModal}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all cursor-pointer z-20"
            aria-label="Cerrar modal"
          >
            <X size={22} />
          </button>

          {!isSubmitted ? (
            /* ================= VISTA 1: FORMULARIO DE CAPTURA ================= */
            <div className="p-6 sm:p-10">
              
              {/* Header con Ícono y Aviso */}
              <div className="flex flex-col items-center text-center space-y-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 shadow-sm">
                  <BarChart2 size={26} strokeWidth={2.5} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Cotiza tus equipos
                </h3>

                {/* Banner Blue / Destacado según la referencia gráfica */}
                <div className="w-full text-black text-xs sm:text-sm font-semibold py-2 px-4 rounded-xl shadow-sm">
                  Reserva una cita usando tu correo de empresa para agilizar el proceso.
                </div>
              </div>

              {/* Formulario */}
              {/* Formulario */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Grid Fila 1: Nombre (Izquierda) y Email (Derecha) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Ismael Lopez"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email de empresa
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="contacto@promexico.mx"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Grid Fila 2: Teléfono (Izquierda) e Industria (Derecha) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Teléfono
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="MX"
                      placeholder="Ingresa tu teléfono"
                      value={formData.telefono}
                      onChange={(value) => setFormData((prev) => ({ ...prev, telefono: value || '' }))}
                      className="phone-input-custom"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Industria / Sector
                    </label>
                    <select
                      name="industria"
                      value={formData.industria}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all text-sm cursor-pointer"
                    >
                      <option value="Corporativo">Corporativo</option>
                      <option value="PyME">PyME</option>
                      <option value="Clínica">Clínica / Salud</option>
                      <option value="Inmobiliaria">Inmobiliaria</option>
                      <option value="Despacho">Despacho / Consultoría</option>
                      <option value="Call Center">Call Center</option>
                      <option value="Otros">Otros</option>
                    </select>
                  </div>
                </div>

                {/* Campo Opcional Completo: ¿Qué buscas? */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    ¿Qué buscas? <span className="text-slate-400 font-normal lowercase">(opcional)</span>
                  </label>
                  <textarea
                    name="mensaje"
                    rows="2"
                    placeholder="Cuéntanos brevemente qué equipos o requerimientos necesitas..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all text-sm resize-none"
                  />
                </div>

                {/* Botón Principal */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 text-base cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>Enviando datos...</span>
                      </>
                    ) : (
                      <span>Siguiente</span>
                    )}
                  </button>
                </div>

              </form>
            </div>
          ) : (
            /* ================= VISTA 2: GRACIAS + AGENDAMIENTO CALENDLY ================= */
            <div className="p-6 sm:p-8 text-center space-y-4">
              <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-full mb-1">
                <CheckCircle size={36} />
              </div>

              <div className="space-y-2 max-w-xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  ¡Todo Listo! Tu Solicitud de Cotización de Cómputo Está en Proceso
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium">
                  Para evitar esperas telefónicas, elige de una vez el día y hora que mejor se adapten a tu agenda en el calendario de abajo.
                </p>
              </div>

              {/* Calendly Widget / Embedded Iframe */}
              <div className="w-full h-[460px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 mt-4 shadow-inner">
                <iframe
                  src="https://calendly.com/rtproyectos/cotizacion?embed_domain=rtproyectos.com&embed_type=Inline"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Agendar llamada con Ejecutivo"
                />
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}