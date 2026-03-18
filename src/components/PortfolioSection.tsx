import "../index.css";
import React from 'react';
import { repo } from '../data/repository';

export const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="section-portfolio">
      <div className="section-container">
        <div className="portfolio-header">
          <div>
            <h2 className="portfolio-sublabel">Portfolio</h2>
            <h3 className="portfolio-title">Featured Projects</h3>
          </div>
        </div>
        <div className="portfolio-grid">
          {repo.getProjects().map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="p-8">
                <div className="project-industry">{project.clientIndustry}</div>
                <h4 className="project-name">{project.name}</h4>
                <p className="project-summary">{project.summary}</p>
                <div className="project-outcome-box">
                  <div className="project-outcome-label">Outcome:</div>
                  <p className="project-outcome-text">"{project.outcome}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};