import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BeautyTipsSection = ({ tips }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
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
      className="py-16 md:py-24 px-4 md:px-6 bg-white"
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
            Beauty Tips & Inspiration
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            Discover expert advice, trends, and hair care secrets from our beauty specialists.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {tips.map((tip, index) => (
            <motion.article
              key={index}
              className="bg-stone-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="aspect-w-8 aspect-h-2 overflow-hidden"
                style={{height:"300px"}}
              >
                <img 
                  src={tip.image} 
                  alt={tip.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-stone-800 mb-2">
                  {tip.title}
                </h3>
                <p className="text-stone-600 mb-4">
                  {tip.excerpt}
                </p>
                <Link 
                  to={tip.link}
                  className="inline-flex items-center text-stone-800 font-medium hover:text-stone-600 transition-colors"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 border border-stone-800 text-stone-800 font-medium rounded hover:bg-stone-100 transition-colors"
          >
            Visit Our Blog
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BeautyTipsSection;