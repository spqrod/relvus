import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Projects from './pages/Projects';
import TermsOfService from './pages/TermsOfService';
import './styles/global.css';

function PageTransition({ setIsModalOpen }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fade-in');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fade-out');
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'fade-out') {
      window.scrollTo(0, 0);
      setTransitionStage('fade-in');
      setDisplayLocation(location);
    }
  };

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home setIsModalOpen={setIsModalOpen} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <Header isHidden={isModalOpen} />
      <main>
        <PageTransition setIsModalOpen={setIsModalOpen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
