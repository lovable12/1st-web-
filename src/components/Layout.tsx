import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Reservation', path: '/reservation' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-royal-black/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl md:text-3xl font-serif font-bold text-royal-gold group-hover:text-white transition-colors">
              Royal Flame
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-widest hover:text-royal-gold transition-colors ${
                  location.pathname === link.path ? 'text-royal-gold border-b border-royal-gold' : 'text-royal-cream'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservation"
              className="bg-royal-gold text-royal-black px-6 py-2 rounded-sm font-semibold hover:bg-white transition-colors uppercase tracking-wider text-sm"
            >
              Book Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-royal-cream hover:text-royal-gold transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-royal-black border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 text-base font-medium hover:text-royal-gold transition-colors ${
                    location.pathname === link.path ? 'text-royal-gold' : 'text-royal-cream'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/reservation"
                className="mt-4 bg-royal-gold text-royal-black px-8 py-3 rounded-sm font-semibold hover:bg-white transition-colors uppercase tracking-wider text-sm"
              >
                Book Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-royal-gray pt-16 pb-8 border-t border-royal-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-royal-gold mb-6">Royal Flame</h3>
            <p className="text-royal-cream/80 mb-6 leading-relaxed">
              Experience the finest Asian, Chinese, and Indian cuisine in an atmosphere of royalty and elegance.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-royal-gold/30 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-royal-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-royal-gold/30 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-royal-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-royal-gold/30 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-royal-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-serif font-bold text-white mb-6 uppercase tracking-widest">Contact Us</h4>
            <div className="space-y-4 text-royal-cream/80">
              <div className="flex items-center justify-center space-x-3">
                <MapPin size={18} className="text-royal-gold" />
                <span>123 Royal Street, Culinary District</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone size={18} className="text-royal-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock size={18} className="text-royal-gold" />
                <span>Open Daily: 11:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-serif font-bold text-white mb-6 uppercase tracking-widest">Newsletter</h4>
            <p className="text-royal-cream/80 mb-4">Subscribe for exclusive offers and updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-black/30 border border-white/10 px-4 py-2 text-white focus:outline-none focus:border-royal-gold transition-colors"
              />
              <button className="bg-royal-gold text-royal-black font-semibold py-2 hover:bg-white transition-colors uppercase tracking-wider text-xs">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-royal-cream/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Royal Flame Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-current"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </a>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-royal-black text-royal-cream font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
