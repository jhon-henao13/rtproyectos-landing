import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Laptop, Monitor, Printer, CheckCircle2, ArrowUpRight } from 'lucide-react';

// ESTRUCTURA DE DATOS DEL CATÁLOGO
const catalogCategories = [
  {
    id: 'laptops',
    categoryTitle: 'LAPTOPS',
    badgeText: 'Movilidad & Potencia',
    bulletPoints: [
      'Ultrabooks Ligeras para Ejecutivos',
      'Laptops Corporativas para Administración',
      'Workstations Móviles de Alta Potencia para Ingeniería/Diseño'
    ],
    ctaText: 'Cotizar Laptops',
    ctaLink: '#simulador',
    items: [
      {
        id: 1,
        modelName: 'Espacio de Trabajo Ejecutivo',
        brand: 'ENTORNO DE OFICINA',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
        isWorkspace: true,
      },
      {
        id: 2,
        modelName: 'Latitude 7440',
        brand: 'Dell',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 3,
        modelName: 'Latitude 5440',
        brand: 'Dell',
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 4,
        modelName: 'Latitude 5420',
        brand: 'Dell',
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 5,
        modelName: 'Pro 14',
        brand: 'Dell',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 6,
        modelName: 'ThinkPad L14 Gen 6',
        brand: 'Lenovo',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 7,
        modelName: 'Vivobook 14',
        brand: 'ASUS',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 8,
        modelName: 'ZBook Workstation',
        brand: 'HP',
        image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1000&auto=format&fit=crop',
      },
    ]
  },
  {
    id: 'pcs',
    categoryTitle: "PC'S",
    badgeText: 'Escritorio & Rendimiento',
    bulletPoints: [
      'Equipos All-In-One (AIO) para recepción / ventas',
      'Minitorres eficientes para oficina general',
      'Computadoras de Escritorio de Alto Rendimiento para desarrollo / procesamiento'
    ],
    ctaText: "Cotizar PC's",
    ctaLink: '#simulador',
    items: [
      {
        id: 1,
        modelName: 'Estación de Cómputo Central',
        brand: 'ENTORNO DE OFICINA',
        image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1200&auto=format&fit=crop',
        isWorkspace: true,
      },
      {
        id: 2,
        modelName: 'ProDesk Mini',
        brand: 'HP',
        image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 3,
        modelName: 'OptiPlex 7010 / 7020 / 7090',
        brand: 'Dell',
        image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 4,
        modelName: 'ThinkCentre M720q Tiny',
        brand: 'Lenovo',
        image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 5,
        modelName: 'ThinkCentre Tiny',
        brand: 'Lenovo',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
      },
    ]
  },
  {
    id: 'multifuncionales',
    categoryTitle: 'MULTIFUNCIONALES',
    badgeText: 'Impresión & Digitalización',
    bulletPoints: [
      'Fotocopiadoras de alto volumen empresarial',
      'Impresoras láser departamentales de alta velocidad',
      'Escáneres de digitalización continua y segura'
    ],
    ctaText: 'Cotizar Multis',
    ctaLink: '#simulador',
    items: [
      
      {
        id: 1,
        modelName: 'MX-304W',
        brand: 'Sharp',
        image: 'https://mediaserver.goepson.com/adaptivemedia/rendition?id=71b6b9fde8ff5356b828bd2be1040df510119f75&vid=71b6b9fde8ff5356b828bd2be1040df510119f75&prid=1200Wx1200H&clid=SAPDAM&prclid=banner&assetDescr=L5590-690x460-7',
      },
      {
        id: 2,
        modelName: 'MX-5070',
        brand: 'Sharp',
        image: 'https://netcopiadoras.com/cdn/shop/files/1684177802_0_2048x.jpg?v=9053248166165567779',
      },
      {
        id: 3,
        modelName: 'MX-3051',
        brand: 'Sharp',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRReZNKptd1xa_9cZ-22WgYv9B-FJGv2mfR30dk43UL3vYq4DW2v_qt-4A&s=10',
      },
      {
        id: 4,
        modelName: 'MX-455W',
        brand: 'Sharp',
        image: 'https://www.ricoh.es/media/Ricoh%20All-in-one%20Printers%20-%20Category%201440x680jpg_tcm77-66154.jpg',
      },

      {
        id: 5,
        modelName: 'Centro de Impresión Corporativo',
        brand: 'ENTORNO DE OFICINA',
        image: 'https://images.ctfassets.net/ao073xfdpkqn/6lqpG9l1yjfTrRns62dl1W/a260ea8a598c9c188311fd9b1c168861/Lexmark-CX950se-printer-beside-conference-room-650x510.jpg',
        isWorkspace: true,
      },

    ]
  }
];

