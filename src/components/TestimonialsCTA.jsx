import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, ArrowRight, ShieldCheck, Laptop, Monitor, Printer } from 'lucide-react';

// Importación de Logos de Clientes desde src/assets/brands
import brand1 from '../assets/brands/449644368_1097589341820046_636363669266714533_n.jpg';
import brand2 from '../assets/brands/656574142_1685758866118306_8173105617304555427_n.jpg';
import brand3 from '../assets/brands/Captura de pantalla 2026-07-17 091439.png';
import brand4 from '../assets/brands/images.png';
import brand5 from '../assets/brands/nissin-foods-logo-png_seeklogo-212469.png';
import brand6 from '../assets/brands/path_logistic_copacker_logo.jpeg';

import PCsRight from '../assets/testimonial-pc.png';

const testimonials = [
  {
    id: 1,
    quote: "Excelente experiencia con el arrendamiento de las 40 laptops.",
    highlight: "La entrega fue sumamente puntual y los equipos operan en perfectas condiciones.",
    rest: "Una gran solución operativa y financiera.",
    author: "Ing. Edgar Cruz",
    role: "Director de Operaciones",
  },
  {
    id: 2,
    quote: "Muy satisfechos con el servicio de entrega y,",
    highlight: "sobre todo, con el soporte postventa.",
    rest: "La atención es rápida, profesional y siempre orientada a resolver en el menor tiempo posible.",
    author: "Ing. Carlos Mendoza",
    role: "Líder de Infraestructura TI",
  },
  {
    id: 3,
    quote: "El servicio de instalación fue impecable.",
    highlight: "El equipo técnico trabajó de manera muy ordenada y profesional,",
    rest: "dejando toda la infraestructura funcionando al 100% desde el primer día.",
    author: "Ing. Mauricio Altamirano",
    role: "Gerente de Sistemas",
  },
  {
    id: 4,
    quote: "El esquema de arrendamiento ha sido una excelente solución financiera.",
    highlight: "El proceso es muy ágil, transparente",
    rest: "y con un trato corporativo impecable.",
    author: "Ing. Eduardo Pérez",
    role: "Director de Finanzas",
  },
  {
    id: 5,
    quote: "Altamente recomendables.",
    highlight: "Ofrecen soluciones tecnológicas integrales con un excelente nivel de servicio,",
    rest: "atención personalizada y total cumplimiento de los tiempos acordados.",
    author: "Lic. Sofía Ruiz",
    role: "Head of People & Operations",
  },
];

const clientLogos = [
  { name: 'Cliente 1', src: brand1 },
  { name: 'Cliente 2', src: brand2 },
  { name: 'Cliente 3', src: brand3 },
  { name: 'Cliente 4', src: brand4 },
  { name: 'Cliente 5', src: brand5 },
  { name: 'Cliente 6', src: brand6 },
];


export default function TestimonialsCTA({ onOpenModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay del carrusel cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="w-full bg-[#0B0F19] text-white pt-20 overflow-hidden relative">
      
      {/* 1. SECCIÓN SUPERIOR: CARRUSEL DE RESEÑAS EN MODO OSCURO */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pb-16">
        
        {/* Ícono gigante de comillas superior */}
        <div className="flex justify-center mb-6 text-brand-primary/40">
          <Quote size={56} className="rotate-180" />
        </div>

        {/* Sliders de Testimonios */}
        <div className="min-h-[220px] sm:min-h-[180px] flex items-center justify-center text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug sm:leading-relaxed text-slate-100">
                "{testimonials[currentIndex].quote}{' '}
                <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  {testimonials[currentIndex].highlight}
                </span>{' '}
                {testimonials[currentIndex].rest}"
              </p>

              <div className="pt-2 flex flex-col items-center justify-center space-y-1">
                <div className="flex text-amber-400 space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <h4 className="text-lg font-bold text-white tracking-wide">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles de Navegación del Carrusel */}
        <div className="flex items-center justify-center space-x-6 mt-10">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 cursor-pointer shadow-md"
            aria-label="Testimonio Anterior"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots Indicadores */}
          <div className="flex items-center space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-brand-primary'
                    : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 cursor-pointer shadow-md"
            aria-label="Siguiente Testimonio"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* 2. BANDA DE LOGOS DE CLIENTES EN ESCALA DE GRISES */}
      <div className="w-full border-t border-slate-800/80 bg-slate-950/60 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">
            Empresas e Instituciones que confían en nosotros
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="h-16 w-28 sm:w-36 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain filter rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BANNER CTA INFERIOR DE ALTO IMPACTO (AZUL VIBRANTE) */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-brand-primary to-blue-800 py-16 px-4 sm:px-8 relative overflow-hidden">
        
        {/* Resplandor decorativo interno */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Lado Izquierdo: Textos y Botón */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-100 leading-tight tracking-tight">
              Elimina las Computadoras Lentas y <br className="hidden sm:inline" />
              <span className="text-white">Garantiza la Continuidad Operativa</span> de tu Empresa
            </h2>

            <p className="text-blue-100/90 text-base sm:text-lg font-medium max-w-xl mx-auto lg:mx-0">
              Cotiza en menos de 2 minutos tu flotilla de laptops, desktops y periféricos con entrega garantizada e instalación incluida.
            </p>

            <div className="pt-2">

              <button
                  type="button"
                  onClick={onOpenModal}
                  className="inline-flex items-center space-x-3 bg-white text-brand-primary hover:bg-slate-100 font-extrabold text-base px-8 py-4 rounded-full shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                >
                  <span>Iniciar Proceso de Arrendamiento</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </div>

          {/* Lado Derecho: Mockup visual de Equipamiento */}
          <div className="lg:col-span-4 flex justify-center items-center relative mt-6 lg:mt-0">
            

            <div className="relative w-full max-w-md lg:max-w-xl xl:max-w-2xl flex items-center justify-center">

              {/* Resplandor azul detrás */}
              <div className="absolute w-[80%] h-[80%] rounded-full bg-cyan-300/30 blur-3xl"></div>
                    
              {/* Imagen */}
              <img
                src={PCsRight}
                alt="Equipos de cómputo"
                className="relative z-10 w-full h-auto object-contain opacity-95 hover:scale-105 transition-all duration-500"
              />
            
            </div>
              
             

            
          </div>

        </div>
      </div>

    </section>
  );
}