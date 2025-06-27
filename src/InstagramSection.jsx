import React from 'react';
import profileImg from './assets/profile1.png';
import insta1 from './assets/insta_1.png';
import insta2 from './assets/insta_2.png';
import insta3 from './assets/insta_3.png';
import insta4 from './assets/insta_4.png';
import insta5 from './assets/insta_5.png';
import insta6 from './assets/insta_6.png';

const postImages = [insta1, insta2, insta3, insta4, insta5, insta6];
const INSTAGRAM_URL = 'https://www.instagram.com/spiritualhealing.mk/';

const InstagramSection = () => (
  <section className="w-full flex justify-center py-12 px-2 md:px-0 bg-[#EAF1F8] animate-fadeInUp">
    <div className="w-full max-w-3xl rounded-3xl bg-white shadow-lg p-4 md:p-10 flex flex-col items-center hover:card-pop transition-transform">
      {/* Profile Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-6 md:gap-10 mb-8 text-center md:text-left">
        {/* Profile Image */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden border-4 border-[#EAF1F8]">
            <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Profile Details */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full justify-center md:justify-start">
            <span className="text-[black] text-2xl md:text-3xl font-cormorant font-bold">spiritualhealing.mk</span>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#0655A0] text-white font-lato font-medium rounded-lg px-4 py-1 text-base md:text-lg shadow hover:bg-blue-700 transition hover:btn-glow">Follow</button>
            </a>
          </div>
          <div className="flex gap-6 mt-4 text-[black] font-lato text-base md:text-lg justify-center md:justify-start w-full">
            <span><span className="font-bold">265</span> posts</span>
            <span><span className="font-bold">369</span> followers</span>
            <span><span className="font-bold">96</span> following</span>
          </div>
          <div className="mt-4 text-[black] font-lato text-base md:text-lg text-center md:text-left w-full">
            <div className="font-semibold">Yogini Meenal Gupta</div>
            <div className="text-xs md:text-sm font-lato mt-1">Health & wellness website</div>
            <div className="text-xs md:text-sm font-lato mt-1 flex flex-wrap gap-x-2 gap-y-1">
              <span>🔮 Astrologer</span>
              <span>🧘‍♀️ Astroyogi</span>
              <span>🔮 Psychic</span>
              <span>🃏 Tarot reader</span>
            </div>
            <div className="text-xs md:text-sm font-lato mt-1 text-[#0655A0] underline">
              <a href="https://www.youtube.com/@spiritualhealingwithmeeenal" target="_blank" rel="noopener noreferrer">
              https://www.youtube.com/@spiritualhealingwithmeeenal
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Posts Grid */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
        {postImages.map((img, idx) => (
          <a key={idx} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden shadow hover:scale-105 transition-transform bg-gray-100">
            <img src={img} alt={`Instagram post ${idx + 1}`} className="w-full h-32 md:h-48 object-cover hover:img-zoom" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default InstagramSection; 