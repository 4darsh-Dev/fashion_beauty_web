// HomePage.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Home/HeroSection';
import StatisticsBar from '../components/Home/StatisticsBar';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import ServicesShowcase from '../components/Home/ServicesShowcase';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import BeautyTipsSection from '../components/Home/BeautyTipsSection';
import BookingCTA from '../components/Home/BookingCTA';
import Footer from '../components/Footer';

// Animation variants for page transitions and scroll reveals
const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeInOut",
      staggerChildren: 0.2
    }
  },
  exit: { opacity: 0 }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};

const HomePage = () => {
  // Statistics data for StatisticsBar component
  const statsData = [
    { value: "1300+", label: "CUSTOMER" },
    { value: "30+", label: "OUR TRAINER" },
    { value: "2013", label: "BEGIN ON" }
  ];

  // Featured product categories
  const productCategories = [
    { name: "Hair Care", image: "/images/haircare.jpg" },
    { name: "Styling Tools", image: "/images/styling-tools.jpg" },
    { name: "Natural Products", image: "/images/natural-products.jpg" },
    { name: "Accessories", image: "/images/accessories.jpg" }
  ];

  // Services data
  const services = [
    { 
      title: "Personalized Hair Consultation", 
      description: "Tailored advice for your unique hair type and goals",
      image: "/images/consultation.jpg" 
    },
    { 
      title: "Premium Styling", 
      description: "Expert styling services for any occasion",
      image: "/images/styling.jpg" 
    },
    { 
      title: "Hair Treatments", 
      description: "Restorative treatments for damaged or stressed hair",
      image: "/images/treatments.jpg" 
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The personalized care I received completely transformed my hair. I've never felt more confident.",
      author: "Maria J.",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "Their expertise and premium products made all the difference. My hair has never been healthier.",
      author: "David L.",
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "From the moment I walked in, I knew I was in good hands. Worth every penny.",
      author: "Sophia T.",
      image: "/images/testimonial-3.jpg"
    }
  ];

  // Beauty tips data
  const beautyTips = [
    {
      title: "Winter Hair Care Essentials",
      excerpt: "Protect your locks from the harsh winter elements with these expert tips.",
      image: "/images/winter-care.jpg",
      link: "/blog/winter-hair-care"
    },
    {
      title: "Sustainable Beauty Routines",
      excerpt: "Eco-friendly practices that benefit both your hair and the planet.",
      image: "/images/sustainable-beauty.jpg",
      link: "/blog/sustainable-beauty"
    },
    {
      title: "Morning Routines for Healthy Hair",
      excerpt: "Start your day right with these hair-loving morning habits.",
      image: "/images/morning-routines.jpg",
      link: "/blog/morning-routines"
    }
  ];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="bg-stone-50"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Navbar />
      
      <main>
        <HeroSection />
        
        <StatisticsBar stats={statsData} />
        
        <FeaturedProducts categories={productCategories} />
        
        <ServicesShowcase services={services} />
        
        <TestimonialsSection testimonials={testimonials} />
        
        <BeautyTipsSection tips={beautyTips} />
        
        <BookingCTA />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default HomePage;