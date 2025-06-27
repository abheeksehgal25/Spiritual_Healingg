import React from 'react';
import bg from './assets/background1.jpg';
import photo from './assets/photo.png';

export default function AboutSection() {
  return (
    <section
      className="relative w-full py-12 md:py-20 flex items-center justify-center bg-white overflow-hidden"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      id="about"
    >
      {/* Overlay for subtle white tint */}
      <div className="absolute inset-0 bg-white/80 pointer-events-none" />
      <div className="relative w-full max-w-6xl mx-auto z-10 px-4 md:px-8">
        {/* Title and subtitle */}
        <h2 className="text-2xl md:text-[48px]  font-philosopher font-normal text-center mb-2">About Meenal Khandelwal</h2>
        <div className="flex justify-center mb-2">
          <span className="w-16 h-1 bg-orange-400 rounded-full mx-2 mt-3" />
        </div>
        <p className="text-center font-inter font-normal text-gray-700 max-w-4xl mx-auto mb-8 text-sm md:text-[18px]">
          I, a believer in cosmic powers and a world beyond the one we live in, am here to share my learnings with you and guide you along the path of this beautiful journey called Life.
        </p>
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Photo */}
          <div className="flex-shrink-0 w-56 md:w-72 lg:w-80 mx-auto md:mx-0">
            <img src={photo} alt="Meenal Khandelwal" className="w-full h-auto rounded-xl shadow-lg object-contain bg-white" />
          </div>
          {/* Text content */}
          <div className="flex-1 w-full">
            <h3 className="text-lg md:text-2xl font-semibold mb-2 text-center md:text-left">Introduction</h3>
            <p className="text-gray-700 mb-6 text-center md:text-left text-sm md:text-base">
              Mystic Sonia Inc is a name that resonates with the realms of spirituality and mysticism. Renowned as a Tarot Card Reader, Astrologer, Numerologist, Akashic Record Reader, and Ethical Spell Caster, she is also a clairvoyant and medium. Her journey into the spiritual world is both fascinating and inspiring, tracing back to her father, a Reiki Grand Master and spiritualist, from whom she inherited her extraordinary gifts.
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
          </div>
        </div>
      </div>
    </section>
  );
} 