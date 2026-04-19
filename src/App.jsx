import { useState } from 'react'
import NavBar from './components/NavBar'
import CredBar from './components/CredBar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import WRAPSection from './sections/WRAPSection'
import MHFASection from './sections/MHFASection'
import PeerCJSection from './sections/PeerCJSection'
import Mission from './sections/Mission'
import Founders from './sections/Founders'
import Together from './sections/Together'
import DOCTraining from './sections/DOCTraining'
import Journey from './sections/Journey'
import Impact from './sections/Impact'
import Endorsements from './sections/Endorsements'
import MediaPress from './sections/MediaPress'
import Schedule from './sections/Schedule'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [view, setView] = useState('main')

  if (view === 'org') {
    return (
      <div style={{ minHeight: '100vh', background: '#F5F0E8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4A832', marginBottom: 14 }}>For Organizations</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 44, fontWeight: 300, color: '#1A2218', marginBottom: 20 }}>Coming Soon</h2>
          <button
            onClick={() => setView('main')}
            className="btn-forest"
            style={{ padding: '11px 24px', fontSize: 12 }}
          >
            ← Back to Main Site
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <NavBar onOrg={() => setView('org')} />
      <Hero onBegin={() => document.getElementById('s-services')?.scrollIntoView({ behavior: 'smooth' })} />
      <CredBar />
      <Services />
      <WRAPSection />
      <MHFASection />
      <PeerCJSection />
      <Mission />
      <Founders />
      <Together />
      <DOCTraining />
      <Journey />
      <Impact />
      <Endorsements />
      <MediaPress />
      <Schedule />
      <Contact />
      <Footer />
    </>
  )
}
