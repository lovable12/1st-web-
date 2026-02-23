import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Utensils, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Dining"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-royal-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-royal-gold font-serif italic text-xl md:text-2xl mb-4"
        >
          Welcome to Royal Flame
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Where Taste <br /> Meets Royalty
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
        >
          Experience an exquisite blend of Asian, Chinese, and Indian flavors in an atmosphere of pure elegance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/menu"
            className="px-8 py-4 bg-royal-gold text-royal-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 w-full sm:w-auto"
          >
            View Menu
          </Link>
          <Link
            to="/reservation"
            className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-royal-black transition-colors duration-300 w-full sm:w-auto"
          >
            Reserve a Table
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedDish = ({ image, title, description, price }: { image: string, title: string, description: string, price: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-royal-gray group overflow-hidden rounded-sm"
  >
    <div className="h-64 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-serif font-bold text-royal-gold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <span className="text-white font-bold text-lg">{price}</span>
    </div>
  </motion.div>
);

const Testimonial = ({ name, comment, rating }: { name: string, comment: string, rating: number }) => (
  <div className="bg-royal-gray p-8 border border-white/5 relative">
    <div className="flex text-royal-gold mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
    <p className="text-gray-300 italic mb-6">"{comment}"</p>
    <h4 className="text-white font-serif font-bold">{name}</h4>
  </div>
);

export default function Home() {
  return (
    <div className="bg-royal-black">
      <Hero />

      {/* About Preview */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-royal-gold"></div>
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant Interior" 
              className="w-full h-auto shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-royal-gold z-20"></div>
          </div>
          <div className="text-left">
            <span className="text-royal-gold font-serif italic text-lg mb-2 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Tradition Meets Modernity</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Founded with a passion for culinary excellence, Royal Flame brings together the rich heritage of Asian, Chinese, and Indian cuisines. Our chefs craft each dish with precision, using only the finest ingredients to deliver an unforgettable dining experience.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Whether you're here for a quick bite or a lavish dinner, our warm atmosphere and impeccable service ensure you feel like royalty.
            </p>
            <Link to="/about" className="inline-flex items-center text-royal-gold hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
              Read More <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-royal-gold font-serif italic text-lg mb-2 block">Chef's Selection</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Signature Dishes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeaturedDish 
              image="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Imperial Peking Duck"
              description="Crispy skin duck served with pancakes, scallions, and hoisin sauce."
              price="$45.00"
            />
            <FeaturedDish 
              image="https://images.unsplash.com/photo-1585937421612-70a008356f36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Royal Butter Chicken"
              description="Tender chicken simmered in a rich, creamy tomato sauce with fenugreek."
              price="$28.00"
            />
            <FeaturedDish 
              image="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Dragon Roll"
              description="Shrimp tempura, cucumber, topped with avocado and eel sauce."
              price="$22.00"
            />
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="px-8 py-3 border border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-royal-black transition-colors uppercase tracking-widest text-sm font-bold">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-royal-gold font-serif italic text-lg mb-2 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">What Our Guests Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            name="James Wilson"
            comment="The best Indian food I've had in the city. The ambiance is stunning and the service is top-notch."
            rating={5}
          />
          <Testimonial 
            name="Sarah Chen"
            comment="An incredible fusion of flavors. The Peking Duck is a must-try! Will definitely be coming back."
            rating={5}
          />
          <Testimonial 
            name="Michael Brown"
            comment="Perfect for a romantic dinner. The lighting, the music, and the food created a magical evening."
            rating={5}
          />
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 bg-royal-maroon text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Clock size={32} className="text-royal-gold mb-4" />
            <h3 className="text-xl font-serif font-bold mb-2">Opening Hours</h3>
            <p className="text-white/80">Mon-Sun: 11:00 AM - 11:00 PM</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin size={32} className="text-royal-gold mb-4" />
            <h3 className="text-xl font-serif font-bold mb-2">Location</h3>
            <p className="text-white/80">123 Royal Street, Culinary District</p>
          </div>
          <div className="flex flex-col items-center">
            <Utensils size={32} className="text-royal-gold mb-4" />
            <h3 className="text-xl font-serif font-bold mb-2">Book a Table</h3>
            <p className="text-white/80">Call us at +1 (555) 123-4567</p>
          </div>
        </div>
      </section>
    </div>
  );
}
