import './App.css'
import Navbar from './Navbar'
import HeroCarousel from './HeroCarousel'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import ClientsLoveSection from './ClientsLoveSection'
import InstagramSection from './InstagramSection'
import Events from './Events'
import Achievements from './Achievements'
import Portfolio from './Portfolio'
import Footer from './Footer'

function App() {
    

  return (
    <>
      <div id="home" className="absolute -top-24" aria-hidden="true"></div>
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <ClientsLoveSection />
      <InstagramSection />
      <Events />
      <Achievements />
      <Portfolio />
      <Footer />
      {/* Remove or comment out placeholder sections below if not needed */}
      {/* <section id="contact" className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold">Contact Us Section</h1>
      </section>
      <section id="about" className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold">About Us Section</h1>
      </section> */}
    </>
  )
}

export default App
