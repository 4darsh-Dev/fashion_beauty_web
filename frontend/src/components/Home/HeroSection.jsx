import React from 'react';
import { color, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import heroImg from "../../assets/hero-image.jpg"

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <section 
      ref={ref} 
      className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6 bg-stone-50 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})`, backgroundPositionY :"2rem", height:"165vh",backgroundRepeat: 'no-repeat'}}
    >
      <div className="container mx-auto max-w-6xl" style={{"margin-top" : "10vh"}}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-8"
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-stone-800 leading-tight mb-8"
            style={{position : "relative", top: "-2.2rem"}}>
              Immerse yourself <br />
              in a world of<br />
              personalized hair care.
            </h2>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <button className="px-8 py-3 bg-stone-800 text-white font-medium rounded hover:bg-stone-700 transition-colors">
                Book Appointment
              </button>
              <button className="px-8 py-3 border border-stone-800 text-stone-800 font-medium rounded hover:bg-stone-100 transition-colors" style={{"background-color":"rgb(247, 213, 176)", "border-color":"rgb(227, 193, 156)" , "font-weight": "600","border-width" : "3px" }}>
                Our Services
              </button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:col-span-4 relative overflow-hidden"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden relative">
              <img 
                src="/images/hero-salon.jpg" 
                alt="Luxury hair care experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-800/10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;