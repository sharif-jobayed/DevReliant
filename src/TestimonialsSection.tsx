import React from 'react';
import { repo } from '../../data/repository';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-testimonials">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-sublabel">Testimonials</h2>
          <h3 className="section-title">Client Success Stories</h3>
        </div>
        <div className="testimonials-grid">
          {repo.getTestimonials().map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-quote">"{testimonial.content}"</p>
              <div>
                <div className="testimonial-author">{testimonial.author}</div>
                <div className="testimonial-role">
                  {testimonial.role}, <span className="testimonial-company">{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};