import { motion } from 'motion/react'
import { Squiggle, Sticker, Star } from '../components/Deco.jsx'

const hubs = [
  { name: 'Deutschland', x: 52, y: 30, color: '#FF5E7E' },
  { name: 'USA', x: 22, y: 38, color: '#FFD65C' },
  { name: 'Brasilien', x: 32, y: 66, color: '#D4FF5C' },
  { name: 'Indien', x: 68, y: 44, color: '#C9B6FF' },
  { name: 'China', x: 78, y: 36, color: '#FFB3C1' },
]

export default function SlideHeroes() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-cream">
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-10 pt-28 pb-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Squiggle stroke="#7C5CFF" width={80} />
          <span className="font-body text-base uppercase tracking-[0.32em] text-coral">
            kapitel iv · international
          </span>
          <Squiggle stroke="#7C5CFF" width={80} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="mt-4 text-center font-display tracking-display text-ink text-[7vw] md:text-[5.2vw] leading-[0.88]"
        >
          wir arbeiten{' '}
          <span className="italic font-light" style={{ fontVariationSettings: '"opsz" 144' }}>
            weltweit
          </span>
          .
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-4 flex items-center gap-5 font-display italic text-2xl text-ink/70"
        >
          <span>viele länder</span>
          <Star fill="#FF5E7E" size={14} />
          <span>tausende menschen</span>
          <Star fill="#FFD65C" size={14} />
          <span>ein team</span>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="relative mt-7 w-full max-w-[1100px] flex-1"
        >
          <div className="absolute inset-0 rounded-3xl border border-ink/15 bg-cream-deep/50 overflow-hidden">
            <WorldMap />

            {hubs.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1, type: 'spring', stiffness: 200 }}
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  className="absolute inset-0 animate-ping rounded-full"
                  style={{ backgroundColor: h.color, opacity: 0.45 }}
                />
                <div
                  className="relative h-5 w-5 rounded-full border-2 border-ink"
                  style={{ backgroundColor: h.color }}
                />
                <div className="absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap">
                  <div className="font-display text-xl text-ink leading-none">{h.name}</div>
                </div>
              </motion.div>
            ))}

            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              {hubs.slice(0, -1).map((h, i) => {
                const next = hubs[i + 1]
                return (
                  <path
                    key={i}
                    d={`M ${h.x} ${h.y} Q ${(h.x + next.x) / 2} ${Math.min(h.y, next.y) - 8}, ${next.x} ${next.y}`}
                    stroke="#7C5CFF"
                    strokeWidth="0.25"
                    strokeDasharray="0.6 0.6"
                    fill="none"
                    opacity="0.6"
                  />
                )
              })}
            </svg>
          </div>
        </motion.div>

        {/* Caption + stickers */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-6 flex flex-col items-center gap-4 text-center max-w-3xl"
        >
          <p className="font-editorial italic text-2xl text-ink/75">
            ein teil, das in{' '}
            <span className="font-hand not-italic text-coral text-3xl">deutschland</span>{' '}
            entwickelt wird, hilft menschen in brasilien — sicher auto zu fahren.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Sticker color="bg-butter" rotate={-2}>mehrere länder</Sticker>
            <Sticker color="bg-lilac" rotate={2}>tausende kolleg:innen</Sticker>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WorldMap() {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full opacity-70">
      <defs>
        <pattern id="dotGrid" width="2" height="2" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.2" fill="#2A1735" opacity="0.18" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#dotGrid)" />
      <path
        d="M 10 20 Q 18 15, 26 18 Q 32 22, 30 32 Q 26 42, 18 44 Q 10 42, 8 32 Z"
        fill="#FFB3C1"
        stroke="#2A1735"
        strokeWidth="0.3"
      />
      <path
        d="M 26 52 Q 30 50, 34 56 Q 36 66, 32 74 Q 28 80, 26 72 Q 24 62, 26 52 Z"
        fill="#D4FF5C"
        stroke="#2A1735"
        strokeWidth="0.3"
      />
      <path
        d="M 46 20 Q 52 18, 58 22 Q 60 28, 56 32 Q 50 34, 46 30 Z"
        fill="#FF5E7E"
        stroke="#2A1735"
        strokeWidth="0.3"
      />
      <path
        d="M 48 38 Q 56 36, 60 42 Q 62 54, 56 62 Q 50 66, 46 60 Q 44 50, 48 38 Z"
        fill="#FFD65C"
        stroke="#2A1735"
        strokeWidth="0.3"
      />
      <path
        d="M 60 20 Q 72 18, 84 24 Q 88 32, 84 38 Q 74 44, 66 40 Q 60 32, 60 20 Z"
        fill="#C9B6FF"
        stroke="#2A1735"
        strokeWidth="0.3"
      />
      <path
        d="M 80 62 Q 88 60, 90 66 Q 88 72, 82 72 Q 78 68, 80 62 Z"
        fill="#FFB3C1"
        stroke="#2A1735"
        strokeWidth="0.3"
      />
    </svg>
  )
}
