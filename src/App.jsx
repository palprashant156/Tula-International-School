import { useState } from 'react'
import CustomCursor from './components/layout/CustomCursor.jsx'
import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import ScrollProgress from './components/layout/ScrollProgress.jsx'
import TourModal from './components/layout/TourModal.jsx'
import About from './components/sections/About.jsx'
import Academics from './components/sections/Academics.jsx'
import Boarding from './components/sections/Boarding.jsx'
import Enquiry from './components/sections/Enquiry.jsx'
import Hero from './components/sections/Hero.jsx'
import Mentors from './components/sections/Mentors.jsx'
import Pillars from './components/sections/Pillars.jsx'
import Sports from './components/sections/Sports.jsx'
import StatsBar from './components/sections/StatsBar.jsx'
import Testimonials from './components/sections/Testimonials.jsx'

export default function App() {
  const [tourOpen, setTourOpen] = useState(false)

  return (
    <div
      className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-amber-soft selection:text-primary"
      id="top"
    >
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <Hero onTourOpen={() => setTourOpen(true)} />
          <StatsBar />
          <About />
          <Pillars />
          <Academics />
          <Sports />
          <Boarding />
          <Mentors />
          <Testimonials />
          <Enquiry />
        </div>
      </main>
      <Footer />
      <TourModal open={tourOpen} onClose={() => setTourOpen(false)} />
    </div>
  )
}
