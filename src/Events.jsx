import React from 'react';
import { motion } from 'framer-motion';
import maam from './assets/maam.svg';
import image from './assets/image.svg';

export default function Events() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 px-4 md:px-16 lg:px-24 text-black"
    >
      <div className="text-center mb-10">
        <h2 className="font-philosopher text-4xl font-semibold mb-2">Offline Events</h2>
        <img src={image} alt="decorative underline" className="mx-auto w-36 sm:w-48" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className="overflow-hidden w-full bg-white py-4"
      >
        <div className="flex gap-6 animate-marquee w-max">
          {[...Array(8)].map((_, idx) => (
            <img
              key={idx}
              src={maam}
              alt={`event ${idx + 1}`}
              className="h-80 w-80 object-contain"
            />
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
        `}</style>
      </motion.div>
    </motion.section>
  );
} 