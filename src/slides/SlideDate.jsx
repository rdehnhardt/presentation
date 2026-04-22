import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Squiggle, Sticker } from '../components/Deco.jsx'

const hints = [
  { n: '01', t: 'Kein ganzes Auto — aber ohne uns fährt keines.', color: 'bg-coral', rotate: -4 },
  { n: '02', t: 'Etwas, das sich dreht, bewegt und Kräfte weitergibt.', color: 'bg-butter', rotate: 3 },
  { n: '03', t: 'Wahrscheinlich seid ihr heute schon damit gefahren.', color: 'bg-lilac', rotate: -2 },
]

export default function SlideDate() {
  const [revealed, setRevealed] = useState(false)

  // Reset reveal on unmount so coming back to this slide shows the button again
  useEffect(() => {
    return () => setRevealed(false)
  }, [])

  return (
    <section className="relative h-full w-full overflow-hidden bg-cream">
      {/* Soft paper grain blobs */}
      <div className="absolute -top-24 right-[10%] h-[320px] w-[320px] rounded-full bg-coral-soft/30 blur-3xl" />
      <div className="absolute -bottom-24 left-[10%] h-[280px] w-[280px] rounded-full bg-lilac/30 blur-3xl" />

      {/* Page marker */}
      <div className="absolute top-24 right-10 font-editorial italic text-ink/40 text-2xl oldstyle">
        kapitel · iii
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-12 pt-24 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center gap-3"
        >
          <Squiggle stroke="#7C5CFF" width={90} />
          <span className="font-body text-base uppercase tracking-[0.32em] text-coral">
            rate mal
          </span>
          <Squiggle stroke="#7C5CFF" width={90} />
        </motion.div>

        {/* Huge question mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="relative"
        >
          <div className="font-display tracking-display text-ink leading-[0.8] text-[22vw] md:text-[18vw]">
            ?
          </div>
          <div className="absolute -bottom-2 -right-4">
            <div className="rotate-[8deg]">
              <Sticker color="bg-coral" rotate={0}>hmm…</Sticker>
            </div>
          </div>
        </motion.div>

        {/* Question */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.55 }}
          className="mt-4 font-display text-ink tracking-display leading-[0.95] text-[6vw] md:text-[4.2vw] max-w-[22ch]"
        >
          <span className="italic font-light" style={{ fontVariationSettings: '"opsz" 144' }}>
            was
          </span>{' '}
          stellt Dauch eigentlich her?
        </motion.h2>

        {/* Hints scattered */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 max-w-6xl">
          {hints.map((h, i) => (
            <motion.div
              key={h.n}
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: h.rotate }}
              transition={{ delay: 0.45 + i * 0.12, duration: 0.5 }}
              className={`relative w-[340px] rounded-2xl border border-ink/90 shadow-[4px_5px_0_0_rgba(42,23,53,0.9)] ${h.color} px-7 py-7 text-left`}
            >
              <div className="font-display italic text-4xl text-ink oldstyle leading-none opacity-80">
                {h.n}
              </div>
              <div className="mt-4 font-editorial italic text-[30px] text-ink leading-snug">
                {h.t}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reveal zone — button → big green answer */}
        <div className="mt-10 relative flex items-center justify-center min-h-[140px]">
          <AnimatePresence mode="wait" initial={false}>
            {!revealed ? (
              <motion.button
                key="reveal-btn"
                onClick={() => setRevealed(true)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ delay: 0.95, duration: 0.5 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-4 rounded-full bg-ink px-8 py-5 text-cream font-body text-base uppercase tracking-[0.3em] shadow-[4px_6px_0_0_rgba(42,23,53,0.35)] transition-colors hover:bg-plum"
              >
                <span>antwort zeigen</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M3 9 H15 M11 5 L15 9 L11 13" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            ) : (
              <motion.div
                key="reveal-answer"
                initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                className="relative"
              >
                {/* "ach so!" script above */}
                <motion.div
                  initial={{ opacity: 0, y: -8, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: -6 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className="absolute -top-10 -left-8 font-hand text-5xl text-coral"
                >
                  ach so!
                </motion.div>

                {/* Big green answer card */}
                <div className="relative rounded-[28px] border-[3px] border-ink bg-lime px-14 py-8 shadow-[8px_10px_0_0_rgba(42,23,53,0.9)]">
                  <div className="font-body text-sm uppercase tracking-[0.32em] text-ink/70">
                    die antwort
                  </div>
                  <div className="mt-1 font-display tracking-display text-ink leading-[0.9] text-[8vw] md:text-[6vw]">
                    <span
                      className="italic font-light"
                      style={{ fontVariationSettings: '"opsz" 144' }}
                    >
                      teile
                    </span>{' '}
                    für autos!
                  </div>

                  {/* sparkle decoration */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -40 }}
                    animate={{ opacity: 1, scale: 1, rotate: 10 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                    className="absolute -top-6 -right-6"
                  >
                    <svg width="56" height="56" viewBox="0 0 40 40">
                      <path
                        d="M20 0 C 21 12, 28 19, 40 20 C 28 21, 21 28, 20 40 C 19 28, 12 21, 0 20 C 12 19, 19 12, 20 0 Z"
                        fill="#FF5E7E"
                        stroke="#2A1735"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
