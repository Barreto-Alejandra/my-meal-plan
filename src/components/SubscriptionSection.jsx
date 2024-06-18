import React, { useEffect } from 'react';
import { fadeInUp } from '../animations';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export const SubscriptionSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      fadeInUp('.subscription-title', 0.5);
      fadeInUp('.subscription-form', 1, 0.5);
      fadeInUp('.subscription-image', 1, 0.5);
    }
  }, [isVisible]);

  return (
    <section 
      ref={ref}
      id="contact" 
      className="my-10 mb-20 text-darkAccent font-sans w-full lg:w-[90%] 2xl:w-[1200px] lg:mx-auto lg:my-15"
    >
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1 subscription-image">
          <img src="/images/cheese.jpg" alt="cheese image" className="w-full h-auto object-cover" />
        </div>
        <div className="text-center md:text-left order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-serif subscription-title">Don't Miss a Thing</h2>
          <p className="text-text mb-4 subscription-title">Join the healthy fam</p>
          <form className="space-y-4 subscription-form flex flex-col mx-auto w-full lg:w-3/4 lg:ml-0">
            <input type="text" placeholder="First Name" className="border border-text p-2 w-full" />
            <input type="email" placeholder="Email Address" className="border border-text p-2 w-full" />
            <button className="bg-darkAccent text-secondary py-2 px-4 rounded hover:bg-primary transition duration-300 w-fit mx-auto lg:mx-0">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};
