import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-royal-black min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Our Story</h1>
        <p className="text-royal-gold font-serif italic text-xl">Tradition, Passion, and Excellence</p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section 1: The Beginning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-6">A Legacy of Flavor</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Established in 1995, Royal Flame began with a simple vision: to bring the authentic tastes of the East to the modern world. What started as a small family kitchen has grown into a landmark destination for food lovers.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our name, "Royal Flame," symbolizes the passion that burns in our kitchen—a dedication to mastering the art of wok cooking, tandoor grilling, and delicate dim sum preparation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Restaurant History"
              className="w-full h-auto rounded-sm shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Section 2: Mission & Vision */}
        <div className="bg-royal-gray p-12 rounded-sm mb-24 border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-serif font-bold text-royal-gold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To serve exceptional food that honors tradition while embracing innovation, creating memorable dining experiences for every guest who walks through our doors.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-royal-gold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be recognized globally as a beacon of culinary excellence, where the warmth of hospitality meets the highest standards of gastronomy.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: The Chef */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Head Chef"
              className="w-full h-auto rounded-sm shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <span className="text-royal-gold font-serif italic text-lg mb-2 block">Meet the Master</span>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Executive Chef Kenji</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              With over 20 years of experience in Michelin-starred kitchens across Asia and Europe, Chef Kenji brings a unique perspective to Royal Flame. His philosophy is simple: respect the ingredients.
            </p>
            <p className="text-gray-400 leading-relaxed">
              "Cooking is not just about technique; it's about emotion. I want our guests to taste the love and history in every bite."
            </p>
          </motion.div>
        </div>

        {/* Section 4: Gallery */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white mb-8">Interior Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Interior 1" className="w-full h-64 object-cover hover:opacity-80 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1551632436-cbf8dd354ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Interior 2" className="w-full h-64 object-cover hover:opacity-80 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Interior 3" className="w-full h-64 object-cover hover:opacity-80 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Interior 4" className="w-full h-64 object-cover hover:opacity-80 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Interior 5" className="w-full h-64 object-cover hover:opacity-80 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Interior 6" className="w-full h-64 object-cover hover:opacity-80 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
}
