import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Sparkles, ShieldCheck, HelpCircle } from 'lucide-react';
import logoAsset from '../assets/logopng.png';

const comparisonData = [
  {
    criterion: "Impacto Fiscal",
    rt: "100% Deducible (OpEx) inmediato",
    traditional: "Depreciación lenta a varios años",
    integrators: "Deducible, pero gasto inflado",
  },
  {
    criterion: "Flujo de Caja",
    rt: "Rentas fijas desde $1,500/mes",
    traditional: "Desembolso inicial del 100%",
    integrators: "Pagas por equipos sobrantes",
  },
  {
    criterion: "Configuración",
    rt: "Traje a la medida por área",
    traditional: "Limitado a presupuesto inicial",
    integrators: "Paquetes cerrados genéricos",
  },
  {
    criterion: "SLA y Soporte",
    rt: "Atención/Sustitución en 24-48h",
    traditional: "Garantías lentas y costo extra",
    integrators: "Soporte burocrático lento",
  },
  {
    criterion: "Renovación",
    rt: "Garantizada (12, 24, 36 meses)",
    traditional: "Absorbes obsolescencia total",
    integrators: "Contratos inflexibles",
  },
  {
    criterion: "Flexibilidad",
    rt: "Arrendamiento (Mín. 5) y Venta",
    traditional: "Solo compra de contado",
    integrators: "Contratos rígidos únicamente",
  },
  {
    criterion: "Marcas",
    rt: "Dell, Lenovo, HP, Asus",
    traditional: "Sujeto a stock disponible",
    integrators: "Fijas por paquete",
  },
];

export default function ComparisonTable() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-slate-50 relative overflow-hidden">
      
      {/* Fondo decorativo con resplandor sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-primary bg-blue-100/80 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block"
          >
            Comparativa de Valor
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight"
          >
            Más claro, imposible
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg"
          >
            Descubre por qué nuestro esquema de arrendamiento supera a la compra tradicional y a las integradoras masivas.
          </motion.p>
        </div>

        {/* Contenedor de la Tabla (Responsive Scroll) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto pb-6"
        >
          <div className="min-w-[320px] sm:min-w-[620px] lg:min-w-full grid grid-cols-12 gap-0 items-stretch bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
            
            {/* ENCABEZADOS DE COLUMNA */}
            
            {/* Columna 1: Criterio */}
            <div className="col-span-3 bg-slate-900 text-white p-2 sm:p-6 flex items-end font-bold text-[10px] sm:text-sm uppercase tracking-wide rounded-tl-xl">
              <span>Criterio</span>
            </div>

            {/* Columna 2: RT PROYECTOS (DESTACADA) */}
            <div className="col-span-3 bg-gradient-to-b from-blue-50/90 via-blue-50/50 to-white p-2 sm:p-4 relative flex flex-col justify-between border-x-2 border-t-2 border-brand-primary shadow-md">

              <div className="text-center sm:text-left">
                <div className="flex items-center space-x-2 justify-center">

                    <img 
                      src={logoAsset} 
                      alt="RT Proyectos Logo" 
                      className="h-10 sm:h-20 w-auto object-contain"
                    />

                </div>
                <p className="text-[9px] sm:text-sm font-semibold text-brand-primary mt-0.5 text-center leading-tight">Solución Integral Flexible</p>
              </div>
            </div>

            {/* Columna 3: Compra Tradicional */}
            <div className="col-span-3 bg-slate-100/80 p-2 sm:p-4 flex flex-col justify-end border-r border-slate-200 text-center sm:text-left">
              <span className="text-[11px] sm:text-base font-bold text-slate-700 leading-tight">Compra Tradicional</span>
              <span className="text-[9px] sm:text-sm text-slate-400 font-medium leading-tight">Adquisición directa</span>
            </div>

            {/* Columna 4: Integradoras Masivas */}
            <div className="col-span-3 bg-slate-100/80 p-2 sm:p-4 flex flex-col justify-end text-center sm:text-left rounded-tr-3xl">
              <span className="text-[11px] sm:text-base font-bold text-slate-700 leading-tight">Integradoras Masivas</span>
              <span className="text-[9px] sm:text-sm text-slate-400 font-medium leading-tight">Paquetes Rígidos</span>
            </div>

            {/* FILAS DE DATOS */}
            {comparisonData.map((row, idx) => {
              const isEven = idx % 2 === 0;
              const isLast = idx === comparisonData.length - 1;

              return (
                <React.Fragment key={idx}>
                  {/* Criterio */}
                  <div
                    className={`col-span-3 p-1.5 sm:p-5 flex items-center font-bold text-slate-800 text-[10px] sm:text-sm border-t border-slate-200/80 ${
                      isEven ? 'bg-slate-50/50' : 'bg-white'
                    } ${isLast ? 'rounded-bl-3xl' : ''}`}
                  >
                    <span>{row.criterion}</span>
                  </div>

                  {/* Celda RT Proyectos (Destacada) */}
                  <div
                    className={`col-span-3 p-1.5 sm:p-5 flex items-start space-x-2.5 border-t border-x-2 border-brand-primary/20 bg-blue-50/30 ${
                      isLast ? 'border-b-2 border-brand-primary rounded-bb-2xl' : ''
                    }`}
                  >
                    <CheckCircle2 size={14} className="sm:w-[18px] sm:h-[18px] text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-sm font-extrabold text-brand-navy leading-snug">
                      {row.rt}
                    </span>
                  </div>

                  {/* Celda Compra Tradicional */}
                  <div
                    className={`col-span-3 p-1.5 sm:p-5 flex items-start space-x-2 border-t border-r border-slate-200/80 ${
                      isEven ? 'bg-slate-50/30' : 'bg-white'
                    }`}
                  >
                    <XCircle size={13} className="sm:w-[16px] sm:h-[16px] text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-sm font-medium text-slate-500 leading-snug">
                      {row.traditional}
                    </span>
                  </div>

                  {/* Celda Integradoras Masivas */}
                  <div
                    className={`col-span-3 p-1.5 sm:p-55 flex items-start space-x-2 border-t border-slate-200/80 ${
                      isEven ? 'bg-slate-50/30' : 'bg-white'
                    } ${isLast ? 'rounded-br-3xl' : ''}`}
                  >
                    <XCircle size={13} className="sm:w-[16px] sm:h-[16px] text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-sm font-medium text-slate-500 leading-snug">
                      {row.integrators}
                    </span>
                  </div>
                </React.Fragment>
              );
            })}

          </div>
        </motion.div>

        {/* Pie informativo sutil */}
        <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-slate-400 font-medium text-center">
          <ShieldCheck size={16} className="text-brand-primary" />
          <span>Todos los planes de RT Proyectos incluyen soporte prioritario y reemplazo garantizado.</span>
        </div>

      </div>
    </section>
  );
}