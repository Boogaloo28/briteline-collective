import { useState, useEffect, useRef } from 'react'
import { C, IMG } from '../constants'

const GUIDES = [
  {
    id: 'guide',
    name: 'The Guide',
    title: "I'll welcome you home.",
    color: C.gold,
    src: IMG.guide,
    pitch: 0.8,
    rate: 0.78,
    lang: 'en-US',
    // Split into short sentences — fixes Chrome cutoff bug
    sentences: [
      "Welcome.",
      "I am here to help you find your footing.",
      "Whether this is your first step or your hundredth, you belong here.",
      "Let me show you around.",
    ],
  },
  {
    id: 'advocate',
    name: 'The Advocate',
    title: "I'll show you our mission.",
    color: C.terra,
    src: IMG.advocate,
    pitch: 1.1,
    rate: 0.88,
    lang: 'en-US',
    sentences: [
      "We fight for people.",
      "For dignity.",
      "For second chances.",
      "Let me show you what Briteline stands for, and why this work matters.",
    ],
  },
  {
    id: 'mentor',
    name: 'The Mentor',
    title: "I'll walk beside you.",
    color: C.forest,
    src: IMG.mentor,
    pitch: 1.15,
    rate: 0.82,
    lang: 'en-AU',
    sentences: [
      "Recovery is not a straight line.",
      "Neither is this path.",
      "But you do not have to walk it alone.",
      "I have been where you are.",
      "Let us go together.",
    ],
  },
  {
    id: 'leader',
    name: 'The Leader',
    title: "I'll call you to action.",
    color: C.purple,
    src: IMG.leader,
    pitch: 1.2,
    rate: 0.95,
    lang: 'en-GB',
    sentences: [
      "You already have what it takes.",
      "The question is what you do with it.",
      "Let me show you how Briteline turns experience into impact.",
    ],
  },
]

function speakSentences(guide, onDone) {
  if (!('speechSynthesis' in window)) { onDone(); return }
  window.speechSynthesis.cancel()

  const voices = window.speechSynthesis.getVoices()
  let idx = 0

  function speakNext() {
    if (idx >= guide.sentences.length) { onDone(); return }
    const u = new SpeechSynthesisUtterance(guide.sentences[idx])
    u.pitch = guide.pitch
    u.rate = guide.rate
    u.volume = 1

    // Try to match language and differentiate voices
    const langVoices = voices.filter(v => v.lang.startsWith(guide.lang.split('-')[0]))
    if (langVoices.length > 0) {
      // Pick different voice index for each guide
      const voiceIdx = GUIDES.findIndex(g => g.id === guide.id) % langVoices.length
      u.voice = langVoices[voiceIdx]
    }

    u.onend = () => { idx++; speakNext() }
    u.onerror = () => { idx++; speakNext() }
    window.speechSynthesis.speak(u)
  }

  // Small delay ensures voices are ready
  setTimeout(speakNext, 150)
}

export default function Act1({ onComplete }) {
  const [active, setActive] = useState(null)
  const [phase, setPhase] = useState('selecting')
  const timerRef = useRef(null)

  useEffect(() => {
    // Pre-load voices
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices()
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices()
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      window.speechSynthesis && window.speechSynthesis.cancel()
    }
  }, [])

  const handleSelect = (guide) => {
    if (phase !== 'selecting') return
    setActive(guide)
    setPhase('playing')

    speakSentences(guide, () => {
      setPhase('done')
      timerRef.current = setTimeout(() => onComplete(), 1500)
    })
  }

  const handleSkip = () => {
    window.speechSynthesis && window.speechSynthesis.cancel()
    if (timerRef.current) clearTimeout(timerRef.current)
    onComplete()
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

        <p style={{
          fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: C.gold, marginBottom: 16,
        }}>
          {phase === 'playing' ? `${active?.name} speaks` : 'Choose your guide'}
        </p>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(32px,5vw,56px)', fontWeight: 300,
          color: '#FFFFFF', lineHeight: 1.1, marginBottom: 40,
        }}>
          {phase === 'selecting' && 'Choose your guide.'}
          {phase === 'playing' && <em style={{ color: active?.color }}>{active?.name}</em>}
          {phase === 'done' && 'Welcome to Briteline.'}
        </h2>

        {/* Dialogue */}
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
              color: '#FFFFFF', lineHeight: 1.8, fontStyle: 'italic',
            }}>
              "{active.sentences.join(' ')}"
            </p>
          </div>
        )}

        {/* Portraits */}
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
                <img src={guide.src} alt={guide.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}/>
              </div>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18, fontWeight: 500, color: guide.color, marginBottom: 4,
              }}>{guide.name}</p>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 12, fontWeight: 300,
                color: 'rgba(245,240,232,0.65)', fontStyle: 'italic',
              }}>{guide.title}</p>
            </div>
          ))}
        </div>

        {/* Skip */}
        {phase === 'selecting' && (
          <button onClick={handleSkip} style={{
            marginTop: 48, background: 'none', border: 'none',
            fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.3)', cursor: 'pointer',
          }}
            onMouseEnter={e => e.target.style.color = 'rgba(245,240,232,0.65)'}
            onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.3)'}
          >
            Skip → Enter Site
          </button>
        )}

        {/* Continue while playing */}
        {phase === 'playing' && (
          <button onClick={handleSkip} style={{
            marginTop: 32, background: 'none',
            border: '1px solid rgba(245,240,232,0.2)', borderRadius: 2,
            padding: '9px 24px', fontFamily: "'Jost', sans-serif",
            fontSize: 11, fontWeight: 500, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'rgba(245,240,232,0.5)', cursor: 'pointer',
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
