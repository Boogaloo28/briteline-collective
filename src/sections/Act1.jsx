import { useState, useEffect } from 'react'
import { C, IMG } from '../constants'

const GUIDES = [
  {
    id: 'guide',
    name: 'The Guide',
    title: "I'll welcome you home.",
    color: C.gold,
    src: IMG.guide,
    dialogue: "Welcome. I am here to help you find your footing. Whether this is your first step or your hundredth, you belong here. Let me show you around.",
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
    dialogue: "Recovery is not a straight line. Neither is this path. But you do not have to walk it alone. I have been where you are. Let us go together.",
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
    u.rate = 0.85
    u.pitch = 1
    u.volume = 1
    // Wait for voices to load
    const voices = window.speechSynthesis.getVoices()
    const preferred = voices.find(v => v.lang === 'en-US') || voices[0]
    if (preferred) u.voice = preferred
    window.speechSynthesis.speak(u)
  }
}

export default function Act1({ onComplete }) {
  const [active, setActive] = useState(null)
  const [phase, setPhase] = useState('selecting')

  useEffect(() => {
    // Pre-load voices on mount
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices()
    }
  }, [])

  const handleSelect = (guide) => {
    if (phase !== 'selecting') return
    setActive(guide)
    setPhase('playing')
    speak(guide.dialogue)

    // 9 seconds — enough for any of the dialogues to finish speaking
    // plus time for deaf/slow readers to read the text
    setTimeout(() => {
      window.speechSynthesis && window.speechSynthesis.cancel()
      setPhase('done')
      setTimeout(() => onComplete(), 800)
    }, 9000)
  }

  return (
    <section style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: C.darker,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '40px 24px',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at center, ${C.forest}20 0%, transparent 70%)`,
        pointerEvents: 'none',
      }}/>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, width: '100%' }}>

        {/* Eyebrow */}
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: 11, fontWeight: 500,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: C.gold, marginBottom: 16,
        }}>
          {phase === 'playing' ? `${active?.name} speaks` : 'Choose your guide'}
        </p>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(32px,5vw,56px)', fontWeight: 300,
          color: '#FFFFFF', lineHeight: 1.1, marginBottom: 40,
        }}>
          {phase === 'selecting' && 'Choose your guide.'}
          {phase === 'playing' && <><em style={{ color: active?.color }}>{active?.name}</em></>}
          {phase === 'done' && 'Welcome to Briteline.'}
        </h2>

        {/* Dialogue box — only shows when playing */}
        {phase === 'playing' && active && (
          <div style={{
            maxWidth: 600, margin: '0 auto 40px',
            padding: '24px 32px',
            background: `${active.color}15`,
            border: `1px solid ${active.color}40`,
            borderLeft: `3px solid ${active.color}`,
            borderRadius: 4,
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20, fontWeight: 300,
              color: '#FFFFFF',
              lineHeight: 1.8, fontStyle: 'italic',
            }}>
              "{active.dialogue}"
            </p>
          </div>
        )}

        {/* Guide portraits */}
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
          {GUIDES.map(guide => (
            <div key={guide.id}
              onClick={() => handleSelect(guide)}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                cursor: phase === 'selecting' ? 'pointer' : 'default',
                opacity: phase === 'playing' && active?.id !== guide.id ? 0.25 : 1,
                transition: 'all 0.4s ease',
                transform: active?.id === guide.id ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              <div style={{
                width: 120, height: 120, borderRadius: '50%',
                overflow: 'hidden', marginBottom: 14,
                border: `3px solid ${active?.id === guide.id ? guide.color : 'rgba(255,255,255,0.15)'}`,
                boxShadow: active?.id === guide.id ? `0 0 32px ${guide.color}60` : 'none',
                transition: 'all 0.35s ease',
              }}>
                <img
                  src={guide.src}
                  alt={guide.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                />
              </div>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18, fontWeight: 500,
                color: guide.color, marginBottom: 4,
              }}>
                {guide.name}
              </p>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 12, fontWeight: 300,
                color: 'rgba(245,240,232,0.65)',
                fontStyle: 'italic',
              }}>
                {guide.title}
              </p>
            </div>
          ))}
        </div>

        {/* Skip button */}
        {phase === 'selecting' && (
          <button
            onClick={onComplete}
            style={{
              marginTop: 48,
              background: 'none', border: 'none',
              fontFamily: "'Jost', sans-serif",
              fontSize: 11, fontWeight: 500,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.3)',
              cursor: 'pointer', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'rgba(245,240,232,0.65)'}
            onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.3)'}
          >
            Skip → Enter Site
          </button>
        )}

        {/* Continue button appears after speech */}
        {phase === 'playing' && (
          <button
            onClick={() => { window.speechSynthesis && window.speechSynthesis.cancel(); onComplete() }}
            style={{
              marginTop: 32,
              background: 'none', border: `1px solid rgba(245,240,232,0.2)`,
              borderRadius: 2, padding: '9px 24px',
              fontFamily: "'Jost', sans-serif",
              fontSize: 11, fontWeight: 500,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.5)',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.color = '#FFFFFF'; e.target.style.borderColor = 'rgba(245,240,232,0.5)' }}
            onMouseLeave={e => { e.target.style.color = 'rgba(245,240,232,0.5)'; e.target.style.borderColor = 'rgba(245,240,232,0.2)' }}
          >
            Continue → Enter Site
          </button>
        )}

      </div>
    </section>
  )
}
