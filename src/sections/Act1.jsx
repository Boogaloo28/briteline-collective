import { useState, useEffect, useRef } from 'react'
import { C, IMG } from '../constants'

const GUIDES = [
  {
    id: 'guide',
    name: 'The Guide',
    title: "I'll welcome you home.",
    color: C.gold,
    src: IMG.guide,
    gender: 'male',
    pitch: 0.8,
    rate: 0.78,
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
    gender: 'female',
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
    gender: 'male',
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

// Common voice name patterns by gender across Mac, Windows, iOS, Android
const FEMALE_VOICE_NAMES = [
  'Samantha', 'Karen', 'Tessa', 'Moira', 'Veena', 'Fiona', 'Victoria',
  'Zira', 'Eva', 'Susan', 'Ava', 'Allison', 'Kate', 'Serena',
  'female', 'Female',
]
const MALE_VOICE_NAMES = [
  'Daniel', 'Alex', 'Tom', 'Fred', 'Oliver', 'Lee', 'Aaron', 'Bruce',
  'David', 'Mark', 'James', 'Arthur',
  'male', 'Male',
]

function pickVoice(voices, gender, langCode) {
  const langPrefix = langCode.split('-')[0]
  const langVoices = voices.filter(v => v.lang.startsWith(langPrefix))
  const pool = langVoices.length > 0 ? langVoices : voices
  const targetNames = gender === 'female' ? FEMALE_VOICE_NAMES : MALE_VOICE_NAMES

  // First: exact region match (e.g. en-US, en-AU) AND gender
  for (const name of targetNames) {
    const v = pool.find(v => v.lang === langCode && v.name.includes(name))
    if (v) return v
  }
  // Then: any matching language with the right gender
  for (const name of targetNames) {
    const v = pool.find(v => v.name.includes(name))
    if (v) return v
  }
  // Fallback — first available voice
  return pool[0] || null
}

function speakSentences(guide, onDone) {
  if (!('speechSynthesis' in window)) { onDone(); return }
  window.speechSynthesis.cancel()

  const voices = window.speechSynthesis.getVoices()
  const matchedVoice = pickVoice(voices, guide.gender, guide.lang)
  let idx = 0

  function speakNext() {
    if (idx >= guide.sentences.length) { onDone(); return }
    const u = new SpeechSynthesisUtterance(guide.sentences[idx])
    u.pitch = guide.pitch
    u.rate = guide.rate
    u.volume = 1
    if (matchedVoice) u.voice = matchedVoice

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
      alignItems: 'center', justifyContent: 'cen
