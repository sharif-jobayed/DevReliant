import "./index.css";
import React from 'react';
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <Code2 className="h-8 w-8 text-dev-light" />
              <span className="font-bold text-2xl">DevReliant</span>
            </div>
            <p className="footer-desc">
              Ready to scale your engineering? Let's discuss your architecture, your code, and your future.
            </p>
            <div className="footer-contacts">
              <div className="contact-item">
                <Mail className="h-5 w-5 text-dev-light" /> <span>hello@devreliant.tech</span>
              </div>
              <div className="contact-item">
                <Phone className="h-5 w-5 text-dev-light" /> <span>+1 (555) 000-0000</span>
              </div>
              <div className="contact-item">
                <MapPin className="h-5 w-5 text-dev-light" /> <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="social-links">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="social-btn">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="text-xl font-bold mb-6">Get in touch</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="form-grid">
                <input type="text" placeholder="Name" className="input-field" />
                <input type="email" placeholder="Email" className="input-field" />
              </div>
              <select className="input-select">
                <option>Interested in...</option>
                <option>MVP Development</option>
                <option>Legacy Modernization</option>
                <option>QA Automation</option>
              </select>
              <textarea rows={4} placeholder="Tell us about your project..." className="input-field"></textarea>
              <button className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} DevReliant. All rights reserved.
        </div>
      </div>
    </footer>
  );
};