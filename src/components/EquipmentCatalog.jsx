import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  ArrowUpRight, 
  Cpu, 
  HardDrive, 
  Monitor, 
  Sparkles, 
  Tag 
} from 'lucide-react';

// IMÁGENES LOCALES DE LAPTOPS
import lenovoThinkpadImg from '../assets/catalog/laptops/lenovo-thinkpad/IMG_6982.PNG';
import dell7440Img from '../assets/catalog/laptops/dell-7440/IMG_6971.PNG';
import dell5440Img from '../assets/catalog/laptops/dell-5440/IMG_6969.jpg';
import dellPro14PlusImg from '../assets/catalog/laptops/dell-pro14plus/IMG_6977.JPG';
import dellPro14EssentialImg from '../assets/catalog/laptops/dell-pro14essential/IMG_6974.JPG';
import dellDc15250Img from '../assets/catalog/laptops/dell-dc15250/IMG_6980.PNG';
import asusVivobookImg from '../assets/catalog/laptops/asus-vivobook14.PNG';

// IMÁGENES LOCALES DE PC'S DE ESCRITORIO
import thinkCentreM720qImg1 from '../assets/catalog/PCs/thinkCentreM720qTiny/IMG_7013.AVIF';
import thinkCentreM720qImg2 from '../assets/catalog/PCs/thinkCentreM720qTiny/IMG_7014.AVIF';

import dellOptiPlex7010Img1 from '../assets/catalog/PCs/dellOptiPlex7010/IMG_7009.JPG';
import dellOptiPlex7010Img2 from '../assets/catalog/PCs/dellOptiPlex7010/IMG_7010.PNG';

import hpEliteDesk800Img1 from '../assets/catalog/PCs/hpEliteDesk800G3Mini/IMG_7006.JPG';
import hpEliteDesk800Img2 from '../assets/catalog/PCs/hpEliteDesk800G3Mini/IMG_7007.JPG';

import dellOptiPlex7090Img from '../assets/catalog/PCs/dellOptiPlex7090.PNG';


// IMÁGENES LOCALES DE MULTIFUNCIONALES
import sharpMXB455Img from '../assets/catalog/multifuncionales/sharpMXB455.PNG';
import sharpMX5070Img from '../assets/catalog/multifuncionales/sharp-MX5070.JPG';
import sharpMX3051Img from '../assets/catalog/multifuncionales/sharpMX3051.JPG';
import sharpMX304WImg from '../assets/catalog/multifuncionales/sharpMX304W.PNG';


