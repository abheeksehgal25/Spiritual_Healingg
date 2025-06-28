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
      className="relative w-full py-12 md:py-20 flex items-center justify-center bg-white overflow-hidden"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      id="about"
    >
      {/* Overlay for subtle white tint */}
      <div className="absolute inset-0 bg-white/80 pointer-events-none" />
      <div className="relative w-full max-w-6xl mx-auto z-10 px-4 md:px-8">
        {/* Title and subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-2xl md:text-[48px]  font-philosopher font-normal text-center mb-2"
        >
          About Meenal Khandelwal
        </motion.h2>
        <div className="flex justify-center mb-2">
          <span className="w-16 h-1 bg-orange-400 rounded-full mx-2 mt-3" />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-center font-inter font-normal text-gray-700 max-w-4xl mx-auto mb-8 text-sm md:text-[18px]"
        >
          I, a believer in cosmic powers and a world beyond the one we live in, am here to share my learnings with you and guide you along the path of this beautiful journey called Life.
        </motion.p>
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="flex-shrink-0 w-56 md:w-72 lg:w-80 mx-auto md:mx-0"
          >
            <img src={photo} alt="Meenal Khandelwal" className="w-full h-auto rounded-xl shadow-lg object-contain bg-white" />
          </motion.div>
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="flex-1 w-full"
          >
            <h3 className="text-lg md:text-2xl font-semibold mb-2 text-center md:text-left">Introduction</h3>
            <p className="text-gray-700 mb-4 text-center md:text-left text-sm md:text-base">
            Welcome! I’m Meenal Khandelwal — Yoga Teacher, Mudra Therapist, AstroYoga Guide, and Tarot Card Reader. My mission is to help you align your body, mind, and spirit through empowering, sacred practices. Whether you seek clarity, healing, or inner peace, my sessions gently guide you back to your true self — one breath, one mudra, one insight at a time.
            </p>
            <p className="text-gray-700 mb-6 text-center md:text-left text-sm md:text-base">
            With years of experience as a Tarot Card Reader, Astrologer, Numerologist, and Akashic Record Reader, I blend ancient wisdom with intuitive guidance. My spiritual journey began with my father, a Reiki Grand Master, whose teachings continue to inspire my work today.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <div className="flex items-center gap-3 bg-white/90 rounded-lg shadow px-4 py-3">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-500 text-2xl font-bold">15+</span>
                <div>
                  <div className="text-xs text-gray-500">Years Of Professional Healing</div>
                  <div className="font-semibold text-base">Years Of Practice</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <a href="#" className="bg-[#0655A0] hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded transition-colors text-sm md:text-base shadow">READ MORE</a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 