import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Gracias() {
  useEffect(() => {
    // Enviar evento a dataLayer para GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'cita_agendada',
        category: 'Conversión',
        action: 'Agendamiento exitoso',
        label: 'Calendly',
        value: 1
      });
      console.log('📊 Evento "cita_agendada" enviado a dataLayer');
    }

    // Enviar evento a gtag (opcional)
    if (window.gtag) {
      window.gtag('event', 'agendamiento', {
        'event_category': 'Conversión',
        'event_label': 'Calendly',
        'value': 1
      });
      console.log('📊 Evento "agendamiento" enviado a gtag');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center space-y-6 border border-slate-100">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full shadow-lg shadow-emerald-500/20">
          <CheckCircle size={48} strokeWidth={2.5} />
        </div>
        <h1 className="text-3xl font-black text-slate-900">¡Gracias por agendar!</h1>
        <p className="text-slate-600 text-sm font-medium leading-relaxed">
          Hemos enviado los detalles de la reunión y la invitación a tu correo electrónico.<br />
          Un ejecutivo de nuestro equipo se conectará puntualmente a la sesión.
        </p>
        <Link
          to="/"
          className="inline-block w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-all duration-300 text-sm"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}