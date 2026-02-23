import React, { useState } from 'react';
import { motion } from 'motion/react';

const menuCategories = [
  { id: 'starters', name: 'Starters' },
  { id: 'main', name: 'Main Course' },
  { id: 'signature', name: 'Signature Dishes' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' },
];

const menuItems = [
  // Starters
  {
    id: 1,
    category: 'starters',
    name: 'Golden Spring Rolls',
    description: 'Crispy rolls filled with vegetables and glass noodles.',
    price: '$12.00',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    category: 'starters',
    name: 'Chicken Satay',
    description: 'Grilled marinated chicken skewers with peanut sauce.',
    price: '$14.00',
    image: 'https://images.unsplash.com/photo-1533052472540-3c5862d22436?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    category: 'starters',
    name: 'Dim Sum Platter',
    description: 'Assortment of steamed dumplings.',
    price: '$18.00',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c423c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  // Main Course
  {
    id: 4,
    category: 'main',
    name: 'Kung Pao Chicken',
    description: 'Spicy stir-fry with chicken, peanuts, vegetables, and chili peppers.',
    price: '$22.00',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    category: 'main',
    name: 'Beef Rendang',
    description: 'Slow-cooked tender beef in rich coconut spice paste.',
    price: '$26.00',
    image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    category: 'main',
    name: 'Vegetable Biryani',
    description: 'Aromatic basmati rice cooked with mixed vegetables and spices.',
    price: '$20.00',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  // Signature
  {
    id: 7,
    category: 'signature',
    name: 'Royal Flame Lobster',
    description: 'Whole lobster wok-fried with ginger and scallions.',
    price: '$65.00',
    image: 'https://images.unsplash.com/photo-1553659971-f01207815844?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    category: 'signature',
    name: 'Wagyu Beef Teppanyaki',
    description: 'Premium A5 Wagyu beef grilled to perfection.',
    price: '$85.00',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  // Desserts
  {
    id: 9,
    category: 'desserts',
    name: 'Mango Sticky Rice',
    description: 'Sweet sticky rice with fresh mango and coconut milk.',
    price: '$12.00',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    category: 'desserts',
    name: 'Matcha Tiramisu',
    description: 'Classic Italian dessert with a Japanese green tea twist.',
    price: '$14.00',
    image: 'https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  // Drinks
  {
    id: 11,
    category: 'drinks',
    name: 'Lychee Martini',
    description: 'Vodka, lychee liqueur, and fresh lychee juice.',
    price: '$16.00',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 12,
    category: 'drinks',
    name: 'Jasmine Tea',
    description: 'Premium loose-leaf jasmine tea.',
    price: '$6.00',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-royal-black min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Our Menu</h1>
        <p className="text-royal-gold font-serif italic text-xl">A Culinary Journey Through Asia</p>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 mb-12 overflow-x-auto">
        <div className="flex justify-center min-w-max space-x-4 md:space-x-8 border-b border-white/10 pb-4">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-lg uppercase tracking-widest pb-2 transition-colors ${
                activeCategory === cat.id
                  ? 'text-royal-gold border-b-2 border-royal-gold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
        >
          {filteredItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 group">
              <div className="w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden rounded-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-grow border-b border-white/10 pb-6 group-hover:border-royal-gold/50 transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-royal-gold transition-colors">{item.name}</h3>
                  <span className="text-royal-gold font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <button className="text-xs uppercase tracking-widest text-white/70 hover:text-white border border-white/20 hover:border-white px-4 py-2 transition-all">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
