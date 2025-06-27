import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bg from './assets/background.png';
import whatsapp from './assets/whatsapp.png';

const slides = [bg, bg, bg, bg, bg]; // Placeholder: all 5 slides use the same image for now

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
      {/* Slides with Framer Motion */}
      <AnimatePresence initial={false}>
        {slides.map((img, idx) =>
          current === idx ? (
            <motion.img
              key={idx}
              src={img}
              alt="slide"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
          ) : null
        )}
      </AnimatePresence>
      {/* Overlay Content with Framer Motion */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className="absolute top-1/4 left-6 md:left-24 z-20 text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="text-white text-2xl sm:text-3xl md:text-[70px] mb-6 max-w-xs sm:max-w-md md:max-w-2xl leading-tight md:leading-snug drop-shadow-lg font-[Font_2] font-normal"
        >
          Align Your <br /> Body, Mind and Stars
        </motion.h1>
        <motion.a
          href="#services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="inline-block bg-[#0655A0] hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded transition-colors text-sm md:text-[18px] shadow"
        >
          DISCOVER YOUR PATH
        </motion.a>
      </motion.div>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
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