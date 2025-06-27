import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bgCard from './assets/background3.png';
import line from './assets/line.png';

const testimonials = [
  {
    text: `Thank you so much Sonia for a deeper & insightful session. Got to know closely about the things which I had no idea. Loved exploring about what my life holds for me with your lenses. I will definitely comeback to you for future if I want to know anything about my karmic energy`,
    name: 'Anonymous',
    role: 'Astrologer',
  },
  // Add more testimonials if needed
];

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
      className="relative w-full min-h-screen py-12 md:py-20 flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgCard})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      id="testimonials"
    >
      <div className="relative w-full max-w-md sm:max-w-2xl md:max-w-5xl mx-auto z-10 px-4 md:px-8 py-6 md:py-10 rounded-lg md:rounded-xl shadow-lg" style={{ background: 'rgba(255,255,255,0.85)' }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center mb-4"
        >
          <div className="flex items-center gap-2 text-2xl md:text-3xl">
            <span role="img" aria-label="heart">❤️</span>
            <span className="font-philosopher font-normal">Client's Love</span>
            <span role="img" aria-label="heart">❤️</span>
          </div>
          <img src={line} alt="divider" className="h-4 w-auto my-2" />
        </motion.div>
        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-start justify-center text-left max-w-3xl mx-auto"
        >
          <p className="italic text-gray-700 text-sm md:text-base mb-4">
            {testimonials[current].text}
          </p>
          <div className="font-semibold text-black text-base md:text-lg">
            {testimonials[current].name}
            <span className="font-normal text-gray-600 text-sm md:text-base"> - {testimonials[current].role}</span>
          </div>
        </motion.div>
        {/* Dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center mt-4 gap-2"
        >
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-2.5 h-2.5 rounded-full border-none ${current === idx ? 'bg-orange-400' : 'bg-gray-300'} transition-colors`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
} 