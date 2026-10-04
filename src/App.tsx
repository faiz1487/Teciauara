import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { FloatingContactWidget } from './components/common/FloatingContactWidget';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Demo SaaS Template
import Demo from '@/components/ui/demo';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Fullscreen standalone route for the SaaS Template Demo */}
        <Route path="/demo" element={<Demo />} />
        <Route path="/saas-template" element={<Demo />} />

        {/* Corporate Website Layout (Dark Theme) */}
        <Route
          path="*"
          element={
            <div className="flex flex-col min-h-screen bg-[#050B17] text-slate-300 selection:bg-brand-electricBlue selection:text-white">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/insights" element={<InsightsPage />} />
                  {/* Alias /blog to /insights */}
                  <Route path="/blog" element={<Navigate to="/insights" replace />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  {/* Catch-all 404 */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
              <FloatingContactWidget />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

