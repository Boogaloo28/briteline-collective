import { C, IMG } from '../constants'

export default function Hero({ onBegin }) {
  return (
    <section className="dark-section" style={{
      position: 'relative', width: '100%', height: '100vh',
      minHeight: 640, overflow: 'hidden', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Background video */}
      <video
        src="/videos/hero-walk.mp4"
        poster="/images/hero-walk-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center center',
          opacity: 0.45,
        }}
      />

      {/* Darkening gradient — keeps text readable over varying video brightness */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to bottom, ${C.darker}70 0%, ${C.darker}40 35%, ${C.darker}50 65%, ${C.darker}90 100%)`,
      }}/>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: 900 }}>
        <p style={{
          fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: C.gold, marginBottom: 24,
        }}>
          Wellness · Advocacy · Training · Systems Change
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(52px, 8vw, 100px)',
          fontWeight: 300, lineHeight: 1.05, color: '#FFFFFF', marginBottom: 28,
          textShadow: '0 2px 24px rgba(0,0,0,0.45)',
        }}>
          Where Recovery<br/>
          <em style={{ color: C.gold }}>Becomes</em><br/>
          Transformation
        </h1>
        <p style={{
          fontFamily: "'Jost', sans-serif", fontSize: 16, fontWeight: 300,
          color: 'rgba(245,240,232,0.92)', lineHeight: 1.75,
          maxWidth: 580, margin: '0 auto 40px',
          textShadow: '0 1px 12px rgba(0,0,0,0.5)',
        }}>
          A multidisciplinary collective of facilitators, peer support professionals,
          wellness instructors, justice advocates, and trauma-informed practitioners —
          aligning expertise to drive wellness, equity, and systems transformation.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-gold" onClick={onBegin}>Begin Your Journey</button>
          <button className="btn-outline"
            onClick={() => document.getElementById('s-services')?.scrollIntoView({ behavior: 'smooth' })}>
            View Services
          </button>
        </div>
        <p style={{
          marginTop: 56, fontFamily: "'Jost', sans-serif", fontSize: 10,
          fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'rgba(196,168,50,0.5)',
        }}>Scroll</p>
        <div style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${C.gold}40, transparent)`, margin: '8px auto 0' }}/>
      </div>
    </section>
  )
}
