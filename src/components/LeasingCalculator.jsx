import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, CheckCircle2, DollarSign, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

// Matriz de tarifas base por equipo según la tabla oficial (antes de IVA)
const RATES_MATRIX = {
  10000: { 6: 1436, 12: 1238, 24: 1089, 36: 990 },
  15000: { 6: 1856, 12: 1600, 24: 1408, 36: 1280 },
  20000: { 6: 2262, 12: 1950, 24: 1716, 36: 1560 },
  25000: { 6: 2683, 12: 2313, 24: 2035, 36: 1850 },
  30000: { 6: 3089, 12: 2663, 24: 2343, 36: 2130 },
  40000: { 6: 3915, 12: 3375, 24: 2970, 36: 2700 },
  50000: { 6: 4756, 12: 4100, 24: 3608, 36: 3280 },
  60000: { 6: 5583, 12: 4813, 24: 4235, 36: 3850 },
  80000: { 6: 7236, 12: 6238, 24: 5489, 36: 4990 },
};

const PRICE_OPTIONS = [10000, 15000, 20000, 25000, 30000, 40000, 50000, 60000, 80000];
const TERM_OPTIONS = [6, 12, 24, 36];

export default function LeasingCalculator() {
  // Estados de entrada
  const [numEquipamiento, setNumEquipamiento] = useState(20);
  const [precioEquipo, setPrecioEquipo] = useState(20000);
  const [plazoMeses, setPlazoMeses] = useState(36);
  const [calculated, setCalculated] = useState(false);

  // Formateador de moneda MXN
  const formatMoney = (amount) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Cálculo en tiempo real de los indicadores financieros y fiscales
  const results = useMemo(() => {
    const unitRate = RATES_MATRIX[precioEquipo]?.[plazoMeses] || (precioEquipo * 0.08);
    
    const compraTotal = numEquipamiento * precioEquipo;
    const rentaMensualSubtotal = numEquipamiento * unitRate;
    const ivaMensual = rentaMensualSubtotal * 0.16;
    const pagoMensualTotal = rentaMensualSubtotal + ivaMensual;
    
    // Cálculos Fiscales
    const deduccionAnualArrendamiento = rentaMensualSubtotal * 12;
    const beneficioIsrArrendamiento = deduccionAnualArrendamiento * 0.30;
    
    const deduccionAnualCompra = compraTotal * 0.30;
    const beneficioIsrCompra = deduccionAnualCompra * 0.30;
    
    const diferenciaBeneficio = beneficioIsrArrendamiento - beneficioIsrCompra;

    return {
      compraTotal,
      rentaMensualSubtotal,
      ivaMensual,
      pagoMensualTotal,
      deduccionAnualArrendamiento,
      beneficioIsrArrendamiento,
      deduccionAnualCompra,
      beneficioIsrCompra,
      diferenciaBeneficio,
    };
  }, [numEquipamiento, precioEquipo, plazoMeses]);

  const handleSimulate = (e) => {
    e.preventDefault();
    setCalculated(true);
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-gradient-to-b from-[#1D4ED8] via-[#1E40AF] to-[#0F172A] relative overflow-hidden text-white">
      
      {/* Luz ambiental de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-400/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Encabezado Principal */}
        <div className="text-center space-y-4 mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-md"
          >
            Simulador de arrendamiento
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Calcula tu Renta Mensual y Descubre tu Ahorro Fiscal
          </motion.p>
        </div>

        {/* Tarjeta de Formulario (Contenedor Blanco / Glassmorphism) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/95 backdrop-blur-xl rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/30 text-slate-900"
        >
          <form onSubmit={handleSimulate} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Field 1: Número de Equipos */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  # de Equipos: <span className="text-brand-primary font-extrabold text-base">{numEquipamiento}</span>
                </label>
                <div className="relative flex items-center">
                  <input 
                    type="range" 
                    min="5" 
                    max="100" 
                    step="1"
                    value={numEquipamiento}
                    onChange={(e) => {
                      setNumEquipamiento(Number(e.target.value));
                      setCalculated(true);
                    }}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                  />
                </div>
                <div className="flex justify-between text-xs font-semibold text-slate-400 pt-1">
                  <span>5 equipos</span>
                  <span>100 equipos</span>
                </div>
              </div>

              {/* Field 2: Precio del Equipo */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Precio unitario estimado
                </label>
                <select
                  value={precioEquipo}
                  onChange={(e) => {
                    setPrecioEquipo(Number(e.target.value));
                    setCalculated(true);
                  }}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-slate-800 font-semibold text-base focus:ring-2 focus:ring-brand-primary focus:outline-none transition-all cursor-pointer"
                >
                  {PRICE_OPTIONS.map((price) => (
                    <option key={price} value={price}>
                      {formatMoney(price)} MXN
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 3: Plazo de Arrendamiento */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Plazo de Arrendamiento
                </label>
                <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
                  {TERM_OPTIONS.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => {
                        setPlazoMeses(term);
                        setCalculated(true);
                      }}
                      className={`py-2.5 rounded-lg text-xs font-bold transition-all ${
                        plazoMeses === term
                          ? 'bg-brand-primary text-white shadow-md'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      {term} M
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* BOTÓN DE ACCIÓN PRINCIPAL (En color naranja de alto contraste) */}
            {/* BOTÓN DE ACCIÓN PRINCIPAL (Azul corporativo de alto impacto) */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-lg py-5 px-8 rounded-2xl shadow-xl shadow-blue-600/30 hover:shadow-blue-600/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer"
              >
                <Calculator size={22} className="animate-pulse" />
                <span>Simular Arrendamiento</span>
                <ArrowRight size={22} />
              </button>
            </div>

          </form>

          {/* DESPLIEGUE DE RESULTADOS EN TIEMPO REAL (En la misma página) */}
          <AnimatePresence>
            {calculated && (
              <motion.div 
                initial={{ opacity: 0, height: 0, y: 20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="mt-10 pt-8 border-t border-slate-200 overflow-hidden"
              >
                {/* Destacados Principales */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  
                  {/* Tarjeta 1: Pago Mensual */}
                  <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg border border-slate-800 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 text-slate-800 pointer-events-none">
                      <DollarSign size={80} strokeWidth={1} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                        Pago Mensual Total (Renta + IVA)
                      </span>
                      <div className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                        {formatMoney(results.pagoMensualTotal)} <span className="text-xs font-normal text-slate-400">/ mes</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-blue-400" />
                      <span>Subtotal: {formatMoney(results.rentaMensualSubtotal)} + IVA: {formatMoney(results.ivaMensual)}</span>
                    </div>
                  </div>

                  {/* Tarjeta 2: Beneficio Fiscal */}
                  <div className="bg-gradient-to-br from-emerald-950 to-slate-900 border border-emerald-500/30 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 text-emerald-500/10 pointer-events-none">
                      <TrendingUp size={80} strokeWidth={1} />
                    </div>
                    <div>
                      <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
                        <Sparkles size={14} />
                        <span>Ahorro Fiscal Extra Estimado</span>
                      </span>
                      <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mt-2">
                        +{formatMoney(results.diferenciaBeneficio)}
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-emerald-900/50 text-xs text-emerald-200/80 flex items-center space-x-2">
                      <ShieldCheck size={16} className="text-emerald-400" />
                      <span>Mayor beneficio fiscal directo vs compra tradicional</span>
                    </div>
                  </div>

                </div>

                {/* Desglose Detallado */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4 flex items-center space-x-2">
                    <span>Desglose de la simulación</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                      <span className="text-xs text-slate-500 font-medium block">Inversión Compra Total</span>
                      <span className="text-base font-bold text-slate-800 mt-1 block">{formatMoney(results.compraTotal)}</span>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                      <span className="text-xs text-slate-500 font-medium block">Deducción Anual Arrendamiento</span>
                      <span className="text-base font-bold text-slate-800 mt-1 block">{formatMoney(results.deduccionAnualArrendamiento)}</span>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                      <span className="text-xs text-slate-500 font-medium block">Beneficio ISR Arrendamiento</span>
                      <span className="text-base font-bold text-blue-600 mt-1 block">{formatMoney(results.beneficioIsrArrendamiento)}</span>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                      <span className="text-xs text-slate-500 font-medium block">Beneficio ISR Compra (30%)</span>
                      <span className="text-base font-bold text-slate-600 mt-1 block">{formatMoney(results.beneficioIsrCompra)}</span>
                    </div>
                  </div>
                </div>

                {/* Botón de CTA secundario direct a WhatsApp */}
                <div className="mt-6 text-center">
                  <a
                    href={`https://wa.me/525610981839?text=${encodeURIComponent(
                      `Hola, realicé una simulación en la web para ${numEquipamiento} equipos de ${formatMoney(precioEquipo)} a un plazo de ${plazoMeses} meses. Deseo solicitar una cotización formal.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-accent font-bold text-base hover:underline transition-all"
                  >
                    <span>Solicitar esta propuesta personalizada formalmente</span>
                    <ArrowRight size={18} />
                  </a>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}