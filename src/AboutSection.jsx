import React from 'react';
import { motion } from 'framer-motion';
import bg from './assets/background1.jpg';
import photo from './assets/photo.png';

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full py-16 md:py-24 flex items-center justify-center bg-white overflow-hidden"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      id="about"
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-purple-50/80 pointer-events-none" />
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto z-10 px-4 md:px-8">
        {/* Enhanced title and subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-philosopher font-normal mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Meenal Khandelwal
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-center font-inter font-normal text-gray-700 max-w-4xl mx-auto mb-8 text-lg md:text-xl leading-relaxed"
          >
            I, a believer in cosmic powers and a world beyond the one we live in, am here to share my learnings with you and guide you along the path of this beautiful journey called Life.
          </motion.p>
        </motion.div>
        
        {/* Main content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          {/* Enhanced Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 mx-auto lg:mx-0 relative group mb-6"
          >
            {/* Decorative border */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl p-1 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-white rounded-2xl p-2 flex items-center justify-center">
                <img 
                  src={photo} 
                  alt="Meenal Khandelwal" 
                  className="w-full h-full rounded-xl shadow-2xl object-contain bg-white transform -rotate-3 group-hover:rotate-0 transition-transform duration-500" 
                />
              </div>
            </div>
            
            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-2 sm:p-4 shadow-lg w-14 h-14 sm:w-20 sm:h-20 flex flex-col items-center justify-center"
            >
              <div className="text-lg sm:text-2xl font-bold leading-none">15+</div>
              <div className="text-[10px] sm:text-xs">Years</div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex-1 w-full"
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-semibold mb-6 text-center lg:text-left bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Introduction
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-700 text-center lg:text-left text-base md:text-lg leading-relaxed">
                Welcome! I'm Meenal Khandelwal — Yoga Teacher, Mudra Therapist, AstroYoga Guide, and Tarot Card Reader. My mission is to help you align your body, mind, and spirit through empowering, sacred practices. Whether you seek clarity, healing, or inner peace, my sessions gently guide you back to your true self — one breath, one mudra, one insight at a time.
              </p>
              
              <p className="text-gray-700 text-center lg:text-left text-base md:text-lg leading-relaxed">
                With years of experience as a Tarot Card Reader, Astrologer, Numerologist, and Akashic Record Reader, I blend ancient wisdom with intuitive guidance. My spiritual journey began with my father, a Reiki Grand Master, whose teachings continue to inspire my work today.
              </p>
            </motion.div>
            
            {/* Enhanced stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8"
            >
              <motion.div 
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    15+
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Years Of</div>
                    <div className="font-semibold text-lg text-gray-800">Professional Healing</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    500+
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Happy</div>
                    <div className="font-semibold text-lg text-gray-800">Clients Served</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Enhanced CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.a 
                href="#services"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2 w-full max-w-xs mx-auto lg:mx-0 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 