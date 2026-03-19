import "../index.css";
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollToHashElement } from '../components/utils/ScrollToHashElement';
import { Navbar } from '../components/layout/Navbar';
import { ContactFooter } from '../components/layout/ContactFooter';
import { ScrollToTop } from '../components/ui/ScrollToTop';

export const Layout: React.FC = () => (
  <div className="layout-wrapper">
    <ScrollToHashElement />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <ContactFooter />
    <ScrollToTop />
  </div>
);