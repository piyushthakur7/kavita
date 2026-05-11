"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppointmentModal } from '@/components/Contact';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('kk_modal_seen');
    if (!seen) {
      const t = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem('kk_modal_seen', '1');
      }, 9000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AppointmentModal open={isModalOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
