import { motion } from 'motion/react'
import { Squiggle, Sticker, Star } from '../components/Deco.jsx'

const items = [
  {
    n: 'Warum funktioniert das nicht gut?',
    d: 'das echte problem finden — nicht nur das symptom.',
    color: 'bg-coral',
    text: 'text-ink',
    rotate: -3,
  },
  {
    n: 'Wie machen wir es stärker?',
    d: 'materialien, formen, ideen — testen was wirklich hält.',
    color: 'bg-butter',
    text: 'text-ink',
    rotate: 2,
  },
  {
    n: 'Wie machen wir es sicherer?',
    d: 'für die menschen, die es später benutzen. immer.',
    color: 'bg-lilac-deep',
    text: 'text-cream',
    rotate: -2,
  },
  {
    n: 'Wie machen wir es langlebiger?',
    d: 'bei Dauch testen wir sehr oft — damit es jahre hält.',
    color: 'bg-lime',
    text: 'text-ink',
    rotate: 3,
  },
]

export default function SlideAgenda() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-cream">
      {/* ambient */}
      <div className="absolute top-[12%] -left-10 h-[240px] w-[240px] rounded-full bg-coral-soft/30 blur-3xl" />
      <div className="absolute bottom-[8%] -right-10 h-[260px] w-[260px] rounded-full bg-lilac/30 blur-3xl" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-10 pt-24 pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Squiggle stroke="#2A1735" width={80} />
          <span className="font-body text-base uppercase tracking-[0.32em] text-ink/65">
            kapitel v
          </span>
          <Squiggle stroke="#2A1735" width={80} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="mt-3 font-display tracking-display text-[6.5vw] md:text-[4.8vw] leading-[0.92] max-w-[26ch]"
        >
          was machen{' '}
          <span
            className="italic font-light text-coral"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            ingenieur:innen?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-5 max-w-2xl font-editorial italic text-2xl text-ink/75"
        >
          wir <span className="font-hand not-italic text-coral text-3xl">lösen probleme</span>{' '}
          — und stellen dafür gute fragen.
        </motion.p>

        {/* 2x2 grid of questions */}
        <div className="mt-10 grid grid-cols-2 gap-7 w-full max-w-[1100px]">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 22, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: it.rotate }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl border border-ink/90 shadow-[4px_5px_0_0_rgba(42,23,53,0.9)] ${it.color} ${it.text} px-6 py-5 text-left`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="font-body text-xs uppercase tracking-[0.24em] opacity-75">
                  frage {String(i + 1).padStart(2, '0')}
                </span>
                <Star fill="currentColor" size={16} />
              </div>
              <div className="font-display text-3xl md:text-[2.2vw] tracking-display leading-[1.05]">
                {it.n}
              </div>
              <div className="mt-2 font-editorial italic text-lg md:text-[1.25vw] opacity-85">
                {it.d}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <motion.div
            whileHover={{ rotate: 0, scale: 1.03 }}
            initial={{ rotate: -3 }}
            animate={{ rotate: -3 }}
            className="inline-flex items-center gap-2.5 rounded-xl border-2 border-ink bg-ink px-5 py-2.5 text-cream font-display italic text-2xl md:text-[1.45vw] shadow-[4px_5px_0_0_rgba(42,23,53,0.5)]"
          >
            <Star fill="#FFD65C" size={16} />
            im team
          </motion.div>
          <motion.div
            whileHover={{ rotate: 0, scale: 1.03 }}
            initial={{ rotate: 3 }}
            animate={{ rotate: 3 }}
            className="inline-flex items-center gap-2.5 rounded-xl border-2 border-ink bg-butter px-5 py-2.5 text-ink font-display italic text-2xl md:text-[1.45vw] shadow-[4px_5px_0_0_rgba(42,23,53,0.85)]"
          >
            mein job: planen, lösen, umsetzen
            <span className="font-hand not-italic text-3xl md:text-[1.9vw] text-coral">✿</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
