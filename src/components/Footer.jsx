import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowUp } from 'lucide-react';

// Importación de assets según tus rutas
import logoImg from '../assets/logopng.png';
import backFooterImg from '../assets/back-footer.jpeg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full text-white bg-slate-950 overflow-hidden font-sans border-t border-slate-800">
      
      {/* 1. Fondo de Imagen con Filtros y Degradados Oscuros */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={backFooterImg}
          alt="RT Proyectos Blueprint Background"
          className="w-full h-full object-cover object-center opacity-50 mix-blend-luminosity scale-105"
        />
        {/* Capas de oscurecimiento y resplandor azul inferior */}
        
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-950/40 via-blue-900/10 to-transparent" />
        
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-20 pb-10 relative z-10">
        
        {/* 2. Contenido Principal en Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between">
          
          {/* Lado Izquierdo: Logotipo Corporativo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left space-y-4"
          >
            <a href="#" className="inline-block transition-transform duration-300 hover:scale-105">
              <img 
                src={logoImg} 
                alt="RT Proyectos - Tecnología y Construcción" 
                className="h-24 sm:h-28 w-auto object-contain brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]"
              />
            </a>
            <p className="text-slate-400 text-xs sm:text-sm font-medium max-w-sm leading-relaxed">
              Soluciones tecnológicas integrales y arrendamiento de cómputo empresarial con disponibilidad inmediata.
            </p>
          </motion.div>

          {/* Lado Derecho: Bloque ¿Necesitas Ayuda? */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-6 flex flex-col items-center md:items-end text-center md:text-right space-y-5"
          >
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide border-b-2 border-brand-primary/60 pb-1 inline-block">
              ¿Necesitas Ayuda?
            </h3>

            <div className="space-y-4 text-sm sm:text-base">
              {/* Teléfono */}
              <div className="flex flex-col items-center md:items-end group">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                  Llámanos
                </span>
                <a 
                  href="tel:5610981839" 
                  className="font-bold text-white text-base sm:text-lg hover:text-blue-400 transition-colors flex items-center gap-2 group-hover:translate-x-[-2px] transition-transform duration-200"
                >
                  <Phone size={16} className="text-brand-primary" />
                  <span>561 098 1839</span>
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center md:items-end group">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                  Contáctanos por Correo
                </span>
                <a 
                  href="mailto:contacto@rtproyectos.com" 
                  className="font-bold text-white text-base sm:text-lg hover:text-blue-400 transition-colors flex items-center gap-2 group-hover:translate-x-[-2px] transition-transform duration-200"
                >
                  <Mail size={16} className="text-brand-primary" />
                  <span>contacto@rtproyectos.com</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3. Línea Separadora y Botón Flotante para Subir */}
        <div className="my-10 border-t border-slate-800/80 relative">
          <button
            onClick={scrollToTop}
            className="absolute right-0 -top-4 bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:bg-brand-primary hover:border-brand-primary p-2 rounded-full shadow-lg transition-all duration-300 cursor-pointer group"
            aria-label="Volver arriba"
            title="Volver arriba"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 4. Pie de Página / Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-medium text-slate-400 gap-4 text-center sm:text-left">
          <p>© 2026. RT PROYECTOS. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-6 text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Términos y Condiciones</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Aviso de Privacidad</a>
          </div>
        </div>

      </div>
    </footer>
  );
}