import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const TestimonialsSection = ({ testimonials }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [current, setCurrent] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (!testimonials || testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials]);
  
  const variants = {
    enter: { opacity: 0, y: 50 },
    center: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: {
        duration: 0.3
      }
    }
  };
  
  if (!testimonials || testimonials.length === 0) return null;
  
  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 px-4 md:px-6 bg-stone-100"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            Discover the transformative experiences our clients have had with our 
            premium hair care services and products.
          </p>
        </motion.div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-stone-800">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="relative">
                <Quote 
                  size={40} 
                  className="absolute -top-6 -left-4 text-stone-300 opacity-50 transform -scale-x-100" 
                />
                <blockquote className="text-xl md:text-2xl font-serif text-stone-800 italic mb-6">
                  "{testimonials[current].quote}"
                </blockquote>
                <cite className="text-stone-600 font-medium not-italic">
                  — {testimonials[current].author}
                </cite>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Indicator dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index ? 'bg-stone-800 w-6' : 'bg-stone-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;