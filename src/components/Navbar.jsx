import React, { useState, useEffect } from 'react';
import { fadeInUp } from '../animations';
import Lenis from 'lenis';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    fadeInUp('.nav-item', 0, 0.2);

    const lenisInstance = new Lenis({
      duration: 1.2, // Duración del desplazamiento
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Función de easing para un desplazamiento suave
    });

    setLenis(lenisInstance);

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement && lenis) {
      lenis.scrollTo(targetElement, {
        offset: -100, // Ajustar 100px antes
      });
    }
    closeMenu();
  };

  return (
    <nav className="w-full bg-secondary sticky top-0 z-50 shadow-bottom lg:px-5 xl:px-0">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-4 py-4 text-darkAccent font-sans lg:px-0">
        <div className="text-2xl font-bold text-primary font-serif lg:text-3xl">Lorem & Ipsum</div>
        <button className="lg:hidden text-darkAccent z-50" onClick={toggleMenu}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <ul className={`lg:flex ${isOpen ? 'fixed inset-0 flex flex-col items-center justify-center bg-secondary z-40' : 'hidden'} lg:block lg:static`}>
          <li className="my-2 ml-0 lg:my-0 lg:ml-6">
            <a
              href="#about"
              className="text-text hover:text-primary nav-item text-xl lg:text-1xl"
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              About
            </a>
          </li>
          <li className="my-2 ml-0 lg:my-0 lg:ml-6">
            <a
              href="#services"
              className="text-text hover:text-primary nav-item text-xl lg:text-1xl"
              onClick={(e) => handleSmoothScroll(e, '#services')}
            >
              Services
            </a>
          </li>
          <li className="my-2 ml-0 lg:my-0 lg:ml-6">
            <a
              href="#ebooks"
              className="text-text hover:text-primary nav-item text-xl lg:text-1xl"
              onClick={(e) => handleSmoothScroll(e, '#ebook')}
            >
              E-book
            </a>
          </li>
          <li className="my-2 ml-0 lg:my-0 lg:ml-6">
            <a
              href="#contact"
              className="text-text hover:text-primary nav-item text-xl lg:text-1xl"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
