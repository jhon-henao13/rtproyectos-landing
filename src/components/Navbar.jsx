import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
// IMPORTA TU LOGO AQUÍ
import logoAsset from '../assets/logopng.png';

export default function Navbar({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Cobertura (SLA\'s)', href: '#cobertura' },
    { name: 'FAQ', href: '#faq' }
  ];

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 96; // Altura exacta del navbar (h-24 = 96px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* LOGO (Usa la imagen asset) */}
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src={logoAsset} 
            alt="RT Proyectos Logo" 
            className="h-20 w-auto object-contain" 
          />
        </div>

        {/* DESKTOP LINKS (Fuentes más ligeras y espaciado exacto) */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-slate-800 hover:text-brand-primary text-base font-medium transition-colors duration-300 relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <button onClick={onOpenModal} className="bg-brand-primary hover:bg-brand-accent text-white px-9 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-blue-600/10 hover:shadow-blue-600/25 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            Cotizar Ahora
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden h-12 w-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-brand-navy active:scale-95 transition-all duration-300"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-slate-100 px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="block text-slate-800 hover:text-brand-primary font-medium text-base py-3 border-b border-slate-50 last:border-0 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button onClick={() => { setIsOpen(false); onOpenModal(); }} className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold shadow-lg mt-4 cursor-pointer">
            Cotizar Ahora
          </button>
        </div>
      )}
    </nav>
  );
}