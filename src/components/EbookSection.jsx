import React, { useEffect } from 'react';
import { fadeInUp } from '../animations';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export const EbookSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      fadeInUp('.ebook-item', 0.5, 0.2); // Ajustar delay a 0.5 segundos
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      id="ebook"
      className="my-20 px-10 lg:px-0 w-full lg:w-[90%] 2xl:w-[1200px] mx-auto text-darkAccent font-sans lg:my-15"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-serif text-center leading-none ebook-item">Download Our Free Ebook</h2>
      <p className="text-lg text-center mb-8 text-text md:text-xl ebook-item">Learn everything you need to know about healthy meal planning. Get your free copy now!</p>
      <div className="flex justify-center ebook-item">
        <a 
          href="" 
          className="bg-darkAccent text-secondary py-2 px-4 rounded hover:bg-primary transition duration-300 w-fit"
          download
        >
          Download Ebook
        </a>
      </div>
    </section>
  );
};
