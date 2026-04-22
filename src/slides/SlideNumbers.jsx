import { motion } from 'motion/react'
import { Squiggle, Star, Blob } from '../components/Deco.jsx'

const stats = [
  {
    icon: '→',
    label: '01',
    action: 'vorwärts',
    caption: 'kraft vom motor zu den rädern — und los geht\'s.',
    color: 'bg-coral',
    text: 'text-ink',
    rotate: -4,
  },
  {
    icon: '←',
    label: '02',
    action: 'rückwärts',
    caption: 'präzise einparken, aus der garage, sauber rangieren.',
    color: 'bg-lilac-deep',
    text: 'text-cream',
    rotate: 3,
  },
  {
    icon: '⟲',
    label: '03',
    action: 'sicher lenken',
    caption: 'in kurven stabil bleiben — die spur halten.',
    color: 'bg-butter',
    text: 'text-ink',
    rotate: -2,
  },
  {
    icon: '≈',
    label: '04',
    action: 'ruhig fahren',
    caption: 'wenig vibration, wenig geräusch — einfach angenehm.',
    color: 'bg-ink',
    text: 'text-cream',
    rotate: 4,
  },
]

export default function SlideNumbers() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-cream-deep">
      <div className="absolute -top-10 -right-10 opacity-30">
        <Blob fill="#FFB3C1" size={280} />
      </div>
      <div className="absolute -bottom-10 -left-10 opacity-40">
        <Blob fill="#C9B6FF" size={240} />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-12 pt-24 pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center gap-3"
        >
          <Squiggle stroke="#2A1735" width={80} />
          <span className="font-body text-base uppercase tracking-[0.32em] text-ink/70">
            motor → teile → räder
          </span>
          <Squiggle stroke="#2A1735" width={80} />
        </motion.div>

        {/* Centered title */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="font-display tracking-display text-ink text-[6.5vw] md:text-[4.8vw] leading-[0.9] max-w-[22ch]"
        >
          wir bauen die{' '}
          <span className="italic font-light" style={{ fontVariationSettings: '"opsz" 144' }}>
            teile
          </span>
          , die autos fahren lassen.
        </motion.h2>

        {/* Card grid — centered with baguncinha */}
        <div className="mt-12 grid grid-cols-2 gap-7 w-full max-w-[1100px]">
          {stats.map((s, i) => (
            <motion.div
              key={s.action}
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: s.rotate }}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.55 }}
              className={`relative rounded-2xl p-7 shadow-[5px_7px_0_0_rgba(42,23,53,0.9)] border border-ink/90 ${s.color} ${s.text} text-left`}
            >
              {i === 0 && (
                <div className="absolute -top-4 -right-4">
                  <Star fill="#2A1735" size={38} />
                </div>
              )}
              <div className="flex items-start justify-between">
                <div className="font-body text-xs uppercase tracking-[0.22em] opacity-80">
                  was unsere teile können · {s.label}
                </div>
              </div>
              <div className="mt-2 flex items-end gap-4">
                <div className="font-display tracking-display leading-none text-5xl md:text-[3.6vw] shrink-0">
                  {s.icon}
                </div>
                <div className="pb-1 font-display italic text-3xl md:text-[2.2vw] leading-[0.95] whitespace-nowrap">
                  {s.action}
                </div>
              </div>
              <p className="mt-4 max-w-sm font-editorial italic text-lg md:text-[1.15vw] leading-snug opacity-90">
                {s.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="mt-10 flex items-center justify-center gap-3 max-w-3xl"
        >
          <div className="h-px flex-1 bg-ink/20" />
          <span className="font-editorial italic text-lg text-ink/65">
            auch wenn sich autos verändern, bleibt diese arbeit wichtig.
          </span>
          <div className="h-px flex-1 bg-ink/20" />
        </motion.div>
      </div>
    </section>
  )
}
