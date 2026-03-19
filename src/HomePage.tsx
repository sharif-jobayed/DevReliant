import React from 'react';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';

export const HomePage: React.FC = () => (
  <>
    <Hero />
    <ServicesSection />
    <PortfolioSection />
    <TestimonialsSection />
  </>
);
