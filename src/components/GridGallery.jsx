import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import arrendamientoImg from '../assets/grid3img/arrendamiento.webp';
import ventaEquipoImg from '../assets/grid3img/venta-equipo.webp';
import multifuncionalesImg from '../assets/grid3img/multifuncionales.webp';

const galleryCards = [
  {
    id: 1,
    title: "Arrendamiento",
    image: arrendamientoImg,
    alt: "Arrendamiento de equipos de cómputo",
  },
  {
    id: 2,
    title: "Venta de Equipo",
    image: ventaEquipoImg,
    alt: "Venta de laptops y hardware corporativo",
  },
  {
    id: 3,
    title: "Multifuncionales",
    image: multifuncionalesImg,
    alt: "Multifuncionales e impresoras empresariales",
  },
];

export default function GridGallery() {
  return (
    <section className="w-full py-6 md:py-10 px-2 sm:px-4 bg-[#e2e6ee] relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Grid de 3 Columnas Proporcionales (1 Columna en Mobile / 3 en Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 lg:gap-2">
          {galleryCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group relative w-full h-[480px] sm:h-[540px] lg:h-[600px] rounded-md md:rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-slate-500/20 transition-all duration-500 cursor-pointer bg-slate-100 border border-slate-300/60 flex flex-col justify-between"
            >
              {/* Imagen principal con efecto Zoom sutil */}
              <img 
                src={card.image} 
                alt={card.alt} 
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay superior sutil para dar profundidad */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>

              {/* Botón flotante interactivo (Aparece en la esquina superior derecha al hacer Hover) */}
              <div className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-white/60 flex items-center justify-center text-slate-800 shadow-md group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary group-hover:scale-110 transition-all duration-300">
                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>

              {/* Borde brillante al pasar el cursor */}
              <div className="absolute inset-0 rounded-md md:rounded-lg border-2 border-transparent group-hover:border-white/40 transition-colors duration-500 pointer-events-none z-20"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}