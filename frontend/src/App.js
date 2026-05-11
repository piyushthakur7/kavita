import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { AppointmentModal } from './components/Contact';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CorporatePage from './pages/CorporatePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('kk_modal_seen');
    if (seen) return;
    const t = setTimeout(() => {
      setModalOpen(true);
      sessionStorage.setItem('kk_modal_seen', '1');
    }, 9000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header onBookClick={openModal} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage onBookClick={openModal} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage onBookClick={openModal} />} />
            <Route path="/services/:id" element={<ServiceDetailPage onBookClick={openModal} />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/corporate-wellness" element={<CorporatePage onBookClick={openModal} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <AppointmentModal open={modalOpen} onClose={closeModal} />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
