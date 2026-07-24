import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import heroRightAsset from '../assets/hero-right.webp';

export default function Hero() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full pt-32 lg:pt-36 pb-0 px-6 relative overflow-hidden bg-[#e2e6ee] flex flex-col justify-end">
      
      {/* 1. SUPERFICIE / MESA HORIZONTAL DE FONDO */}
      <div className="absolute bottom-0 left-0 w-full h-28 md:h-36 lg:h-44 bg-[#edeff5] border-t border-white/70 shadow-[inset_0_1px_3px_rgba(255,255,255,0.8)] pointer-events-none z-0">
        {/* Sombra proyectada por el borde de la mesa */}
        <div className="absolute -top-3 left-0 w-full h-3 bg-gradient-to-b from-transparent to-slate-400/15"></div>
      </div>

      {/* Contenedor interno */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-0 relative z-10 mt-auto">
        
        {/* TEXT CONTENT (Izquierda: Ancho protegido + z-20) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[46%] flex-shrink-0 flex flex-col space-y-7 text-left z-20 pb-12 lg:pb-16"
        >
          {/* Label superior */}
          <motion.span 
            variants={itemVariants}
            className="text-sm font-normal uppercase tracking-[0.2em] text-slate-500"
          >
            ARRENDAMIENTO Y VENTA DE EQUIPO DE CÓPUTO
          </motion.span>
          
          {/* Título Principal */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-brand-navy tracking-tight !leading-[1.2] !mt-4"
          >
            Equipa a tu Empresa<br />
            con Laptops de <br />
            <span className="text-brand-primary font-bold relative inline-block">
              Última Generación
            </span>
          </motion.h1>
          
          {/* Descripción */}
          <motion.p 
            variants={itemVariants}
            className="text-slate-600 font-medium text-lg pt-1"
          >
            Planes a medida para <b>PyMEs y corporativos</b>
          </motion.p>

          {/* CHECKLIST */}
          <motion.div variants={itemVariants} className="space-y-3 pt-1 !mt-2">
            {["100% deducibles", "Sin descapitalizarte"].map((text, i) => (
              <div key={i} className="flex items-center space-x-3">
                <Check size={18} className="text-brand-navy" strokeWidth={3} />
                <span className="text-slate-700 font-medium text-base">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA BUTTON */}
          <motion.div variants={itemVariants} className="pt-6">
            <button className="bg-brand-primary hover:bg-brand-accent text-white px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 group shadow-2xl shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all duration-300">
              <span>Solicita tu Cotización</span>
              <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* GRAPHIC / HARDWARE IMAGE SECTION (Derecha: Imagen ampliada y asentada en la mesa) */}
        {/* GRAPHIC / HARDWARE IMAGE SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[58%] relative flex items-end justify-center lg:justify-end z-10 lg:-ml-12"
        >
          {/* IMAGEN: Agregamos contrast-105 y saturate-110 para revivir los colores */}
          <img 
            src={heroRightAsset} 
            alt="Modern hardware stack: Monitors and Laptops" 
            className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-none h-auto object-contain scale-100 lg:scale-110 origin-bottom lg:-translate-x-6 translate-y-1 lg:translate-y-2 drop-shadow-2xl contrast-[1.08] saturate-[1.12] relative z-10"
          />
        
          {/* LUZ DE FONDO: Cambiada de slate-200/50 a blanco/azul brillante (white/80 + blue-200/30) */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-white/80 via-blue-100/40 to-transparent rounded-full blur-3xl opacity-70 z-0 pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
}