import React, { useEffect } from 'react';
import { fadeInUp } from '../animations';

export const Footer = () => {
  useEffect(() => {
    fadeInUp('.footer-item', 0, 0.2);
  }, []);

  return (
    <footer className="bg-background py-6 text-darkAccent font-sans">
      <div className="container mx-auto text-center">
        <div className="text-lg font-bold mb-4 text-primary font-serif footer-item lg:text-2xl">Follow Us</div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-text hover:text-primary footer-item">Instagram</a>
          <a href="#" className="text-text hover:text-primary footer-item">Facebook</a>
          <a href="#" className="text-text hover:text-primary footer-item">Youtube</a>
        </div>
      </div>
    </footer>
  );
};
