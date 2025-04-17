import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar } from 'lucide-react';

const BookingCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="py-16 md:py-24 bg-stone-100"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">
            Experience personalized hair care designed just for you
          </h3>
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">
            Our hair specialists are ready to transform your look and help you embrace 
            your unique beauty with customized services and premium products.
          </p>
          <motion.button
            className="flex items-center justify-center px-8 py-4 bg-stone-800 text-white rounded-md mx-auto hover:bg-stone-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar size={20} className="mr-2" />
            Book Your Appointment
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default BookingCTA