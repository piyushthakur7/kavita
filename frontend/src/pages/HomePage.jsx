import React from 'react';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Stats from '../components/Stats';
import Blog from '../components/Blog';
import ContactCTA from '../components/Contact';

const HomePage = ({ onBookClick }) => (
  <>
    <Hero />
    <FeatureCards />
    <About onBookClick={onBookClick} />
    <Services />
    <Testimonials />
    <FAQ />
    <Stats />
    <Blog limit={3} />
    <ContactCTA />
  </>
);

export default HomePage;
