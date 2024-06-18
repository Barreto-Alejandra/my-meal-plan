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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center about-item">
        <div className="order-1 md:order-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-serif about-title">About Us</h2>
          <p className="text-text text-lg md:text-xl mb-4 about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            Cras venenatis euismod malesuada. Nullam ac erat ante. Nullam auctor diam in nisi tempor, in pretium nulla
            vestibulum. Donec tincidunt urna sed aliquet ullamcorper. Nulla facilisi. Curabitur feugiat risus vel est 
            scelerisque, in auctor sapien gravida. Praesent a dolor quis purus posuere interdum.
          </p>
          <p className="text-text text-lg md:text-xl about-content">
            Suspendisse potenti. Fusce vehicula dapibus velit, non fringilla metus tincidunt eget. Curabitur non magna 
            euismod, feugiat eros sit amet, suscipit nunc. Aliquam erat volutpat. Nam sed sapien nec enim interdum 
            luctus. Morbi suscipit tincidunt turpis. Integer at felis id nisi varius fermentum.
          </p>
        </div>
        <div className="order-3 md:order-2">
          <img src="/images/about.jpg" alt="About Us" className="w-full h-250 lg:h-500 object-cover about-item" />
        </div>
      </div>
    </section>
  );
};

