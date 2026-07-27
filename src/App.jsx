import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import GridGallery from './components/GridGallery';
import LeasingCalculator from './components/LeasingCalculator';
import EquipmentCatalog from './components/EquipmentCatalog';
import ComparisonTable from './components/ComparisonTable';
import SectorSolutions from './components/SectorSolutions';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent font-sans antialiased selection:bg-brand-primary selection:text-white">
      {/* Cabecera de Navegación Fija */}
      <Navbar />
      
      {/* Cuerpo Principal */}
      <main className="relative min-h-screen">
        <Navbar />
        <Hero />
        <Stats />
        <GridGallery />
        <LeasingCalculator />
        <EquipmentCatalog />
        <ComparisonTable />
        <SectorSolutions />
        {/* Botón WhatsApp Global */}
        <FloatingWhatsApp />
      </main>
      
      {/* El resto de tus secciones futuras irán aquí abajo */}
    </div>
  );
}
