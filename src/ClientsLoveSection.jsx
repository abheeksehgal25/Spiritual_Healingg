import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import line from './assets/line.png';

const testimonials = [
  {
    text: 'patient and quite accurate and encouraging.',
    name: 'AN',
    role: 'Mar 10th 2025',
    rating: 5
  },
  {
    text: 'Superb... giving you all answers.. accurate prediction',
    name: 'MS',
    role: 'Mar 10th 2025',
    rating: 5
  },
  {
    text: 'very thankfully and hopefully',
    name: 'CB',
    role: 'Mar 2nd 2025',
    rating: 5
  },
  {
    text: 'Thanks Astrologer Ji for Guidance. Awesome',
    name: 'GG',
    role: 'Apr 20th 2025',
    rating: 5
  },
  {
    text: 'great soul highly recommended readings on point..',
    name: 'NA',
    role: 'Apr 7th 2025',
    rating: 5
  },
  {
    text: 'best astrologer aapki life mein koi problem ho to ek bar inse jarur baat Karen',
    name: 'V',
    role: 'Apr 5th 2025',
    rating: 5
  },
  {
    text: "The consultation exceeded my expectations. I'm grateful for the guidance.",
    name: 'AS',
    role: 'Apr 5th 2025',
    rating: 5
  },
  {
    text: 'thank you so much for your reading and advice 🙏🏻',
    name: 'HS',
    role: 'May 30th 2025',
    rating: 5
  },
  {
    text: 'very polite har baat ko bahut acche se explain kiya',
    name: 'BO',
    role: 'May 22nd 2025',
    rating: 5
  },
  {
    text: 'I am getting very negative but now I feel positive from',
    name: 'PY',
    role: 'May 15th 2025',
    rating: 5
  },
  {
    text: 'Thank you for your valuable suggestions',
    name: 'AS',
    role: 'Apr 5th 2025',
    rating: 5
  },
  {
    text: 'it was nice meeting with you',
    name: 'AS',
    role: 'Mar 10th 2025',
    rating: 5
  },
  {
    text: 'Best astrologer I have ever approached.',
    name: 'GS',
    role: 'Apr 26th 2025',
    rating: 5
  },
  {
    text: 'thank you so much ..you were very polite and you guidance made be relief a lot',
    name: 'KN',
    role: 'Apr 26th 2025',
    rating: 5
  },
  {
    text: 'Astrology session exceeded expectations. Valuable guidance, reassuring predictions. Feeling empowered and motivated.',
    name: 'TB',
    role: 'Jun 27th 2025',
    rating: 5
  },
  {
    text: "I'm impressed by the astrologer's expertise. Will definitely consult again.",
    name: 'HK',
    role: 'Jun 23rd 2025',
    rating: 5
  },
  {
    text: 'thanks to a lot for give best guidance TYSM',
    name: 'RB',
    role: 'Jun 19th 2025',
    rating: 5
  },
  {
    text: 'very good informations',
    name: 'SH',
    role: 'Jun 9th 2025',
    rating: 5
  },
  {
    text: 'will connect again surely.. hope what you said comes true',
    name: 'SH',
    role: 'Jun 9th 2025',
    rating: 5
  },
  {
    text: 'Very. Fast and efficient. Thank you so much',
    name: 'MD',
    role: 'Jun 3rd 2025',
    rating: 5
  },
  {
    text: 'Aapke solutions se meri problems solve hui.',
    name: 'SD',
    role: 'May 30th 2025',
    rating: 5
  },
];

// Floating hearts component
const FloatingHearts = () => {
  const hearts = Array.from({ length: 12 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${12 + Math.random() * 16}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default function ClientsLoveSection() {
  const [current, setCurrent] = useState(0);

  // Autoplay
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full min-h-[500px] py-16 md:py-24 flex items-center justify-center overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
      id="testimonials"
    >
      {/* Enhanced background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/30 to-purple-900/20" />
      
      {/* Floating hearts */}
      <FloatingHearts />
      
      <div className="relative w-full max-w-lg mx-auto z-10 px-2 sm:px-4 md:px-8">
        {/* Enhanced Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.span 
              role="img" 
              aria-label="heart"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-philosopher font-normal text-white">
              <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                Client's Love
              </span>
            </h2>
            <motion.span 
              role="img" 
              aria-label="heart"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              ❤️
            </motion.span>
          </div>
          <div className="flex justify-center mb-6">
            <img src={line} alt="divider" className="h-8 w-auto" />
          </div>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            What our clients say about their spiritual journey with us
          </p>
        </motion.div>
        
        {/* Enhanced Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative w-full"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-8 md:p-12 border border-white/20 w-full max-w-full">
            {/* Quote icon */}
            {/* <div className="absolute -top-4 left-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md">
              <span className="text-gray-500 text-lg">"</span>
            </div> */}
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Testimonial text */}
                <motion.p 
                  className="italic text-gray-800 text-lg md:text-xl mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  "{testimonials[current].text}"
                </motion.p>
                
                {/* Client info */}
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="font-bold text-gray-900 text-lg md:text-xl mb-1">
                    {testimonials[current].name}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">
                    {testimonials[current].role}
                  </div>
                </motion.div>
                
                {/* Star rating */}
                <motion.div 
                  className="flex items-center justify-center gap-1 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {Array.from({length: testimonials[current].rating}).map((_, i) => (
                    <motion.span 
                      key={i} 
                      className="text-yellow-400 text-xl md:text-2xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
        
        {/* Enhanced Dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-center mt-8 gap-1 sm:gap-3 max-w-xs mx-auto"
        >
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full border-2 border-white transition-all duration-300 ${
                current === idx ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
        
        {/* Progress indicator */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-white/70 text-sm text-center w-full">
            {current + 1} of {testimonials.length}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 