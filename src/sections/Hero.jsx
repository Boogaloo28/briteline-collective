import { C, IMG } from '../constants'

export default function Hero({ onBegin }) {
  return (
    <section className="dark-section" style={{
      position: 'relative', width: '100%', height: '100vh',
      minHeight: 640, overflow: 'hidden', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Background image */}
      <img src={IMG.docGroup} alt="" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center 30%',
        opacity: 0.18, filter: 'saturate(0.3)',
      }}/>
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at center, ${C.darker}60 0%, ${C.darker} 80%)`,
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
        }}>
          Where Recovery<br/>
          <em style={{ color: C.gold }}>Becomes</em><br/>
          Transformation
        </h1>
        <p style={{
          fontFamily: "'Jost', sans-serif", fontSize: 16, fontWeight: 300,
          color: 'rgba(245,240,232,0.85)', lineHeight: 1.75,
          maxWidth: 580, margin: '0 auto 40px',
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
