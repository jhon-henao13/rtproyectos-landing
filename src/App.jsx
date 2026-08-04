import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
import Gracias from './components/Gracias';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-transparent font-sans antialiased selection:bg-brand-primary selection:text-white">
      <Navbar onOpenModal={openModal} />
      <main className="relative min-h-screen">
        <Hero onOpenModal={openModal} />
        <Stats />
        <GridGallery />
        <LeasingCalculator />
        <div id="catalogo">
          <EquipmentCatalog onOpenModal={openModal} />
        </div>
        <div id="beneficios">
          <ComparisonTable />
        </div>
        <div id="cobertura">
          <SectorSolutions onOpenModal={openModal} />
        </div>
        <div id="faq">
          <ZeroParosOperativos onOpenModal={openModal} />
        </div>
        <TestimonialsCTA onOpenModal={openModal} />
        <FloatingWhatsApp />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default function App() {
  const location = useLocation();

  // Si la URL es /gracias, mostrar el componente de gracias
  if (location.pathname === '/gracias') {
    return <Gracias />;
  }

  // En cualquier otra ruta, mostrar la landing page
  return <HomePage />;
}