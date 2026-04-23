import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AmbientLight from './components/AmbientLight';

import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import PortfolioPage from './pages/PortfolioPage';
import Learning from './pages/Learning';
import Hiring from './pages/Hiring';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <AmbientLight />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
