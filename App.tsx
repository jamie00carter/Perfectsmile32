
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustIndicators } from './components/TrustIndicators';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { AboutDoctor } from './components/AboutDoctor';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AppointmentCTA } from './components/AppointmentCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <TrustIndicators />
        <Services />
        <Reviews />
        <AboutDoctor />
        <WhyChooseUs />
        <AppointmentCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
