import { useState, useEffect } from 'react'
import { C, IMG } from '../constants'

const GUIDES = [
  {
    id: 'guide',
    name: 'The Guide',
    title: "I'll welcome you home.",
    color: C.gold,
    src: IMG.guide,
    dialogue: "Welcome. I'm here to help you find your footing. Whether this is your first step or your hundredth, you belong here. Let me show you around.",
  },
  {
    id: 'advocate',
    name: 'The Advocate',
    title: "I'll show you our mission.",
    color: C.terra,
    src: IMG.advocate,
    dialogue: "We fight for people. For dignity. For second chances. Let me show you what Briteline stands for and why this work matters.",
  },
  {
    id: 'mentor',
    name: 'The Mentor',
    title: "I'll walk beside you.",
    color: C.forest,
    src: IMG.mentor,
    dialogue: "Recovery isn't a straight line. Neither is this path. But you don't have to walk it alone. I've been where you are. Let's go together.",
  },
  {
    id: 'leader',
    name: 'The Leader',
    title: "I'll call you to action.",
    color: C.purple,
    src: IMG.leader,
    dialogue: "You already have what it takes. The question is what you do with it. Let me show you how Briteline turns experience into impact.",
  },
]

function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.rate = 0.9
    u.pitch = 1
    u.volume = 1
    const voices = window.speechSynthesis.getVoices()
    const preferred = voices.find(v => v.lang === 'en-US') || voices[0]
    if (preferred) u.voice = preferred
    window.speechSynthesis.speak(u)
  }
}

export default function Act1({ onComplete }) {
  const [active, setActive] = useState(null)
  const [dialogue, setDialogue] = useState('')
  const [phase, setPhase] = useState('selecting') // selecting | playing | done

  // Pre-load voices
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices()
    }
  }, [])

  const handleSelect = (guide) => {
    if (phase !== 'selecting') return
    setActive(guide)
    setPhase('playing')
    setDialogue(guide.dialogue)
    speak(guide.dialogue)

    setTimeout(() => {
      window.speechSynthesis && window.speechSynthesis.cancel()
      setPhase('done')
      setTimeout(() => {
        onComplete()
      }, 1000)
    }, 7000)
  }

  return (
    <section style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: C.darker,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '40px 24px',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at center, ${C.forest}20 0%, transparent 70%)`, pointerEvents: 'none' }}/>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, width: '100%' }}>
        <p className="eyebrow" style={{ marginBottom: 16 }}>
          {phase === 'playing' ? `${active?.name} speaks` : 'Choose your guide'}
        </p>
        <h2 className="serif" style={{
          fontSize: 'clamp(32px,5vw,56px)', fontWeight: 300,
          color: '#FFFFFF', lineHeight: 1.1, marginBottom: 48,
        }}>
          {phase === 'selecting'
            ? 'Choose your guide.'
            : phase === 'playing'
            ? <><em style={{ color: active?.color }}>{active?.name}</em></>
            : 'Welcome to Briteline.'
          }
        </h2>

        {/* Dialogue box */}
        {dialogue && (
          <div style={{
            maxWidth: 560, margin: '0 auto 40px',
            padding: '20px 28px',
            background: `${active?.color}12`,
            border: `1px solid ${active?.color}30`,
            borderLeft: `3px solid ${active?.color}`,
            borderRadius: 4,
            animation: 'fadeIn 0.4s ease',
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18, fontWeight: 300,
              color: '#F5F0E8', lineHeight: 1.75, fontStyle: 'italic',
            }}>
              "{dialogue}"
            </p>
          </div>
        )}

        {/* Guide portraits */}
        <div style={{ display: 'flex', gap: 28, justifyContent: 'center', flexWrap: 'wrap' }}>
          {GUIDES.map(guide => (
            <div key={guide.id}
              onClick={() => handleSelect(guide)}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                cursor: phase === 'selecting' ? 'pointer' : 'default',
                opacity: phase === 'playing' && active?.id !== guide.id ? 0.3 : 1,
                transition: 'all 0.4s ease',
                transform: active?.id === guide.id ? 'scale(1.08)' : 'scale(1)',
              }}
            >
              <div style={{
                width: 110, height: 110, borderRadius: '50%',
                overflow: 'hidden', marginBottom: 14,
                border: `3px solid ${active?.id === guide.id ? guide.color : 'rgba(255,255,255,0.15)'}`,
                boxShadow: active?.id === guide.id ? `0 0 32px ${guide.color}50` : 'none',
                transition: 'all 0.35s ease',
              }}>
                <img src={guide.src} alt={guide.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}/>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 500, color: guide.color, marginBottom: 4 }}>{guide.name}</p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 300, color: 'rgba(245,240,232,0.6)', fontStyle: 'italic' }}>{guide.title}</p>
            </div>
          ))}
        </div>

        {/* Skip */}
        {phase === 'selecting' && (
          <button onClick={onComplete} style={{
            marginTop: 44, background: 'none', border: 'none',
            fontFamily: "'Jost', sans-serif", fontSize: 11,
            fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.3)', cursor: 'pointer',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'rgba(245,240,232,0.6)'}
            onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.3)'}
          >
            Skip → Enter Site
          </button>
        )}
      </div>
    </section>
  )
}
