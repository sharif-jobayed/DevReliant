
import React from 'react';
import { repo } from '../data/repository';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-services">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-sublabel">Services</h2>
          <h3 className="section-title">Engineering Solutions</h3>
        </div>
        <div className="services-grid">
          {repo.getServices().map((service) => (
            <div key={service.id} className="service-card group">
              <div className="service-icon">
                {service.icon}
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-desc">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};