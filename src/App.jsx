import React, { useEffect } from 'react';
import lenis from './lenis';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PlansSection } from './components/PlansSection';
import { EbookSection } from './components/EbookSection';
import { SubscriptionSection } from './components/SubscriptionSection';
import { Footer } from './components/Footer';
import './styles/styles.css';

const App = () => {
  useEffect(() => {
    lenis.start();

    return () => {
      lenis.stop();
    };
  }, []);
  return (
    <div className="text-darkAccent font-sans w-11/12 mx-auto lg:w-full">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PlansSection />
      <EbookSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default App;