// ESTRUCTURA DE DATOS DEL CATÁLOGO
const catalogCategories = [
  {
    id: 'laptops',
    categoryTitle: 'LAPTOPS CORPORATIVAS',
    badgeText: 'Movilidad & Alta Potencia',
    bulletPoints: [
      'Ultrabooks ejecutivas con procesadores de última generación Intel Core / Ultra',
      'Memoria RAM de 16GB LPDDR5 / DDR5 y almacenamiento NVMe SSD ultrarrápido',
      'Licenciamiento corporativo Windows 11 Pro/Home y pantallas FHD+ anti-reflejo'
    ],
    ctaText: 'Cotizar Laptops',
    ctaLink: '#simulador',
    items: [
      {
        id: 'lenovo-l14',
        modelName: 'ThinkPad L14 Gen 6',
        brand: 'Lenovo',
        sku: 'SKU: 21S7000SLM',
        image: lenovoThinkpadImg,
        specs: {
          screen: '14" WUXGA (1920x1200)',
          cpu: 'Intel Core Ultra 7 255U',
          ram: '16GB RAM',
          storage: '512GB SSD',
          os: 'Windows 11 Pro'
        }
      },
      {
        id: 'dell-7440',
        modelName: 'Latitude 7440',
        brand: 'Dell',
        sku: 'Ref: 05FK9',
        image: dell7440Img,
        specs: {
          screen: '14" FHD+ (1920x1200)',
          cpu: 'Intel Core i7-1365U',
          ram: '16GB LPDDR5',
          storage: '512GB SSD',
          os: 'Windows 11 Pro · Wi-Fi 6E'
        }
      },
      {
        id: 'dell-5440',
        modelName: 'Latitude 5440',
        brand: 'Dell',
        sku: 'Serie Latitude 5000',
        image: dell5440Img,
        specs: {
          screen: '14" FHD+ (1920x1200)',
          cpu: 'Intel Core i5-1334U',
          ram: '16GB RAM',
          storage: '512GB SSD · UHD Graphics',
          os: 'Windows 11 Pro'
        }
      },
      {
        id: 'dell-pro14-plus',
        modelName: 'Pro 14 Plus',
        brand: 'Dell',
        sku: 'Alto Rendimiento',
        image: dellPro14PlusImg,
        specs: {
          screen: '14" LED Premium',
          cpu: 'Intel Core Ultra 7 266V (hasta 5.0 GHz)',
          ram: '16GB DDR5',
          storage: '512GB SSD · Intel Arc Graphics',
          os: 'Windows 11 Pro (64 Bits)'
        }
      },
      {
        id: 'dell-pro14-essential',
        modelName: 'Pro 14 Essential',
        brand: 'Dell',
        sku: 'Modelo: 2GHTM',
        image: dellPro14EssentialImg,
        specs: {
          screen: '14" FHD+ (1920x1200)',
          cpu: 'Intel Core 7-150U',
          ram: '16GB RAM',
          storage: '512GB SSD',
          os: 'Windows 11 Pro'
        }
      },
      {
        id: 'dell-dc15250',
        modelName: 'Laptop DC15250',
        brand: 'Dell',
        sku: 'SKU: 0Y8RM',
        image: dellDc15250Img,
        specs: {
          screen: '15.6" Full HD (1920x1080)',
          cpu: 'Intel Core i7-1355U',
          ram: '16GB RAM',
          storage: '512GB SSD',
          os: 'Windows 11 Home'
        }
      },
      {
        id: 'asus-vivobook14',
        modelName: 'Vivobook 14',
        brand: 'ASUS',
        sku: 'SKU: VB14E-CI516512MM',
        image: asusVivobookImg,
        specs: {
          screen: '14" Full HD (1920x1080)',
          cpu: 'Intel Core i5-1334U',
          ram: '16GB RAM',
          storage: '512GB SSD',
          os: 'Windows 11 Home'
        }
      }
    ]
  },
  {
    id: 'pcs',
    categoryTitle: "PC'S DE ESCRITORIO & WORKSTATIONS",
    badgeText: 'Rendimiento Fijo & Continuo',
    bulletPoints: [
      'Factor de forma Mini PC / Micro para la máxima optimización de espacio de trabajo',
      'Configuraciones completas empresariales con monitores FHD, teclado, mouse y adaptadores',
      'Procesadores Intel Core i5 e i7 de alto rendimiento para multitarea y procesos exigentes'
    ],
    ctaText: "Cotizar PC's",
    ctaLink: '#simulador',
    items: [
      {
        id: 'lenovo-m720q-combo',
        modelName: 'ThinkCentre M720q Tiny + Monitor 27"',
        brand: 'Lenovo',
        sku: 'Kit Monitor ThinkVision 27"',
        image: thinkCentreM720qImg1,
        specs: {
          screen: 'Monitor ThinkVision T27i-30 27" NUEVO',
          cpu: 'Intel Core i5-7400T (2.40 GHz)',
          ram: '16GB DDR4',
          storage: '240GB SSD · Intel HD 630',
          os: 'Windows 10 · 7 Puertos USB · DP x2'
        }
      },
      {
        id: 'lenovo-m720q-micro',
        modelName: 'ThinkCentre M720q Tiny (Mini PC)',
        brand: 'Lenovo',
        sku: 'Factor de Forma Micro',
        image: thinkCentreM720qImg2,
        specs: {
          screen: 'Ultra Compacto / Montaje VESA',
          cpu: 'Intel Core i5-7400T 7a Gen',
          ram: '16GB DDR4',
          storage: '240GB SSD',
          os: 'Windows 10 · Puerto Ethernet'
        }
      },
      {
        id: 'dell-7010-front',
        modelName: 'OptiPlex 7010 Micro (MFF)',
        brand: 'Dell',
        sku: 'Formato Micro 14-Core',
        image: dellOptiPlex7010Img1,
        specs: {
          screen: 'Diseño Chasis Ultra Pequeño',
          cpu: 'Intel Core i5-13500T (14 Cores hasta 4.6GHz)',
          ram: '16GB DDR4',
          storage: '512GB SSD NVMe',
          os: 'Windows 11 Pro · Intel UHD'
        }
      },
      {
        id: 'dell-7010-angle',
        modelName: 'OptiPlex 7010 Micro',
        brand: 'Dell',
        sku: 'Serie Empresarial 7000',
        image: dellOptiPlex7010Img2,
        specs: {
          screen: 'Conectividad Multipuerto High-Speed',
          cpu: 'Intel Core i5 13ª Gen',
          ram: '16GB DDR4',
          storage: '512GB SSD',
          os: 'Windows 11 Pro'
        }
      },
      {
        id: 'hp-800g3-kit',
        modelName: 'EliteDesk 800 G3 Mini + Kit 21.5"',
        brand: 'HP',
        sku: 'Setup Empresarial Completo',
        image: hpEliteDesk800Img1,
        specs: {
          screen: 'Monitor FHD 21.5" + Teclado/Mouse',
          cpu: 'Intel Core i5-6500T',
          ram: '16GB RAM',
          storage: '512GB SSD',
          os: 'Windows 11 Pro · Cable DP Incluido'
        }
      },
      {
        id: 'hp-800g3-mini',
        modelName: 'EliteDesk 800 G3 Mini',
        brand: 'HP',
        sku: 'Formato Mini PC',
        image: hpEliteDesk800Img2,
        specs: {
          screen: 'Factor Mini Eficiente',
          cpu: 'Intel Core i5-6500T',
          ram: '16GB RAM',
          storage: '512GB SSD',
          os: 'Windows 11 Pro'
        }
      },
      {
        id: 'dell-7090-micro',
        modelName: 'OptiPlex 7090 Micro',
        brand: 'Dell',
        sku: 'i7 10ª Gen + Doble Disco',
        image: dellOptiPlex7090Img,
        specs: {
          screen: 'Soporta Monitor LED 24"',
          cpu: 'Intel Core i7-10700T (hasta 4.50 GHz)',
          ram: '16GB DDR4',
          storage: '512GB SSD + 500GB HDD',
          os: 'Windows 11 Pro · Wi-Fi + Periféricos'
        }
      }
    ]
  },
  {
    id: 'multifuncionales',
    categoryTitle: 'MULTIFUNCIONALES & IMPRESIÓN',
    badgeText: 'Digitalización & Alto Volumen',
    bulletPoints: [
      'Equipos multifuncionales de alto rendimiento B&N y Color para cargas exigentes',
      'Sistemas con alimentador automático, dúplex, escaneo a red/USB y conectividad Wi-Fi/Gigabit',
      'Alto rendimiento de insumos y pantallas táctiles intuitivas para optimizar el flujo de trabajo'
    ],
    ctaText: 'Cotizar Multis',
    ctaLink: '#simulador',
    items: [
      {
        id: 'sharp-mxb455',
        modelName: 'Sharp MX-B455',
        brand: 'Sharp',
        sku: 'Alto Rendimiento B&N',
        image: sharpMXB455Img,
        specs: {
          screen: 'Carta a Oficio (60-128g)',
          cpu: '45 PPM · 600x600 DPI',
          ram: 'Tóner 27.5k',
          storage: 'Cilindro 100k · 8k/mes',
          os: 'Dúplex Automático'
        }
      },
      {
        id: 'sharp-mx5070',
        modelName: 'Sharp MX-5070',
        brand: 'Sharp',
        sku: 'Color Corporativo A3',
        image: sharpMX5070Img,
        specs: {
          screen: 'Panel Táctil 10.1" Color',
          cpu: '50 PPM B&N y Color',
          ram: '5GB RAM',
          storage: '500GB HDD · Wi-Fi/Red',
          os: 'Doble Escáner 150 docs · PCL6/PS3'
        }
      },
      {
        id: 'sharp-mx3051',
        modelName: 'Sharp MX-3051',
        brand: 'Sharp',
        sku: 'Serie Color Avanzada',
        image: sharpMX3051Img,
        specs: {
          screen: 'Pantalla Táctil 10.1"',
          cpu: '30 PPM B&N y Color',
          ram: '5GB RAM',
          storage: '500GB HDD · Red Gigabit',
          os: 'Alimentador 100 docs · 1,000 Usuarios'
        }
      },
      {
        id: 'sharp-mx304w',
        modelName: 'Sharp MX-304W',
        brand: 'Sharp',
        sku: 'Multifuncional Compacta',
        image: sharpMX304WImg,
        specs: {
          screen: 'Oficio / A4 (60-220g)',
          cpu: '30 PPM · 600x600 DPI',
          ram: 'Tóner 6k docs',
          storage: '10k doc/mes',
          os: 'Dúplex / Escáner Color'
        }
      }
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
          const isEven = index % 2 === 1;
          const currentIndex = activeIndices[cat.id];
          const currentItem = cat.items[currentIndex];

          return (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/80"
            >
              
              {/* BLOQUE DE TEXTO E INFORMACIÓN GENERAL */}
              <div 
                className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="space-y-4">
                  <span className="text-xs font-black uppercase tracking-widest text-brand-primary bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-flex items-center gap-1.5">
                    <Sparkles size={14} />
                    {cat.badgeText}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
                    {cat.categoryTitle}
                  </h3>

                  <p className="text-slate-500 text-sm font-medium">
                    Equipos seleccionados bajo estándares rigurosos de rendimiento corporativo, durabilidad y listas para integración inmediata.
                  </p>

                  <ul className="space-y-3 pt-2">
                    {cat.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-slate-700 font-medium text-sm sm:text-base">
                        <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="inline-flex items-center space-x-2 bg-brand-primary hover:bg-brand-navy text-white font-bold text-base px-7 py-3.5 rounded-2xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <span>{cat.ctaText}</span>
                    <ArrowUpRight size={18} />
                  </button>

                  <div className="text-right hidden sm:block">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block">
                      Disponibles
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      {cat.items.length} Modelos en stock
                    </span>
                  </div>
                </div>
              </div>

              {/* BLOQUE DE CARRUSEL DE VISUALIZACIÓN PREMIUM */}
              <div 
                className={`lg:col-span-7 flex flex-col justify-between bg-slate-950 rounded-2xl sm:rounded-3xl p-5 sm:p-7 relative overflow-hidden shadow-2xl border border-slate-800 group ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Glow de fondo decorativo */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none" />

                {/* ENCABEZADO DE LA TARJETA DE EQUIPO (MARCA + SKU + INDICADORES) */}
                <div className="relative z-20 flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-widest bg-brand-primary text-white px-3 py-1 rounded-lg shadow-sm">
                      {currentItem.brand}
                    </span>
                    {currentItem.sku && (
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-lg flex items-center gap-1">
                        <Tag size={12} className="text-brand-primary" />
                        {currentItem.sku}
                      </span>
                    )}
                  </div>

                  {/* INDICADORES (PAGINACIÓN) */}
                  <div className="flex space-x-1.5 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
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
                          currentIndex === dotIdx ? 'w-6 bg-brand-primary' : 'w-2 bg-white/30 hover:bg-white/60'
                        }`}
                        aria-label={`Ver equipo ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* CONTENEDOR DE LA IMAGEN CON TRANSICIÓN */}
                <div className="relative h-[240px] sm:h-[290px] md:h-[320px] my-2 w-full flex items-center justify-center overflow-hidden rounded-xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentItem.id}
                      initial={{ opacity: 0, scale: 0.92, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.05, y: -10 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full flex items-center justify-center p-2"
                    >
                      <img
                        src={currentItem.image}
                        alt={`${currentItem.brand} ${currentItem.modelName}`}
                        className="max-h-full max-w-full rounded-2xl object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* BOTONES DE NAVEGACIÓN LATERALES */}
                  <button
                    onClick={() => handlePrev(cat.id, cat.items.length)}
                    className="absolute left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-brand-primary text-white border border-white/15 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-xl backdrop-blur-md"
                    aria-label="Equipo Anterior"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button
                    onClick={() => handleNext(cat.id, cat.items.length)}
                    className="absolute right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-brand-primary text-white border border-white/15 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-xl backdrop-blur-md"
                    aria-label="Siguiente Equipo"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>

                {/* INFORMACIÓN DEL MODELO Y PÍLDORAS DE ESPECIFICACIONES TÉCNICAS */}
                <div className="relative z-20 pt-3 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <AnimatePresence mode="wait">
                      <motion.h4 
                        key={currentItem.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                      >
                        {currentItem.modelName}
                      </motion.h4>
                    </AnimatePresence>
                    <span className="text-xs text-slate-400 font-medium">
                      {currentIndex + 1} de {cat.items.length}
                    </span>
                  </div>

                  {/* CHIPS DE ESPECIFICACIONES */}
                  {currentItem.specs && (
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={`specs-${currentItem.id}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                      >
                        <div className="bg-slate-900/90 border border-slate-800 p-2 rounded-xl flex items-center space-x-2">
                          <Monitor size={15} className="text-blue-400 flex-shrink-0" />
                          <span className="text-xs font-semibold text-slate-300 truncate" title={currentItem.specs.screen}>
                            {currentItem.specs.screen}
                          </span>
                        </div>

                        <div className="bg-slate-900/90 border border-slate-800 p-2 rounded-xl flex items-center space-x-2">
                          <Cpu size={15} className="text-blue-400 flex-shrink-0" />
                          <span className="text-xs font-semibold text-slate-300 truncate" title={currentItem.specs.cpu}>
                            {currentItem.specs.cpu}
                          </span>
                        </div>

                        <div className="bg-slate-900/90 border border-slate-800 p-2 rounded-xl flex items-center space-x-2">
                          <HardDrive size={15} className="text-blue-400 flex-shrink-0" />
                          <span className="text-xs font-semibold text-slate-300 truncate" title={`${currentItem.specs.ram} | ${currentItem.specs.storage}`}>
                            {currentItem.specs.ram} · {currentItem.specs.storage}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>

              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}