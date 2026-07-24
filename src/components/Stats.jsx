import React from 'react';
import { Smile, CreditCard, CalendarDays, ShieldCheck } from 'lucide-react';

export default function Stats() {
  const statItems = [
    { 
      icon: <Smile size={24} className="text-rose-400" strokeWidth={1.5} />, 
      text: "500,000+ customers" 
    },
    { 
      icon: <CreditCard size={24} className="text-blue-400" strokeWidth={1.5} />, 
      text: "Low monthly costs" 
    },
    { 
      icon: <CalendarDays size={24} className="text-rose-400" strokeWidth={1.5} />, 
      text: "Rent from 1 to 24+ months" 
    },
    { 
      icon: <ShieldCheck size={24} className="text-rose-400" strokeWidth={1.5} />, 
      text: "Grover Care available" 
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