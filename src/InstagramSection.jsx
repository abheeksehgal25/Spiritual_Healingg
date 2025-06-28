import React from 'react';
import { motion } from 'framer-motion';
import profileImg from './assets/profile1.png';
import insta1 from './assets/insta_1.png';
import insta2 from './assets/insta_2.png';
import insta3 from './assets/insta_3.png';
import insta4 from './assets/insta_4.png';
import insta5 from './assets/insta_5.png';
import insta6 from './assets/insta_6.png';

const postImages = [insta1, insta2, insta3, insta4, insta5, insta6];
const INSTAGRAM_URL = 'https://www.instagram.com/spiritualhealing.mk/';

const InstagramSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="w-full flex justify-center py-12 px-2 md:px-0 bg-[#EAF1F8]">
      <motion.div 
        className="w-full max-w-3xl rounded-3xl bg-white shadow-lg p-4 md:p-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.3 }
        }}
      >
        {/* Profile Info */}
        <motion.div 
          className="flex flex-col md:flex-row items-center md:items-start w-full gap-6 md:gap-10 mb-8 text-center md:text-left"
          variants={itemVariants}
        >
          {/* Profile Image */}
          <motion.div 
            className="flex-shrink-0 mx-auto md:mx-0"
            variants={profileVariants}
            whileHover="hover"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden border-4 border-[#EAF1F8] shadow-lg">
              <motion.img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
          
          {/* Profile Details */}
          <motion.div 
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full"
            variants={itemVariants}
          >
            <motion.div 
              className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.span 
                className="text-[black] text-2xl md:text-3xl font-cormorant font-bold"
                variants={itemVariants}
              >
                spiritualhealing.mk
              </motion.span>
              <motion.a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <button className="bg-[#0655A0] text-white font-lato font-medium rounded-lg px-4 py-1 text-base md:text-lg shadow-lg hover:bg-blue-700 transition-colors">
                  Follow
                </button>
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex gap-6 mt-4 text-[black] font-lato text-base md:text-lg justify-center md:justify-start w-full"
              variants={itemVariants}
            >
              <span><span className="font-bold">265</span> posts</span>
              <span><span className="font-bold">369</span> followers</span>
              <span><span className="font-bold">96</span> following</span>
            </motion.div>
            
            <motion.div 
              className="mt-4 text-[black] font-lato text-base md:text-lg text-center md:text-left w-full"
              variants={itemVariants}
            >
              <div className="font-semibold">Yogini Meenal Gupta</div>
              <div className="text-xs md:text-sm font-lato mt-1">Health & wellness website</div>
              <motion.div 
                className="text-xs md:text-sm font-lato mt-1 flex flex-wrap gap-x-2 gap-y-1"
                variants={itemVariants}
              >
                <span>🔮 Astrologer</span>
                <span>🧘‍♀️ Astroyogi</span>
                <span>🔮 Psychic</span>
                <span>🃏 Tarot reader</span>
              </motion.div>
              <motion.div 
                className="text-xs md:text-sm font-lato mt-1 text-[#0655A0] underline"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://www.youtube.com/@spiritualhealingwithmeeenal" target="_blank" rel="noopener noreferrer">
                https://www.youtube.com/@spiritualhealingwithmeeenal
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Posts Grid */}
        <motion.div 
          className="w-full grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={containerVariants}
        >
          {postImages.map((img, idx) => (
            <motion.a 
              key={idx} 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block rounded-lg overflow-hidden shadow-lg bg-gray-100"
              variants={imageVariants}
              whileHover="hover"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <motion.img 
                src={img} 
                alt={`Instagram post ${idx + 1}`} 
                className="w-full h-32 md:h-48 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InstagramSection; 