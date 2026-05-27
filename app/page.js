"use client";
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Stats from '@/components/Stats';
import Blog from '@/components/Blog';
import ContactCTA from '@/components/Contact';

export default function Home() {
  // We need to pass onBookClick if the component requires it.
  // In Next.js, we can use a Context or pass it down from Layout if possible.
  // But for now, I'll check if these components actually use it.
  
  return (
    <>
      <Hero />
      <FeatureCards />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Stats />
      <Blog limit={3} />
      <ContactCTA />
    </>
  );
}
