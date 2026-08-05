import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BarChart2, CheckCircle, Loader2 } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import emailjs from '@emailjs/browser';

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
  const [isScheduled, setIsScheduled] = useState(false);
  const widgetRef = useRef(null);
  const isWidgetInitialized = useRef(false);


  // Inicializar EmailJS con la Public Key
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  // Escuchar evento de Calendly (postMessage)
  useEffect(() => {
    const handleCalendlyEvent = (e) => {
      if (e.origin && e.origin.includes('calendly.com') && e.data && e.data.event) {
        if (e.data.event === 'calendly.event_scheduled') {
          console.log('✅ Evento detectado: Cita agendada con éxito en Calendly');
          
          // Disparar evento a GTM
          if (window.gtag) {
            window.gtag('event', 'conversion', { send_to: 'AGENDAMIENTO_CALENDLY' });
          }
          
          // Redirigir a la página de gracias
          window.location.href = '/rt-landing/gracias';
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, []);

  // Inicializar el widget de Calendly cuando se muestra el modal
  useEffect(() => {
    if (isSubmitted && !isScheduled && !isWidgetInitialized.current) {
      // Esperar a que el script de Calendly esté cargado
      const initWidget = () => {
        if (window.Calendly) {
          // Limpiar teléfono para el prefill
          const cleanPhone = formData.telefono ? formData.telefono.replace(/[\s\-\(\)]/g, '') : '';
          
          window.Calendly.initInlineWidget({
            url: `https://calendly.com/ventasrtproyectos/15min?background_color=ffffff&text_color=0f172a&primary_color=3b82f6`,
            parentElement: widgetRef.current,
            prefill: {
              name: formData.nombre || '',
              email: formData.email || '',
              phone: cleanPhone || '',
              // Si tienes campos personalizados en Calendly:
              // customAnswers: {
              //   a1: formData.industria || '',
              //   a2: formData.mensaje || '',
              // }
            },
            utm: {}
          });
          isWidgetInitialized.current = true;
        } else {
          // Si el script no está cargado, esperar 500ms y reintentar
          setTimeout(initWidget, 500);
        }
      };
      
      initWidget();
    }
  }, [isSubmitted, isScheduled, formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      fecha: new Date().toLocaleString('es-MX', {
        timeZone: 'America/Mexico_City',
        dateStyle: 'long',
        timeStyle: 'short'
      }),
      origen: 'Formulario web RT Proyectos',
    };

    try {
      // 1. Enviar a Google Sheets (backup)
      await fetch('https://script.google.com/macros/s/AKfycbz3wGlFC9hlkMFVwjrIJyrBCz5BShUTuP9nez_Ouj8XAzVUCVELafHhs4Ah46jDJ5aq/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // 2. Enviar notificación por EmailJS
      const templateParams = {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        industria: formData.industria,
        mensaje: formData.mensaje || 'Sin mensaje',
        fecha: payload.fecha,
        to_email: 'contacto@rtproyectos.com,edgar.torres@rtproyectos.com,jorge.torres@rtproyectos.com,raul.mancera@rtproyectos.com,estiguar.dev.emails@gmail.com',
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('✅ Correo enviado con éxito a los destinatarios');

    } catch (error) {
      console.log('Error en registro:', error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  

  const handleCloseModal = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setIsScheduled(false);
      isWidgetInitialized.current = false;
      setFormData({ nombre: '', email: '', telefono: '', industria: 'Corporativo', mensaje: '' });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <style>{phoneInputStyles}</style>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-[28px] shadow-2xl overflow-hidden z-10 border border-slate-100 my-auto"
        >
          <button
            onClick={handleCloseModal}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all cursor-pointer z-20"
            aria-label="Cerrar modal"
          >
            <X size={22} />
          </button>

          {!isSubmitted ? (
            <div className="p-6 sm:p-10">
              <div className="flex flex-col items-center text-center space-y-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 shadow-sm">
                  <BarChart2 size={26} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Cotiza tus equipos
                </h3>
                <div className="w-full text-black text-xs sm:text-sm font-semibold py-2 px-4 rounded-xl shadow-sm">
                  Reserva una cita usando tu correo de empresa para agilizar el proceso.
                </div>
              </div>

              <form 
                onSubmit={handleSubmit}
                data-coudibot="capture"
                action="#"
                method="POST"
                className="space-y-4"
              >
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
          ) : !isScheduled ? (
            <div className="p-6 sm:p-8 text-center space-y-4">
              <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-full mb-1">
                <CheckCircle size={36} />
              </div>
              <div className="space-y-2 max-w-xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Elige la Fecha y Hora para tu Asesoría
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium">
                  Selecciona en el calendario de abajo el espacio que mejor se adapte a tu agenda.
                </p>
              </div>
              <div 
                ref={widgetRef} 
                className="w-full h-[520px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 mt-4 shadow-inner"
              />
            </div>
          ) : (
            <div className="p-8 sm:p-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full shadow-lg shadow-emerald-500/20 animate-bounce">
                <CheckCircle size={48} strokeWidth={2.5} />
              </div>
              <div className="space-y-3 max-w-lg mx-auto">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 inline-block">
                  Cita Confirmada
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  ¡Gracias por agendar con RT Proyectos!
                </h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  Hemos enviado los detalles de la reunión y la invitación a tu correo electrónico. Un ejecutivo de nuestro equipo se conectará puntualmente a la sesión.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="w-full sm:w-auto bg-brand-navy hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-2xl shadow-lg transition-all duration-300 text-sm cursor-pointer"
                >
                  Entendido / Cerrar
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}