import { useState, useEffect } from 'react'
import { C } from '../constants'

export default function NavBar({ onOrg }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <span className="nav-brand">Briteline Collective</span>
        <div className="nav-links">
          {[
            ['SERVICES',  's-services'],
            ['FOUNDERS',  's-founders'],
            ['JOURNEY',   's-journey'],
            ['IMPACT',    's-impact'],
            ['CONTACT',   's-contact'],
          ].map(([label, id]) => (
            <button key={id} className="nav-link" onClick={() => scrollTo(id)}>{label}</button>
          ))}
          <button
            onClick={onOrg}
            style={{
              padding: '8px 18px',
              border: `1.5px solid ${C.gold}`,
              borderRadius: 2,
              background: 'transparent',
              color: scrolled ? C.ink : C.gold,
              fontFamily: "'Jost', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              transition: 'all 0.25s',
            }}
          >
            For Organizations
          </button>
        </div>
      </div>
    </nav>
  )
}
