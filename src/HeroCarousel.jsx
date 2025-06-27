import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bg from './assets/background.png';
import whatsapp from './assets/whatsapp.png';
import tarotIcon from './assets/tarot_icon.webp';
import numerologyIcon from './assets/Numerology_icon.webp';
import astroYogaIcon from './assets/AstroYoga_icon.webp';
import mudraIcon from './assets/Mudra_icon.webp';

const slides = [
  {
    icon: tarotIcon,
    label: 'Discover Tarot Reading',
  },
  {
    icon: numerologyIcon,
    label: 'Discover Numerology',
  },
  {
    icon: astroYogaIcon,
    label: 'Discover Astro Yoga',
  },
  {
    icon: mudraIcon,
    label: 'Discover Mudra Therapy',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Autoplay
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current]);

  // WhatsApp link
  const whatsappLink =
    'https://wa.me/917017094225?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.';

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={bg}
        alt="slide background"
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{ pointerEvents: 'none' }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-20" />
      {/* Slide Content */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute top-1/2 left-6 md:left-24 -translate-y-1/2 z-30 flex flex-col items-start"
        >
          <motion.img
            src={slides[current].icon}
            alt={slides[current].label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="w-24 h-24 md:w-40 md:h-40 mb-6 drop-shadow-xl"
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="text-white text-2xl sm:text-3xl md:text-5xl font-philosopher font-normal text-left drop-shadow-lg max-w-xs sm:max-w-md md:max-w-2xl"
          >
            {slides[current].label}
          </motion.h1>
        </motion.div>
      </AnimatePresence>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border-2 border-white ${current === idx ? 'bg-white' : 'bg-transparent'} transition-colors`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      {/* WhatsApp Icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <img src={whatsapp} alt="WhatsApp" className="w-14 h-14 rounded-full shadow-lg" />
      </a>
    </div>
  );
} 