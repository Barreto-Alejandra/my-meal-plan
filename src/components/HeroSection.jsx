import React, { useEffect } from 'react';
import { fadeInUp } from '../animations';

export const HeroSection = () => {
  useEffect(() => {
    fadeInUp('.hero-title');
    fadeInUp('.hero-subtitle', 0.5);
  }, []);

  const backgroundImage = 'url(/images/hero.jpg)';

  return (
    <section
      className="relative text-center text-darkAccent font-sans flex items-center justify-center h-[50vh] min-h-[450px] lg:min-h-[600px] xl:min-h-[700px]"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundImage
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="bg-white relative z-10 flex flex-col items-center justify-center w-11/12 lg:w-[500px] px-4 py-6 lg:py-8">
        <h1 className="text-5xl font-bold mb-4 text-primary font-serif hero-title lg:text-6xl leading-none">Customized <br /> Meal Plans</h1>
        <p className="text-md text-text hero-subtitle lg:mt-3">for a happier, healthier life</p>
      </div>
    </section>
  );
};
