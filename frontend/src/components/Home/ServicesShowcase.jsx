import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ServicesShowcase = ({ services }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 px-4 md:px-6 bg-stone-50"
    >
      <motion.div 
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
            Our Premium Services
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            Indulge in our specialized hair care services tailored to meet your 
            unique needs and enhance your natural beauty.
          </p>
        </motion.div>
        
        <div className="relative">
          <motion.div
            className="relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-w-16 aspect-h-12 md:aspect-none md:h-full">
                <img 
                  src={services[currentIndex].image} 
                  alt={services[currentIndex].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-serif text-stone-800 mb-4">
                  {services[currentIndex].title}
                </h3>
                <p className="text-stone-600 mb-6">
                  {services[currentIndex].description}
                </p>
                <button className="mt-auto self-start px-6 py-3 bg-stone-800 text-white rounded hover:bg-stone-700 transition-colors">
                  Learn More
                </button>
                
                <div className="mt-8 flex items-center justify-between">
                  <div className="text-sm text-stone-500">
                    {currentIndex + 1} / {services.length}
                  </div>
                  <div className="flex space-x-3">
                    <button 
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors"
                    aria-label="Previous service"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors"
                    aria-label="Next service"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
          
          {/* Service indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-stone-800 w-6' : 'bg-stone-300'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesShowcase;