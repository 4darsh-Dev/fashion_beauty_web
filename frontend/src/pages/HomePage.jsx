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

import hairWashImg from "../assets/hair-wash.jpg";
import hairdressImg from "../assets/hairdresser.jpg"
import manicureImg from "../assets/manicure.jpg"
import massageImg from "../assets/massage.jpg"
import pedicureImg from "../assets/pedicure.jpg"

import fasionAccessoriesImg from "../assets/fashion-accessories.jpg"
import stylingToolsImg from "../assets/styling-tools.jpg"
import hairCareImg from "../assets/hair-care.jpg"


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
    { name: "Hair Care", image: hairCareImg },
    { name: "Styling Tools", image: stylingToolsImg },
    // { name: "Natural Products", image: "/images/natural-products.jpg" },
    { name: "Accessories", image: fasionAccessoriesImg },
  ];

  // Services data
  const services = [
    { 
      title: "Personalized Hair Consultation", 
      description: "Tailored advice for your unique hair type and goals",
      image: hairWashImg,
    },
    
    { 
      title: "Massage", 
      description: "Expert styling services for any occasion",
      image: massageImg
    },
    
    { 
      title: "Manicure", 
      description: "Restorative treatments for damaged or stressed hair",
      image: manicureImg
    },
    { 
      title: "Pedicure", 
      description: "Restorative treatments for damaged or stressed hair",
      image: pedicureImg

    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The personalized care I received completely transformed my hair. I've never felt more confident.",
      author: "Maria J.",
      image: "https://auto-doc-seven.vercel.app/am-pic.png"
    },
    {
      quote: "Their expertise and premium products made all the difference. My hair has never been healthier.",
      author: "David L.",
      image: "https://auto-doc-seven.vercel.app/am-pic.png"
    },
    {
      quote: "From the moment I walked in, I knew I was in good hands. Worth every penny.",
      author: "Sophia T.",
      image: "https://auto-doc-seven.vercel.app/am-pic.png"
    }
  ];

  // Beauty tips data
  const beautyTips = [
    {
      title: "Winter Hair Care Essentials",
      excerpt: "Protect your locks from the harsh winter elements with these expert tips.",
      image: "https://img.freepik.com/premium-photo/natural-makeup-look-with-makeup-brushes-beauty-inspiration-tips_1340225-8029.jpg",
      link: "/blog/winter-hair-care"
    },
    {
      title: "Sustainable Beauty Routines",
      excerpt: "Eco-friendly practices that benefit both your hair and the planet.",
      image: "https://img.freepik.com/premium-photo/natural-makeup-look-with-makeup-brushes-beauty-inspiration-tips_1340225-8029.jpg",
      link: "/blog/sustainable-beauty"
    },
    {
      title: "Morning Routines for Healthy Hair",
      excerpt: "Start your day right with these hair-loving morning habits.",
      image: "https://img.freepik.com/premium-photo/natural-makeup-look-with-makeup-brushes-beauty-inspiration-tips_1340225-8029.jpg",
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