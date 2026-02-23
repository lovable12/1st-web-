import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-royal-black min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-royal-gray/20 -skew-x-12 transform translate-x-1/4 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-royal-gold font-serif italic text-xl mb-2 block">Book Your Table</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Experience Royal Dining</h1>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Reserve your spot at Royal Flame for an unforgettable culinary journey. Whether it's a romantic dinner, a family celebration, or a business lunch, we ensure perfection in every detail.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-royal-gold/10 p-3 rounded-full text-royal-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Opening Hours</h4>
                  <p className="text-gray-400">Mon-Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-royal-gold/10 p-3 rounded-full text-royal-gold">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Group Bookings</h4>
                  <p className="text-gray-400">For parties larger than 10, please contact us directly.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-royal-gray p-8 md:p-10 border border-white/10 shadow-2xl rounded-sm"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-royal-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-royal-gold transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-royal-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-royal-gold transition-colors"
                      />
                      <Calendar className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">Time</label>
                    <div className="relative">
                      <input
                        type="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-royal-gold transition-colors"
                      />
                      <Clock className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-royal-gold transition-colors appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num} className="bg-royal-gray">{num} People</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-royal-gold text-royal-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors mt-4"
                >
                  Confirm Reservation
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="flex justify-center mb-6">
                  <CheckCircle size={64} className="text-royal-gold" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Reservation Confirmed!</h3>
                <p className="text-gray-400 mb-6">
                  Thank you, {formData.name}. Your table for {formData.guests} has been booked for {formData.date} at {formData.time}.
                </p>
                <p className="text-gray-400 text-sm">A confirmation email has been sent to {formData.email}.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-royal-gold hover:text-white underline uppercase tracking-widest text-sm"
                >
                  Make another reservation
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
