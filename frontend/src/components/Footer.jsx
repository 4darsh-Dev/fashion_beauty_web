import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white mb-4">HairSalon</h3>
            <p className="text-stone-400">
              Elevating your natural beauty through personalized hair care and 
              premium salon experiences since 2013.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialLink icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialLink icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialLink icon={<Twitter size={18} />} href="https://twitter.com" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/services">Our Services</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/blog">Hair Care Blog</FooterLink>
              <FooterLink href="/products">Shop Products</FooterLink>
              <FooterLink href="/gift-cards">Gift Cards</FooterLink>
            </ul>
          </div>
          
          {/* Help & Support */}
          <div>
            <h4 className="text-white font-medium mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/shipping">Shipping Information</FooterLink>
              <FooterLink href="/returns">Returns & Exchanges</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <p>123 Beauty Lane, Fashion District, New York, NY 10001</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <p>(212) 555-1234</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <p>info@hairsalon.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="border-t border-stone-700 pt-8 pb-4">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-white text-xl mb-3">Stay Updated</h4>
            <p className="text-stone-400 mb-4">
              Subscribe to our newsletter for the latest hair care tips, trends, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 rounded bg-stone-700 text-white border border-stone-600 focus:outline-none focus:border-stone-400"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-stone-300 text-stone-800 rounded hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} HairSalon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Footer Link Component
const FooterLink = ({ href, children }) => (
  <li>
    <Link to={href} className="text-stone-400 hover:text-white transition-colors">
      {children}
    </Link>
  </li>
);

// Social Media Link Component
const SocialLink = ({ icon, href }) => (
  <a 
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-8 h-8 flex items-center justify-center bg-stone-700 rounded-full hover:bg-stone-600 transition-colors"
  >
    {icon}
  </a>
);

export default Footer;