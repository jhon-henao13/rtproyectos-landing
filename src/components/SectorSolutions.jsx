import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, Code2, Ship, Home, ConciergeBell } from 'lucide-react';

const SECTORS = [
  // FILA SUPERIOR (3 ítems)
  {
    id: 'corporativo',
    title: 'Corporativo & Oficinas',
    subtitle: 'Laptops y PC de escritorio optimizadas para alta productividad.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    row: 'top',
  },
  {
    id: 'tech',
    title: 'Tecnología & Software',
    subtitle: 'Workstations de alto rendimiento para desarrollo y diseño.',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    row: 'top',
  },
  {
    id: 'logistica',
    title: 'Logística & Comercio',
    subtitle: 'Equipos rudimentarios y multifuncionales para operación continua.',
    icon: Ship,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    row: 'top',
  },
  // FILA INFERIOR (2 ítems centrados)
  {
    id: 'inmobiliario',
    title: 'Inmobiliario & Servicios',
    subtitle: 'Flujo de caja flexible y movilidad para asesores de campo.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    row: 'bottom',
  },
  {
    id: 'hoteleria',
    title: 'Hotelería & Recepción',
    subtitle: 'Puntos de atención al cliente y All-In-One elegantes.',
    icon: ConciergeBell,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    row: 'bottom',
  },
];


export default function SectorSolutions({ onOpenModal }) {
  return (
    <section className="w-full py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      
      {/* Resplandor sutil de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight"
          >
            Soluciones por sector
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Adaptamos la potencia, las marcas y las modalidades de contratación a las necesidades operativas de cada industria.
          </motion.p>
        </div>

        {/* Mosaico Circular de Sectores */}
        <div className="space-y-8 max-w-4xl mx-auto">
          
          {/* Fila Superior: 3 Círculos */}
          <div className="grid grid-cols-3 gap-3 sm:gap-8 justify-items-center items-start">
            {SECTORS.filter((s) => s.row === 'top').map((sector, index) => (
              <SectorBubble key={sector.id} sector={sector} index={index} />
            ))}
          </div>

          {/* Fila Inferior: 2 Círculos Centrados */}
          <div className="flex justify-center items-start gap-5 sm:gap-12">
            {SECTORS.filter((s) => s.row === 'bottom').map((sector, index) => (
              <SectorBubble key={sector.id} sector={sector} index={index + 3} />
            ))}
          </div>

        </div>

        {/* Botón CTA Inferior */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          

            <button
              type="button"
              onClick={onOpenModal}
              className="inline-flex items-center space-x-2 bg-brand-primary hover:bg-brand-accent text-white font-bold text-base px-7 py-3.5 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>Cotizar Ahora</span>
              <ArrowUpRight size={18} />
            </button>

            
        </motion.div>

      </div>
    </section>
  );
}

// Subcomponente individual para la burbuja circular interactiva
function SectorBubble({ sector, index }) {
  const IconComponent = sector.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col items-center cursor-pointer"
    >
      {/* Círculo Principal con Imagen */}
      <div className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl border-4 border-white group-hover:border-brand-primary transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/25">
        
        {/* Imagen de Fondo */}
        <img
          src={sector.image}
          alt={sector.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Capa oscura sutil en hover */}
        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/50 transition-colors duration-300" />

        {/* Badge Flotante al centro en Hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="p-2.5 bg-brand-primary text-white rounded-full mb-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <IconComponent size={22} />
          </div>
          <h4 className="text-white font-extrabold text-sm sm:text-base leading-snug drop-shadow-md">
            {sector.title}
          </h4>
          <p className="text-blue-100 text-[11px] font-medium mt-1 line-clamp-2 px-2">
            {sector.subtitle}
          </p>
        </div>
      </div>

      {/* Etiqueta de Título Fija Móvil/Escritorio (Fuera de la burbuja para vista normal) */}
      <div className="mt-3 text-center group-hover:opacity-0 transition-opacity duration-200">
        <span className="text-[10px] sm:text-sm font-bold text-slate-700 tracking-wide flex flex-col sm:flex-row items-center justify-center gap-1 sm:space-x-1.5">
          <IconComponent size={12} className="text-brand-primary sm:w-[14px] sm:h-[14px]" />
          <span>{sector.title}</span>
        </span>
      </div>
    </motion.div>
  );
}