import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Truck, 
  ShieldCheck, 
  Headphones, 
  RefreshCw, 
  ArrowRight,
  Sparkles,
  Laptop
} from 'lucide-react';

const slaItems = [
  {
    id: 'entrega',
    badge: '24 - 48 HRS',
    title: 'Entrega e Instalación Relámpago',
    problema: 'Contrataste 10 colaboradores para el lunes y los proveedores tradicionales tardan semanas en entregar e instalar.',
    slaAccion: 'Auditamos tu requerimiento en 15 min y entregamos la flotilla configurada e instalada en tus oficinas (CDMX, EDOMEX, Morelos o Querétaro).',
    linkText: 'Explorar Tiempos de Entrega',
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 w-full space-y-2.5 text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <span className="font-semibold text-slate-700 flex items-center gap-1.5">
            <Truck size={14} className="text-brand-primary" /> Estado del Pedido
          </span>
          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
            EN TIEMPO
          </span>
        </div>
        <div className="space-y-2 pl-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">✓</div>
            <span className="text-slate-600 font-medium">Auditoría (15 min)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">✓</div>
            <span className="text-slate-600 font-medium">Configuración de software</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-brand-primary text-white flex items-center justify-center text-[10px] animate-pulse">●</div>
            <span className="text-brand-navy font-bold">Entrega e Instalación 3-7 días</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'mantenimiento',
    badge: 'SIN COSTO EXTRA',
    title: 'Mantenimiento y Sustitución Incluida',
    problema: 'La laptop de tu líder técnico falla horas antes de entregar un proyecto clave.',
    slaAccion: 'Reportas el incidente y acudimos en 24-48 hrs. Si no se repara en sitio, dejamos un reemplazo equivalente listo para usar sin costo extra.',
    linkText: 'Ver Cobertura de Garantía',
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 w-full flex flex-col justify-center items-center gap-2 text-xs">
        <div className="flex items-center gap-1.5 bg-red-50 border border-red-200 text-red-600 px-3 py-1 rounded-full font-semibold text-[11px] w-full justify-center">
          <AlertTriangle size={13} /> Falla Reportada
        </div>
        <div className="w-0.5 h-3 bg-slate-300" />
        <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-brand-primary px-3 py-1 rounded-full font-semibold text-[11px] w-full justify-center">
          <ShieldCheck size={13} /> Atención en Sitio (24-48h)
        </div>
        <div className="w-0.5 h-3 bg-slate-300" />
        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full font-bold text-[11px] w-full justify-center shadow-xs">
          <CheckCircle2 size={13} /> Reemplazo Listo Sin Costo
        </div>
      </div>
    )
  },

  {
    id: 'soporte',
    badge: 'RESPUESTA 24/7',
    title: 'Soporte Cuando lo Necesitas',
    problema: 'Falla el disco duro, el sistema operativo, hay errores de hardware o fallas internas como memoria a mitad de jornada.',
    slaAccion: 'Nuestro soporte responde de inmediato (remoto o presencial) para diagnosticar y solucionar fallas de sistema, componentes o errores críticos sin detener tu operación.',
    linkText: 'Conocer Canales de Soporte',
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 w-full space-y-3 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs">
                TI
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="font-bold text-brand-navy">Mesa de Ayuda SLA</p>
              <p className="text-[10px] text-emerald-600 font-semibold">Disco, SO, Memoria y Errores</p>
            </div>
          </div>
          <Headphones size={18} className="text-brand-primary" />
        </div>
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[11px] text-slate-600">
          <span className="font-semibold text-brand-navy">Cobertura:</span> Fallas de hardware interno, sistema operativo y errores críticos del equipo.
        </div>
      </div>
    )
  },

  
  {
    id: 'obsolescencia',
    badge: '12, 24 O 36 MESES',
    title: 'Equipos Óptimos (Cero Obsolescencia)',
    problema: 'Equipos comprados de contado se vuelven lentos a los 2 años, alentando el trabajo del personal.',
    slaAccion: 'Al finalizar tu plazo (12, 24 o 36 meses), renovamos tu plantilla con tecnología de última generación sin descapitalizarte.',
    linkText: 'Planes de Renovación',
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 w-full space-y-2 text-xs">
        <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg">
          <div className="flex items-center gap-1.5">
            <Laptop size={14} className="text-slate-400" />
            <span className="text-slate-500 line-through text-[11px]">Equipo 2 Años</span>
          </div>
          <span className="text-[10px] text-red-500 font-medium">Lento / Obsoleto</span>
        </div>
        <div className="flex justify-center my-0.5">
          <RefreshCw size={14} className="text-brand-primary animate-spin" style={{ animationDuration: '6s' }} />
        </div>
        <div className="flex justify-between items-center bg-blue-50/80 p-2 rounded-lg border border-blue-200/60">
          <div className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-brand-primary" />
            <span className="text-brand-navy font-bold text-[11px]">Última Generación</span>
          </div>
          <span className="text-[10px] bg-brand-primary text-white font-bold px-2 py-0.5 rounded-full">
            Renovado
          </span>
        </div>
      </div>
    )
  }
];

