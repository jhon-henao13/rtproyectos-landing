import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import GridGallery from './components/GridGallery';
import LeasingCalculator from './components/LeasingCalculator';
import EquipmentCatalog from './components/EquipmentCatalog';
import ComparisonTable from './components/ComparisonTable';
import SectorSolutions from './components/SectorSolutions';
import ZeroParosOperativos from './components/ZeroParosOperativos';
import TestimonialsCTA from './components/TestimonialsCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-transparent font-sans antialiased selection:bg-brand-primary selection:text-white">
      {/* Cabecera de Navegación Fija */}
      <Navbar onOpenModal={openModal} />
      
      {/* Cuerpo Principal */}
      <main className="relative min-h-screen">
        <Hero onOpenModal={openModal} />
        <Stats />
        <GridGallery />
        <LeasingCalculator />
        
        {/* Agrega id="catalogo" aquí */}
        <div id="catalogo">
          <EquipmentCatalog onOpenModal={openModal} />
        </div>

        {/* Agrega id="beneficios" aquí */}
        <div id="beneficios">
          <ComparisonTable />
        </div>

        {/* Agrega id="cobertura" aquí */}
        <div id="cobertura">
          <SectorSolutions onOpenModal={openModal} />
        </div>

        {/* Agrega id="faq" aquí */}
        <div id="faq">
          <ZeroParosOperativos onOpenModal={openModal} />
        </div>

        <TestimonialsCTA onOpenModal={openModal} />
        
        {/* Botón WhatsApp Global */}
        <FloatingWhatsApp />
      </main>

      {/* Footer Final */}
      <Footer />

      {/* Modal Global de Cotización / Agendamiento */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}