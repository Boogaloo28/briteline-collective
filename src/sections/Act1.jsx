import { useState, useEffect } from 'react'
import { C, IMG } from '../constants'

const GUIDES = [
  {
    id: 'guide',
    name: 'The Guide',
    title: "I'll welcome you home.",
    color: C.gold,
    src: IMG.guide,
    gender: 'male',
    voiceNames: ['Daniel', 'David', 'Microsoft David', 'Aaron', 'Bruce', 'Fred'],
    pitch: 0.7,
    rate: 0.75,
    lang: 'en-US',
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
    gender: 'female',
    voiceNames: ['Zira', 'Microsoft Zira', 'Eva', 'Allison', 'Samantha'],
    pitch: 1.05,
    rate: 0.92,
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
    gender: 'female',
    voiceNames: ['Tessa', 'Karen', 'Moira', 'Susan', 'Veena', 'Fiona'],
    pitch: 1.15,
    rate: 0.82,
    lang: 'en-US',
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
    gender: 'male',
    voiceNames: ['Mark', 'Microsoft Mark', 'James', 'Tom', 'Alex', 'Oliver'],
    pitch: 1.35,
    rate: 1.0,
    lang: 'en-US',
    sentences: [
      "You already have what it takes.",
      "The question is what you do with it.",
      "Let me show you how Briteline turns experience into impact.",
    ],
  },
]

const FEMALE_FALLBACK = ['Samantha', 'Karen', 'Tessa', 'Moira', 'Zira', 'Eva', 'Allison']
const MALE_FALLBACK = ['Daniel', 'Alex', 'Tom', 'Fred', 'Oliver', 'David', 'Mark', 'James']

function pickVoice(voices, guide) {
  const langPrefix = guide.lang.split('-')[0]
  const langVoices = voices.filter(v => v.lang.startsWith(langPrefix))
  const pool = langVoices.length > 0 ? langVoices : voices
  const targetNames = guide.voiceNames || (guide.gender === 'female' ? FEMALE_FALLBACK : MALE_FALLBACK)

  for (const name of targetNames) {
    const v = pool.find(v => v.lang === guide.lang && v.name.includes(name))
    if (v) return v
  }
  for (const name of targetNames) {
    const v = pool.find(v => v.name.includes(name))
    if (v) return v
  }
  return pool[0] || null
}

function phoneticize(text) {
  return text.replace(/Briteline/g, 'Bright Line')
}

function speakSentences(guide, onDone) {
  if (!('speechSynthesis' in window)) { onDone(); return }
  window.speechSynthesis.cancel()

  const voices = window.speechSynthesis.getVoices()
  const matchedVoice = pickVoice(voices, guide)
  let idx = 0

  function speakNext() {
    if (idx >= guide.sentences.length) { onDone(); return }
    const u = new SpeechSynthesisUtterance(phoneticize(guide.sentences[idx]))
    u.pitch = guide.pitch
    u.rate = guide.rate
    u.volume = 1
    if (matchedVoice) u.voice = matchedVoice

    u.onend = () => { idx++; speakNext() }
    u.onerror = () => { idx++; speakNext() }
    window.speechSynthesis.speak(u)
  }

  setTimeout(speakNext, 150)
}

export default function Act1({ onComplete }) {
  const [active, setActive] = useState(null)
  const [phase, setPhase] = useState('selecting')
  const [heard, setHeard] = useState([])

  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices()
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices()
    }
    return () => {
      window.speechSynthesis && window.speechSynthesis.cancel()
    }
  }, [])

  const handleSelect = (guide) => {
    if (phase === 'playing') return
    setActive(guide)
    setPhase('playing')

    speakSentences(guide, () => {
      setHeard(prev => prev.includes(guide.id) ? prev : [...prev, guide.id])
      setPhase('selecting')
    })
  }

  const handleSkip = () => {
    window.speechSynthesis && window.speechSynthesis.cancel()
    onComplete()
  }

  return (
    <section style={{ position: 'fixed', inset: 0, zIndex: 200, background: C.darker, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at center, ${C.forest}20 0%, transparent 70%)`, pointerEvents: 'none' }}/>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, width: '100%' }}>

        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.gold, marginBottom: 16 }}>
          {phase === 'playing' ? `${active?.name} speaks` : 'Choose your guide'}
        </p>

        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px,5vw,56px)', fontWeight: 300, color: '#FFFFFF', lineHeight: 1.1, marginBottom: 40 }}>
          {phase === 'selecting' && (active ? 'Hear another voice — or enter the site.' : 'Choose your guide.')}
          {phase === 'playing' && <em style={{ color: active?.color }}>{active?.name}</em>}
        </h2>

        {phase === 'playing' && active && (
          <div style={{ maxWidth: 600, margin: '0 auto 40px', padding: '24px 32px', background: `${active.color}15`, border: `1px solid ${active.color}40`, borderLeft: `3px solid ${active.color}`, borderRadius: 4 }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: '#FFFFFF', lineHeight: 1.8, fontStyle: 'italic' }}>
              "{active.sentences.join(' ')}"
            </p>
          </div>
        )}

        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
          {GUIDES.map(guide => {
            const isActive = active?.id === guide.id
            const isPlaying = phase === 'playing'
            const isHeard = heard.includes(guide.id)
            const dimmed = isPlaying && !isActive
            return (
              <div key={guide.id} onClick={() => handleSelect(guide)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: isPlaying ? 'default' : 'pointer', opacity: dimmed ? 0.25 : 1, transition: 'all 0.4s ease', transform: isActive && isPlaying ? 'scale(1.1)' : 'scale(1)' }}>
                <div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', marginBottom: 14, border: `3px solid ${isActive && isPlaying ? guide.color : isHeard ? `${guide.color}80` : 'rgba(255,255,255,0.15)'}`, boxShadow: isActive && isPlaying ? `0 0 32px ${guide.color}60` : 'none', transition: 'all 0.35s ease', position: 'relative' }}>
                  <img src={guide.src} alt={guide.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}/>
                  {isHeard && !isActive && (
                    <div style={{ position: 'absolute', top: 6, right: 6, width: 22, height: 22, borderRadius: '50%', background: guide.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: 12, fontWeight: 700 }}>✓</div>
                  )}
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 500, color: guide.color, marginBottom: 4 }}>{guide.name}</p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 300, color: 'rgba(245,240,232,0.65)', fontStyle: 'italic' }}>{guide.title}</p>
              </div>
            )
          })}
        </div>

        {phase === 'selecting' && (
          <button onClick={handleSkip} style={{ marginTop: 48, background: active ? C.gold : 'none', border: active ? 'none' : 'none', borderRadius: active ? 2 : 0, padding: active ? '12px 28px' : 0, fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: active ? 700 : 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: active ? C.darker : 'rgba(245,240,232,0.3)', cursor: 'pointer', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { if (!active) e.target.style.color = 'rgba(245,240,232,0.65)' }}
            onMouseLeave={e => { if (!active) e.target.style.color = 'rgba(245,240,232,0.3)' }}>
            {active ? 'Continue → Enter Site' : 'Skip → Enter Site'}
          </button>
        )}

      </div>
    </section>
  )
}
