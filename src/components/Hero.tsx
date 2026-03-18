import "../index.css";
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Background decoration */}
      <div className="hero-blob-primary"></div>
      <div className="hero-blob-light"></div>

      <div className="hero-container">
        <div className="hero-text-container">
          <h1 className="hero-title">
            We Build <span className="text-dev-lightest">Resilient Software</span> <br />
            For Ambitious Companies.
          </h1>
          <p className="hero-desc">
            From MVP launchpads to complex legacy modernization. We provide the architectural expertise and engineering power to scale your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#services" className="btn-hero-primary">
              Our Expertise <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/#portfolio" className="btn-hero-outline">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};