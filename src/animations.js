import { gsap } from 'gsap';

// Animación para elementos que aparecen con opacidad y movimiento desde abajo
export const fadeInUp = (element, delay = 0, stagger = 0) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: delay,
    stagger: stagger,
  });
};
