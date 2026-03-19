import "../index.css";
import React from 'react';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { PortfolioSection } from '../components/PortfolioSection';

export const HomePage: React.FC = () => (
  <>
    <Hero />
    <ServicesSection />
    <PortfolioSection />
  </>
);