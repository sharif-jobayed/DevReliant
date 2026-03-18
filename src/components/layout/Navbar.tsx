import "../../index.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Services', to: '/#services' },
    { name: 'Portfolio', to: '/#portfolio' },
    { name: 'Testimonials', to: '/#testimonials' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand group">
            <div className="navbar-logo-bg">
              <Code2 className="h-6 w-6 text-dev-lightest" />
            </div>
            <span className="font-bold text-xl tracking-tight">DevReliant</span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <Link key={link.name} to={link.to} className="navbar-link">
                  {link.name}
                </Link>
              ))}
              <Link to="/#contact" className="btn-cta">
                Start Project
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="btn-mobile-menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link key={link.name} to={link.to} onClick={() => setIsOpen(false)} className="mobile-link">
                {link.name}
              </Link>
            ))}
            <Link to="/#contact" onClick={() => setIsOpen(false)} className="mobile-cta">
              Start Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};