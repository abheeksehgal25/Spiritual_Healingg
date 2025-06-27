import './App.css';
import logo from './assets/logo.svg';
import fb from './assets/fb.svg';
import yt from './assets/yt.svg';
import insta from './assets/insta.png';
import call from './assets/call.svg';
import mail from './assets/mail.svg';
import location from './assets/location.svg';

export default function Footer() {
  return (
    <footer className="bg-[#222222] py-8 text-white">
      {/* Unified Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="text-start">
            <h2 className="text-[30px] font-philosopher mb-2 relative inline-block after:block after:h-[2px] after:w-[40%] after:bg-[#FF7010] after:mt-1">
              Our Newsletter
            </h2>
            <p className="font-inter text-sm">
              Get Your Daily Horoscope, Daily Love scope <br />
              and Daily Tarot Directly In Your Inbox
            </p>
          </div>
          <div className="relative h-[50px] w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-full px-4 pr-[120px] py-2 rounded text-white bg-[#BDB9B9] placeholder-white"
            />
            <button className="absolute top-1/2 -translate-y-1/2 right-2 bg-[#FF7010] px-4 py-2 rounded hover:bg-[#BDB9B9] transition-all">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <hr className="border-gray-600 mb-8" />
        {/* Footer Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Column 1: Logo + About */}
          <div className="flex flex-col">
            <img src={logo} alt="Spiritual Bliss Logo" className="w-40 mb-4" />
            <p className="text-sm mb-4 font-inter">
              Certified Tarot Reader, Teacher | Angel Therapist | Ethical Spells Casting
            </p>
            <p className="text-sm mb-2">Follow Us On</p>
            <div className="flex gap-4 mt-2">
                <a href="">
              <img src={fb} alt="Facebook" className="w-6 h-6 hover:scale-110 transition-transform" /></a>
              <a href="https://www.instagram.com/spiritualhealing.mk?igsh=MWs4amZvbG01ZDNsaw==">
              <img src={insta} alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" /></a>
              <a href="youtube.com/@spiritualhealingwithmeeenal?feature=shared">
              <img src={yt} alt="YouTube" className="w-6 h-6 hover:scale-110 transition-transform" /></a>
            </div>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-philosopher font-semibold relative mb-4 after:block after:bg-orange-500 after:h-[2px] after:w-10 after:mt-1">
              Quick Links
            </h3>
            <ul className="text-sm space-y-2 text-[10px] font-inter">
              <li className="flex items-center gap-2">
                <span className="w-[6px] h-[6px] bg-orange-500 inline-block rounded-full"></span>
                Privacy Policy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-[6px] h-[6px] bg-orange-500 inline-block rounded-full"></span>
                Terms of Use
              </li>
            </ul>
          </div>
          {/* Column 3: Social Media Links */}
          <div>
            <h3 className="text-lg font-philosopher font-semibold relative mb-4 after:block after:bg-orange-500 after:h-[2px] after:w-10 after:mt-1">
              Social Media Links
            </h3>
            <ul className="text-sm space-y-2  text-[10px] ">
              <li className="flex items-center gap-2">
                <span className="w-[6px] h-[6px] bg-orange-500 inline-block rounded-full"></span>
                <a href="youtube.com/@spiritualhealingwithmeeenal?feature=shared">YouTube</a>
                
              </li>
              <li className="flex items-center gap-2">
                <span className="w-[6px] h-[6px] bg-orange-500 inline-block rounded-full"></span>
                <a href="
https://www.instagram.com/spiritualhealing.mk?igsh=MWs4amZvbG01ZDNsaw==">Instagram</a>
              </li>
            </ul>
          </div>
          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-philosopher font-semibold relative mb-4 after:block after:bg-orange-500 after:h-[2px] after:w-10 after:mt-1">
              Contact Information
            </h3>
            <ul className="text-sm space-y-2  text-[10px] ">
              <li className="flex items-center gap-2">
                <img src={location} alt="Location" className="w-3 h-3" />
                Ghaziabad, Uttar Pradesh
              </li>
              <li className="flex items-center gap-2">
                <img src={mail} alt="Mail" className="w-3 h-3" />
                meenalkhandelwal55@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <img src={call} alt="Call" className="w-3 h-3" />
                +(91)7017094225
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-center text-xs bg-black text-white w-full py-3">
        &copy; 2025 Spiritual Bliss. - Developed by House Of MarkTech
      </div>
    </footer>
  );
} 