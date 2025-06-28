import React from 'react';
import { motion } from 'framer-motion';
import maam from './assets/maam.svg';
import image from './assets/image.svg';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';

// Create an array of all images for the banner
const bannerImages = [
  maam, image1, image2, image3, image4, image5, image6, image7, image8, image9,
  maam, image1, image2, image3, image4, image5, image6, image7, image8, image9 // Duplicate for seamless loop
];

export default function Events() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 md:py-24 px-4 md:px-16 lg:px-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
      id="events"
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-philosopher text-4xl md:text-5xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Offline Events
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <img src={image} alt="decorative underline" className="mx-auto w-36 sm:w-48" />
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Join us for transformative spiritual experiences and healing sessions
          </p>
        </motion.div>

        {/* Enhanced Marquee Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative"
        >
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-blue-50 via-purple-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-pink-50 via-purple-50 to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-x-auto w-full bg-white/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 py-8">
            <div className="flex gap-4 sm:gap-8 animate-marquee w-max">
              {bannerImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.05,
                    ease: "easeOut"
                  }}
                >
                  <motion.img
                    src={img}
                    alt={`event ${idx + 1}`}
                    className="h-80 w-80 object-cover rounded-xl shadow-lg border-2 border-white/50"
                    whileHover={{ 
                      scale: 1.08,
                      transition: { duration: 0.4 }
                    }}
                  />
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-lg font-semibold mb-1">Spiritual Event</div>
                      <div className="text-sm opacity-90">Join us for healing & transformation</div>
                    </div>
                  </motion.div>
                  
                  {/* Floating badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 + 0.2 }}
                  >
                    <span className="text-white text-xs">✨</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://calendly.com/meenalkhandelwal55"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full max-w-xs mx-auto justify-center"
          >
            <span>Book Your Event</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.section>
  );
} 