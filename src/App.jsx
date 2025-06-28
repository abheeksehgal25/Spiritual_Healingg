import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import BlogSection from './BlogSection'
import BlogPage from './BlogPage'

function HomePage() {
  return (
    <>
      <div id="home" className="absolute -top-24" aria-hidden="true"></div>
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <ClientsLoveSection />
      <InstagramSection />
      <Achievements />
      <Events />
      <BlogSection />
      {/* <Portfolio /> */}
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