export default function ZeroParosOperativos({ onOpenModal }) {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slaItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slaItems.length) % slaItems.length);
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Resplandor decorativo superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight"
          >
            Cero Paros Operativos
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Resolvemos imprevistos de hardware y soporte sin burocracia ni costos ocultos.
          </motion.p>
        </div>

        {/* Carrusel en móvil / Grilla en Desktop */}
        {/* ========================================================= */}
        {/* VISTA MÓVIL: MAZO APILADO TIPO ACORDEÓN 3D DE PROFUNDIDAD */}
        {/* ========================================================= */}
        <div className="block lg:hidden relative h-[530px] w-full max-w-sm mx-auto my-6 px-2">
          {slaItems.map((item, index) => {
            // Calculamos el desfase respecto a la tarjeta activa
            const diff = index - activeIndex;
            const isPast = diff < 0;
          
            // Configuración visual según la posición en la pila
            let scale = 1;
            let translateX = 0;
            let translateY = 0;
            let opacity = 1;
            let zIndex = 40 - index;
          
            if (diff === 0) {
              // Tarjeta Principal al Frente
              scale = 1;
              translateX = 0;
              translateY = 0;
              opacity = 1;
              zIndex = 40;
            } else if (diff === 1) {
              // 1ra Tarjeta Apilada Detrás
              scale = 0.93;
              translateX = 18;
              translateY = 12;
              opacity = 0.88;
              zIndex = 30;
            } else if (diff === 2) {
              // 2da Tarjeta Apilada Detrás
              scale = 0.86;
              translateX = 34;
              translateY = 24;
              opacity = 0.65;
              zIndex = 20;
            } else if (diff >= 3) {
              // 3ra Tarjeta Apilada Detrás
              scale = 0.80;
              translateX = 48;
              translateY = 34;
              opacity = 0.4;
              zIndex = 10;
            } else if (isPast) {
              // Tarjetas ya deslizadas (se ocultan suavemente a la izquierda)
              scale = 0.9;
              translateX = -120;
              translateY = 0;
              opacity = 0;
              zIndex = 0;
            }
          
            return (
              <motion.div
                key={item.id}
                animate={{
                  scale,
                  x: translateX,
                  y: translateY,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 24,
                }}
                onClick={() => setActiveIndex(index)}
                className="absolute inset-x-0 top-0 bg-[#F5F5F1] rounded-[28px] p-6 flex flex-col justify-between border border-slate-300/80 shadow-xl cursor-pointer select-none origin-left"
                style={{
                  boxShadow: diff === 0 ? '0 20px 30px -10px rgba(15, 23, 42, 0.15)' : 'none',
                }}
              >
                <div>
                  {/* Visual Widget Mockup */}
                  <div className="min-h-[130px] flex items-center justify-center mb-4">
                    {item.renderMockup()}
                  </div>
              
                  {/* Badge Superior */}
                  <div className="flex justify-center mb-2">
                    <span className="bg-white text-brand-primary text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-slate-200 shadow-xs">
                      {item.badge}
                    </span>
                  </div>
              
                  {/* Título */}
                  <h3 className="text-lg font-bold text-brand-navy mb-3 leading-snug text-center">
                    {item.title}
                  </h3>
              
                  {/* El Problema */}
                  <div className="mb-3 bg-white/70 p-2.5 rounded-xl border border-slate-200/60">
                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-0.5 flex items-center justify-center gap-1">
                      <AlertTriangle size={12} /> El Problema
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium text-center">
                      {item.problema}
                    </p>
                  </div>
              
                  {/* SLA en Acción */}
                  <div>
                    <p className="text-[10px] font-bold text-brand-primary uppercase tracking-wider mb-0.5 flex items-center justify-center gap-1">
                      <CheckCircle2 size={12} /> SLA en Acción
                    </p>
                    <p className="text-xs text-slate-800 leading-relaxed font-semibold text-center">
                      {item.slaAccion}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Controles táctiles/puntos e indicador de navegación para Móvil */}
        <div className="flex lg:hidden flex-col items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs text-slate-700 font-bold flex items-center justify-center hover:bg-slate-50 active:scale-95 transition-all"
              aria-label="Anterior"
            >
              ←
            </button>
            <div className="flex gap-1.5 px-2">
              {slaItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-6 bg-brand-primary' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Ir a tarjeta ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs text-slate-700 font-bold flex items-center justify-center hover:bg-slate-50 active:scale-95 transition-all"
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
          <span className="text-[11px] font-medium text-slate-400">
            Toca o usa las flechas para explorar ({activeIndex + 1} de {slaItems.length})
          </span>
        </div>
            
        {/* ========================================================= */}
        {/* VISTA DESKTOP: GRILLA CONTINUA DE 4 COLUMNAS (Sigue intacta)*/}
        {/* ========================================================= */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 pt-2">
          {slaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#F5F5F1] hover:bg-[#EDEDE7] transition-colors duration-300 rounded-[28px] p-6 flex flex-col justify-between border border-slate-200/70 shadow-xs hover:shadow-md group"
            >
              <div>
                <div className="min-h-[140px] flex items-center justify-center mb-6">
                  {item.renderMockup()}
                </div>
          
                <div className="flex justify-center mb-3">
                  <span className="bg-white text-brand-primary text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-slate-200 shadow-xs">
                    {item.badge}
                  </span>
                </div>
          
                <h3 className="text-lg font-bold text-brand-navy mb-4 leading-snug group-hover:text-brand-primary transition-colors text-center">
                  {item.title}
                </h3>
          
                <div className="mb-4 bg-white/60 p-3 rounded-xl border border-slate-200/50">
                  <p className="text-[11px] font-bold text-red-500 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                    <AlertTriangle size={12} /> El Problema
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium text-center">
                    {item.problema}
                  </p>
                </div>
          
                <div className="mb-1">
                  <p className="text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                    <CheckCircle2 size={12} /> SLA en Acción
                  </p>
                  <p className="text-xs text-slate-800 leading-relaxed font-semibold text-center">
                    {item.slaAccion}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón Principal CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 sm:mt-14 text-center"
        >
          <button
              type="button"
              onClick={onOpenModal}
              className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-accent text-white font-extrabold text-base px-10 py-4 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer min-w-[200px]"
            >
              <span>Cotizar Ahora</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}