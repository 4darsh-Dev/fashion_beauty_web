import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProducts = ({ categories }) => {
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
        duration: 0.6,
        ease: "easeOut"
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
            Premium Hair Care Products
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            Discover our curated collection of luxury products designed to nurture
            and enhance your hair's natural beauty.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{width: '100%', height: '400px'}}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              variants={itemVariants}
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ width: '100%', height: '400px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-medium mb-2">{category.name}</h3>
                <Link 
                  to={`/shop/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-sm font-medium border-b border-white/50 hover:border-white transition-colors"
                >
                  Shop Now
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            to="/shop"
            className="inline-flex items-center px-6 py-3 border border-stone-800 text-stone-800 font-medium rounded hover:bg-stone-100 transition-colors"
          >
            View All Products
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;