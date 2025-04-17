import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 bg-[#e8e7e5] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{backgroundColor: "#e8e7e5"}}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            className="block lg:hidden text-stone-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/appointment">Appointment</NavLink>
          </div>
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-serif text-stone-800">Fashion Fiesta</h1>
          </Link>
          
          {/* Right side desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/beauty-circle">Beauty Circle</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/cart" className="flex items-center">
              Cart
              <div className="ml-2 relative">
                <ShoppingBag size={20} />
              </div>
            </NavLink>
          </div>
          
          {/* Cart icon (always visible) */}
          <Link to="/cart" className="lg:hidden text-stone-800 relative">
            <ShoppingBag size={20} />
          </Link>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="lg:hidden bg-white w-full shadow-lg absolute top-full left-0 py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavLink to="/shop">Shop</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>
            <MobileNavLink to="/appointment">Appointment</MobileNavLink>
            <MobileNavLink to="/beauty-circle">Beauty Circle</MobileNavLink>
            <MobileNavLink to="/profile">Profile</MobileNavLink>
            <MobileNavLink to="/cart">Cart</MobileNavLink>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

// Desktop Navigation Link
const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-stone-800 hover:text-stone-600 font-medium relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-800 transition-all duration-300 group-hover:w-full" />
  </Link>
);

// Mobile Navigation Link
const MobileNavLink = ({ to, children }) => (
  <Link 
    to={to}
    className="text-stone-800 text-lg font-medium py-2 block border-b border-stone-100"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    {children}
  </Link>
);

export default Navbar;