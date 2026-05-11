import React, { useEffect, useState } from 'react';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Stats from './components/Stats';
import Blog from './components/Blog';
import ContactCTA, { AppointmentModal } from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Auto open after 5 seconds, mimicking the original site behavior (only once)
    const seen = sessionStorage.getItem('kk_modal_seen');
    if (seen) return;
    const t = setTimeout(() => {
      setModalOpen(true);
      sessionStorage.setItem('kk_modal_seen', '1');
    }, 7000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="App">
      <Header onBookClick={() => setModalOpen(true)} />
      <main>
        <Hero />
        <FeatureCards />
        <About onBookClick={() => setModalOpen(true)} />
        <Services />
        <Testimonials />
        <FAQ />
        <Stats />
        <Blog />
        <ContactCTA />
      </main>
      <Footer />
      <AppointmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Toaster />
    </div>
  );
}

export default App;
