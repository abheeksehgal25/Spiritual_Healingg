import React from 'react';
import { motion } from 'framer-motion';
import bgSection from './assets/background2.jpg';
import TarrotIcon from './assets/Tarrot.png';
import numerologyIcon from './assets/Numerology.png';
import yogaIcon from './assets/Yoga.png';
import comboIcon from './assets/SpecialCombo.png';
import line from './assets/line.png';

const tarotServices = [
  { title: 'Astro+ Tarot Session Video Call - 30 Minutes', price: '₹999' },
  { title: 'Astro + Tarot Session Phone Call - 30 Minutes', price: '₹799' },
  { title: 'Tarot Reading Phone Call - 30 Minutes', price: '₹599' },
  { title: 'Tarot Reading Video Call - 30 Minutes', price: '₹699' },
];
const numerologyServices = [
  { title: 'Reading Via Whatsapp Audio Notes', price: '₹499' },
  { title: 'Business Name Numerology', price: '₹899' },
  { title: 'Personal Name Numerology', price: '₹699' },
];
const yogaServices = [
  { title: 'Personal Yoga Sessions', price: '₹799' },
  { title: 'Chakkra Yoga Balance', price: '₹999' },
  { title: 'Zodiac- Yoga Energy', price: '₹899' },
  { title: 'Mudra Therapy', price: '₹599' },
];
const comboServices = [
  { title: 'Astro Body Balance Pack', price: '₹1499' },
  { title: '7-Chakra Renewal Journey', price: '₹1999' },
  { title: 'Elemental Hormony', price: '₹1299' },
];

function ServiceCard({ title, icon, idx, price }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 m-2 min-h-[250px] max-w-xs w-full mx-auto border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden"
      style={{ 
        backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Icon with enhanced animation */}
      <motion.div
        className="relative z-10 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
          <img src={icon} alt="icon" className="w-12 h-12" />
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h3 className="font-semibold text-lg md:text-xl mb-3 text-white group-hover:text-purple-200 transition-colors duration-300">
          {title}
        </h3>
        {price && (
          <div className="text-2xl font-bold text-purple-300 mb-4">
            {price}
          </div>
        )}
        <motion.a 
          href="https://calendly.com/meenalkhandelwal55"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full max-w-xs mx-auto justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Book Now</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.a>
      </div>
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full py-20 md:py-32 px-2 md:px-8 overflow-x-hidden"
      id="services"
      style={{ backgroundImage: `url(${bgSection})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Enhanced background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/30 to-black/70 pointer-events-none" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-philosopher font-normal text-white mb-4">
            <span className="font-source font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <img src={line} alt="divider" className="h-8 w-auto" />
          </div>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Discover transformative spiritual experiences tailored to your journey
          </p>
        </motion.div>
        
        {/* Tarot Sessions */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
              <img src={TarrotIcon} alt="Tarot" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl text-white font-philosopher font-normal">Tarot Sessions</h3>
          </motion.div>
          <img src={line} alt="divider" className="h-6 w-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {tarotServices.map((s, i) => (
              <ServiceCard key={i} title={s.title} icon={TarrotIcon} idx={i} price={s.price} />
            ))}
          </div>
        </div>
        
        {/* Numerology Session */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
              <img src={numerologyIcon} alt="Numerology" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl text-white font-philosopher font-normal">Numerology Session</h3>
          </motion.div>
          <img src={line} alt="divider" className="h-6 w-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {numerologyServices.map((s, i) => (
              <ServiceCard key={i} title={s.title} icon={numerologyIcon} idx={i} price={s.price} />
            ))}
          </div>
        </div>
        
        {/* Yoga Session */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
              <img src={yogaIcon} alt="Yoga" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl text-white font-philosopher font-normal">Yoga Session</h3>
          </motion.div>
          <img src={line} alt="divider" className="h-6 w-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {yogaServices.map((s, i) => (
              <ServiceCard key={i} title={s.title} icon={yogaIcon} idx={i} price={s.price} />
            ))}
          </div>
        </div>
        
        {/* Special Combo Offers */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
              <img src={comboIcon} alt="Special Combo" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl text-white font-philosopher font-normal">Special Combo Offers</h3>
          </motion.div>
          <img src={line} alt="divider" className="h-6 w-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {comboServices.map((s, i) => (
              <ServiceCard key={i} title={s.title} icon={comboIcon} idx={i} price={s.price} />
            ))}
          </div>
        </div>
        
        {/* Enhanced CTA */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.a
            href="https://calendly.com/meenalkhandelwal55"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-purple-700  text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 text-lg md:text-xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1"
          >
            Explore All Sessions
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
} 