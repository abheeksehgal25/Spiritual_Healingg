import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bgCard from './assets/background3.png';
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
    role: ', Apr 5th 2025',
    rating: 5
  },
  {
    text: 'thank you so much for your reading and advice 🙏🏻',
    name: 'HS',
    role: ', May 30th 2025',
    rating: 5
  },
  {
    text: 'very polite har baat ko bahut acche se explain kiya',
    name: 'BO',
    role: ', May 22nd 2025',
    rating: 5
  },
  {
    text: 'I am getting very negative but now I feel positive from',
    name: 'PY',
    role: ', May 15th 2025',
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
    role: ', Jun 27th 2025',
    rating: 5
  },
  {
    text: '',
    name: 'NS',
    role: 'Jun 23rd 2025',
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
      className="relative w-full min-h-[400px] py-4 md:py-8 flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgCard})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      id="testimonials"
    >
      <div className="relative w-full max-w-md sm:max-w-2xl md:max-w-2xl mx-auto z-10 px-4 md:px-8 py-3 md:py-6 rounded-lg md:rounded-xl shadow-lg" style={{ background: 'rgba(255,255,255,0.85)' }}>
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
          <div className="flex items-center mb-2">{Array.from({length: testimonials[current].rating}).map((_,i) => <span key={i} className="text-yellow-400 text-lg">★</span>)}</div>
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