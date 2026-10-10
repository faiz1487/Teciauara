import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { FloatingContactWidget } from './components/common/FloatingContactWidget';
import { RouteLoadingFallback } from './components/common/RouteLoadingFallback';

// Primary Landing (Eagerly loaded for instant First Contentful Paint)
import { HomePage } from './pages/HomePage';

// Lazy-loaded secondary routes (Code-split on demand)
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then(m => ({ default: m.PortfolioPage })));
const InsightsPage = lazy(() => import('./pages/InsightsPage').then(m => ({ default: m.InsightsPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Standalone Demo SaaS Template (Lazy loaded)
const Demo = lazy(() => import('@/components/ui/demo'));

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Standalone route for the SaaS Template Demo */}
        <Route 
          path="/demo" 
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <Demo />
            </Suspense>
          } 
        />
        <Route 
          path="/saas-template" 
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <Demo />
            </Suspense>
          } 
        />

        {/* Corporate Website Layout (Dark Theme) */}
        <Route
          path="*"
          element={
            <div className="flex flex-col min-h-screen bg-[#050B17] text-slate-300 selection:bg-brand-electricBlue selection:text-white">
              {/* Accessible Skip to Content Link (WCAG 2.1 AA) */}
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-electricBlue focus:text-white focus:rounded-xl focus:shadow-glow-blue focus:font-bold focus:outline-none focus:ring-2 focus:ring-brand-cyanAccent"
              >
                Skip to main content
              </a>
              <Navbar />
              <main id="main-content" className="flex-grow">
                <Suspense fallback={<RouteLoadingFallback />}>
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
                </Suspense>
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
