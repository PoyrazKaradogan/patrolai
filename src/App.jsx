import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import HeroSection from './components/HeroSection';
import NeonHero from './components/NeonHero';
import Footer from './components/Footer';
import Quote from './pages/Quote';
import ServicesContent from './pages/ServicesContent';
import Corporate from './pages/Corporate';

function App() {
  return (
    <LanguageProvider>
    
      <Router>
        <ResponsiveNavbar />

        <Routes>
          {/* Anasayfa */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <NeonHero />
                <div id="features" style={{ padding: '4rem 0' }}>
                  {/* Özellikler bölümü */}
                </div>
                <ServicesContent />
              </>
            }
          />

          {/* Sayfalar */}
          <Route path="/iletisim" element={<Quote />} />
      
          <Route path="/kurumsal" element={<Corporate />} />
        </Routes>

        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;