import React from 'react';
import { Laptop, Award, ShoppingBag, Building2 } from 'lucide-react';

export default function Stats() {
  const statItems = [
    { 
      icon: <Laptop size={28} className="text-blue-400" strokeWidth={2} />, 
      text: "+500 equipos arrendados activos"
    },
    { 
      icon: <Award size={28} className="text-blue-400" strokeWidth={2} />, 
      text: "+10 años de experiencia"
    },
    { 
      icon: <ShoppingBag size={28} className="text-blue-400" strokeWidth={2} />, 
      text: "+10,000 equipos vendidos"
    },
    { 
      icon: <Building2 size={28} className="text-blue-400" strokeWidth={2} />, 
      text: "+100 empresas"
    }
  ];

  return (
    <div className="w-full bg-white border-y border-slate-100 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 items-center justify-items-center">
        {statItems.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4 text-left w-full max-w-[280px] justify-center md:justify-start">
            <div className="flex-shrink-0 p-3 bg-slate-50/50 rounded-xl border border-slate-100/50">
              {item.icon}
            </div>
            <span className="text-slate-700 font-semibold text-base leading-snug tracking-tight">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}