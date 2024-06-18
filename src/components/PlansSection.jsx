import React, { useEffect } from 'react';
import { fadeInUp } from '../animations';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const plans = [
  { title: 'Family Meal Plan', description: 'Savory recipes', price: '$33.00', image: '/images/family-meal.jpg' },
  { title: 'Busy Bee Meal Plan', description: 'Quick recipes', price: '$27.00', image: '/images/busy-bee.jpg' },
  { title: 'Student Meal Plan', description: 'Affordable recipes', price: '$27.00', image: '/images/student-meal.jpg' },
];

export const PlansSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      fadeInUp('.plan-item', 0.5, 0.2); // Ajustar delay a 0.5 segundos
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      id="services"
      className="my-20 px-10 lg:px-0 w-full lg:w-[90%] 2xl:w-[1200px] mx-auto text-darkAccent font-sans lg:my-15"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary font-serif text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-secondary shadow-lg plan-item">
            <div className="mb-4">
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-48 lg:h-250 object-cover"
              />
            </div>
            <div className="p-6 pt-0 text-center">
              <h2 className="text-lg font-bold mb-2 text-primary font-serif lg:text-2xl">{plan.title}</h2>
              <p className="text-text">{plan.description}</p>
              <p className="text-darkAccent font-bold">{plan.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
