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
  const pool = langVoices.length > 0 ? langVoices :
