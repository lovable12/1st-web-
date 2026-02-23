import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-royal-black min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Contact Us</h1>
        <p className="text-royal-gold font-serif italic text-xl">We'd Love to Hear From You</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="bg-royal-gray p-8 border border-white/5">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-royal-gold flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Address</h4>
                    <p className="text-gray-400">123 Royal Street, Culinary District, City, Country</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-royal-gold flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-royal-gold flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Email</h4>
                    <p className="text-gray-400">info@royalflame.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-royal-gold flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Opening Hours</h4>
                    <p className="text-gray-400">Monday - Sunday: 11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-royal-gray p-8 border border-white/5">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-royal-gold transition-colors">
                  <Facebook size={32} />
                </a>
                <a href="#" className="text-gray-400 hover:text-royal-gold transition-colors">
                  <Instagram size={32} />
                </a>
                <a href="#" className="text-gray-400 hover:text-royal-gold transition-colors">
                  <Twitter size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] bg-gray-800 rounded-sm overflow-hidden relative">
            {/* Placeholder for Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1645564756836!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              className="absolute inset-0 w-full h-full grayscale opacity-80 hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
