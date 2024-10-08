import React, { useEffect } from 'react';
import { fadeInUp } from '../animations';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export const AboutSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      fadeInUp('.about-item', 0.7, 0.2);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      id="about"
      className="my-20 px-2 lg:px-0 w-full lg:w-[90%] 2xl:w-[1300px] mx-auto text-darkAccent font-sans"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center about-item text-center md:text-left">
        <div className="order-1 md:order-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-serif about-title">About Us</h2>
          <p className="text-text text-lg md:text-xl mb-4 lg:w-[90%] about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            Cras venenatis euismod malesuada. Nullam ac erat ante.
          </p>
          <p className="text-text text-lg md:text-xl lg:w-[90%] about-content">
            Suspendisse potenti. Fusce vehicula dapibus velit, non fringilla metus tincidunt eget. Curabitur non magna 
            euismod, feugiat eros sit amet, suscipit nunc lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="order-3 md:order-2">
          <img src="/images/about.jpg" alt="About Us" className="w-full h-250 lg:h-500 object-cover about-item" />
        </div>
      </div>
    </section>
  );
};

