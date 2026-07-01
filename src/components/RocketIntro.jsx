import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Cartoonish rocket-launch splash shown once per page load.
// Idle wobble -> rumble -> blast off -> the whole sky panel lifts to reveal the site.
export default function RocketIntro() {
  const [phase, setPhase] = useState('idle') // idle -> launch
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setGone(true); return }

    document.body.style.overflow = 'hidden'
    const t1 = setTimeout(() => setPhase('launch'), 950)   // ignite + blast off
    const t2 = setTimeout(() => setGone(true), 2250)        // lift the panel away
    return () => { clearTimeout(t1); clearTimeout(t2); document.body.style.overflow = '' }
  }, [])

  useEffect(() => { if (gone) document.body.style.overflow = '' }, [gone])

  const launching = phase === 'launch'

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="rocket-intro"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
        >
          {/* twinkling stars */}
          {STARS.map((s, i) => (
            <motion.span
              key={i}
              className="ri-star"
              style={{ left: s.x + '%', top: s.y + '%', width: s.r, height: s.r }}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.15, 0.8] }}
              transition={{ duration: s.d, repeat: Infinity, delay: s.delay }}
            />
          ))}

          {/* cartoon clouds */}
          <motion.div className="ri-cloud c1" animate={{ x: [0, 14, 0] }} transition={{ duration: 8, repeat: Infinity }} />
          <motion.div className="ri-cloud c2" animate={{ x: [0, -18, 0] }} transition={{ duration: 10, repeat: Infinity }} />

          {/* rocket + exhaust, wobbling then blasting off */}
          <motion.div
            className="ri-rocket-wrap"
            animate={
              launching
                ? { y: '-135vh', transition: { duration: 1.25, ease: [0.5, 0, 0.9, 0.2] } }
                : { y: [0, -8, 0, -8, 0], x: [0, -2, 2, -2, 0], transition: { duration: 0.95, ease: 'easeInOut' } }
            }
          >
            <Rocket />
            {/* flame */}
            <motion.div
              className="ri-flame"
              animate={
                launching
                  ? { scaleY: [1, 2.4, 2.0, 2.6], scaleX: [1, 1.15, 1, 1.2], opacity: 1 }
                  : { scaleY: [0.5, 0.9, 0.5], opacity: [0.7, 1, 0.7] }
              }
              transition={{ duration: launching ? 0.5 : 0.5, repeat: launching ? 0 : Infinity }}
            />
            {/* smoke puffs on ignition */}
            <AnimatePresence>
              {launching && SMOKE.map((p, i) => (
                <motion.span
                  key={i}
                  className="ri-smoke"
                  initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
                  animate={{ opacity: [0, 0.9, 0], scale: [0.3, 1.6, 2.2], x: p.x, y: p.y }}
                  transition={{ duration: 1.1, ease: 'easeOut', delay: p.delay }}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="ri-caption"
            animate={launching ? { opacity: 0, y: 8 } : { opacity: [0.4, 1, 0.4] }}
            transition={launching ? { duration: 0.3 } : { duration: 1.4, repeat: Infinity }}
          >
            {launching ? 'Liftoff!' : 'Preparing for launch…'}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const STARS = [
  { x: 12, y: 18, r: 5, d: 2.2, delay: 0 }, { x: 82, y: 12, r: 7, d: 2.8, delay: 0.4 },
  { x: 68, y: 26, r: 4, d: 1.9, delay: 0.8 }, { x: 24, y: 40, r: 6, d: 2.5, delay: 0.2 },
  { x: 90, y: 44, r: 5, d: 2.1, delay: 0.6 }, { x: 8, y: 62, r: 6, d: 3.0, delay: 0.3 },
  { x: 78, y: 66, r: 4, d: 2.4, delay: 0.9 }, { x: 40, y: 14, r: 4, d: 2.0, delay: 0.5 },
]

const SMOKE = [
  { x: -60, y: 30, delay: 0 }, { x: 60, y: 30, delay: 0.08 },
  { x: -90, y: 60, delay: 0.05 }, { x: 90, y: 60, delay: 0.12 },
  { x: -30, y: 70, delay: 0.02 }, { x: 30, y: 70, delay: 0.1 },
]

// Cartoon rocket, drawn in the site's maroon + cream palette with an amber flame.
function Rocket() {
  return (
    <svg className="ri-rocket" width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* fins */}
      <path d="M38 118 C22 130 20 146 26 156 L38 138 Z" fill="#9A3B3F" stroke="#4a1013" strokeWidth="3" strokeLinejoin="round" />
      <path d="M82 118 C98 130 100 146 94 156 L82 138 Z" fill="#9A3B3F" stroke="#4a1013" strokeWidth="3" strokeLinejoin="round" />
      {/* body */}
      <path d="M60 6 C84 24 92 66 92 104 C92 128 80 142 60 142 C40 142 28 128 28 104 C28 66 36 24 60 6 Z"
        fill="#6E1E23" stroke="#4a1013" strokeWidth="3.5" strokeLinejoin="round" />
      {/* nose highlight */}
      <path d="M60 6 C72 15 79 34 82 54 C74 40 66 20 60 6 Z" fill="#8a2b30" />
      {/* window */}
      <circle cx="60" cy="66" r="20" fill="#F7F5F0" stroke="#4a1013" strokeWidth="3.5" />
      <circle cx="60" cy="66" r="12" fill="#EAD9B8" />
      <circle cx="54" cy="60" r="4.5" fill="#FBFAF6" />
      {/* body band */}
      <path d="M32 108 C40 116 80 116 88 108 L86 120 C78 127 42 127 34 120 Z" fill="#F0E6E3" stroke="#4a1013" strokeWidth="2.5" />
      {/* nozzle */}
      <path d="M48 142 L44 156 C44 160 76 160 76 156 L72 142 Z" fill="#EAD9B8" stroke="#4a1013" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}