export default function EquipmentCatalog({ onOpenModal }) {
  // Estado para el índice activo de cada carrusel por categoría
  const [activeIndices, setActiveIndices] = useState({
    laptops: 0,
    pcs: 0,
    multifuncionales: 0,
  });

  const handlePrev = (categoryId, totalItems) => {
    setActiveIndices((prev) => ({
      ...prev,
      [categoryId]: (prev[categoryId] - 1 + totalItems) % totalItems,
    }));
  };

  const handleNext = (categoryId, totalItems) => {
    setActiveIndices((prev) => ({
      ...prev,
      [categoryId]: (prev[categoryId] + 1) % totalItems,
    }));
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-[#f1f5f9] relative overflow-hidden">
      
      {/* Título de Sección */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-primary"
        >
          EQUIPAMIENTO DE VANGUARDIA
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-normal mt-2"
        >
          Catálogo de equipos
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {catalogCategories.map((cat, index) => {
          const isEven = index % 2 === 1; // Para patrón Zigzag (Izquierda / Derecha)
          const currentIndex = activeIndices[cat.id];
          const currentItem = cat.items[currentIndex];

          return (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/80 !mt-10"
            >
              
              {/* BLOQUE DE TEXTO */}
              <div 
                className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 inline-block mb-3">
                    {cat.badgeText}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy">
                    {cat.categoryTitle}
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {cat.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-slate-600 font-medium text-sm sm:text-base">
                      <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="inline-flex items-center space-x-2 bg-brand-primary hover:bg-brand-accent text-white font-bold text-base px-7 py-3.5 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <span>{cat.ctaText}</span>
                    <ArrowUpRight size={18} />
                  </button>
                </div>
                
              </div>

              {/* BLOQUE DE CARRUSEL DE IMÁGENES */}
              <div 
                className={`lg:col-span-7 relative h-[360px] sm:h-[420px] md:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Transición de Imagen con AnimatePresence */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentItem.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={currentItem.image}
                      alt={`${currentItem.brand} ${currentItem.modelName}`}
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Gradient overlay inferior para legibilidad del texto superpuesto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                  </motion.div>
                </AnimatePresence>

                {/* LOGO DE MARCA + NOMBRE DEL MODELO (DENTRO DE LA IMAGEN) */}
                <div className="absolute bottom-6 left-6 right-20 z-10">
                  <motion.div 
                    key={`badge-${currentItem.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-start space-y-1"
                  >
                    <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                      {currentItem.brand}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                      {currentItem.modelName}
                    </h4>
                  </motion.div>
                </div>

                {/* BOTONES DE NAVEGACIÓN (FLECHAS) */}
                <button
                  onClick={() => handlePrev(cat.id, cat.items.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-brand-primary text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg"
                  aria-label="Anterior"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={() => handleNext(cat.id, cat.items.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-brand-primary text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg"
                  aria-label="Siguiente"
                >
                  <ChevronRight size={24} />
                </button>

                {/* INDICADORES DE PUNTOS (PAGINACIÓN) */}
                <div className="absolute top-6 right-6 z-20 flex space-x-1.5 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  {cat.items.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() =>
                        setActiveIndices((prev) => ({
                          ...prev,
                          [cat.id]: dotIdx,
                        }))
                      }
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === dotIdx ? 'w-6 bg-brand-primary' : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>

              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}