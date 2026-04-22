import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Sticker, Star, Squiggle } from '../components/Deco.jsx'

const steps = [
  {
    q: 'Dein Schulranzen ist zu schwer und tut an den Schultern weh. Was ist das Problem?',
    options: [
      { t: 'Das Design: die Träger drücken' },
      { t: 'Das Gewicht: zu viele Bücher' },
      { t: 'Das Material: zu schwerer Stoff' },
    ],
    hint: 'bei ingenieur:innen gibt es oft mehr als eine richtige antwort.',
    feedback: 'gut gedacht! alle drei sind teil des problems.',
  },
  {
    q: 'Was würdest du ändern, damit es besser wird?',
    options: [
      { t: 'Bessere, breitere Träger' },
      { t: 'Leichtere Materialien' },
      { t: 'Weniger Bücher oder digital' },
    ],
    hint: 'kreativität ist wichtig. kombinieren ist erlaubt.',
    feedback: 'gut! ingenieur:innen kombinieren oft mehrere ideen.',
  },
  {
    q: 'Und wenn du es gebaut hast, was kommt danach?',
    options: [
      { t: 'Testen bis es hält' },
      { t: 'Andere ausprobieren lassen' },
      { t: 'Verbessern und nochmal testen' },
    ],
    hint: 'testen + verbessern = der wahre teil der arbeit.',
    feedback: 'genau so machen wir das bei Dauch. testen, testen, testen.',
  },
]

export default function SlideQuiz() {
  const [q, setQ] = useState(0)
  const [picked, setPicked] = useState(null)

  const current = steps[q]
  const answered = picked !== null

  const pick = (i) => {
    if (answered) return
    setPicked(i)
  }

  const nextQ = () => {
    setPicked(null)
    setQ((v) => (v + 1) % steps.length)
  }

  return (
    <section className="relative h-full w-full overflow-hidden bg-lilac-deep text-cream">
      {/* wavy pattern bg */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="none">
          <defs>
            <pattern id="wavy" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 20 Q 20 0, 40 20 T 80 20" stroke="#FFD65C" strokeWidth="1.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wavy)" />
        </svg>
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-10 pt-24 pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Star fill="#FFD65C" size={22} />
          <span className="font-body text-base uppercase tracking-[0.32em] text-butter">
            kapitel vi · jetzt ihr
          </span>
          <Star fill="#FFD65C" size={22} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="mt-3 font-display tracking-display text-[7vw] md:text-[5.2vw] leading-[0.9] max-w-[22ch]"
        >
          <span className="italic font-light" style={{ fontVariationSettings: '"opsz" 144' }}>
            denk
          </span>{' '}
          wie eine ingenieurin!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="mt-4 max-w-2xl font-editorial italic text-2xl text-cream/85"
        >
          problem: dein schulranzen tut weh. drei kleine schritte — kein druck, kein "falsch".
        </motion.p>

        {/* Quiz card */}
        <div className="mt-8 w-full max-w-[1100px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-cream text-ink border border-ink/90 shadow-[8px_10px_0_0_rgba(42,23,53,0.9)] p-9 text-left"
            >
              <div className="flex items-center justify-between mb-5 gap-4">
                <div className="font-body text-xs uppercase tracking-[0.24em] text-ink/55">
                  schritt {String(q + 1).padStart(2, '0')} von {String(steps.length).padStart(2, '0')}
                </div>
                <Sticker color="bg-butter" rotate={-2}>
                  tipp: {current.hint}
                </Sticker>
              </div>

              <h3 className="font-display tracking-display text-3xl md:text-[2.4vw] leading-[1.1]">
                {current.q}
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-3">
                {current.options.map((o, i) => {
                  const isPicked = picked === i
                  const reveal = answered
                  const tone = !reveal
                    ? 'bg-cream hover:bg-lilac hover:border-lilac-deep'
                    : isPicked
                    ? 'bg-lime border-ink'
                    : 'bg-cream opacity-60'

                  return (
                    <motion.button
                      key={o.t}
                      onClick={() => pick(i)}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-between rounded-xl border-2 border-ink/20 px-5 py-4 text-left transition-all ${tone}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="grid h-9 w-9 place-items-center rounded-full border border-ink/40 font-body text-sm">
                          {String.fromCharCode(65 + i)}
                        </div>
                        <span className="font-display text-2xl tracking-display leading-tight">
                          {o.t}
                        </span>
                      </div>
                      {reveal && isPicked && (
                        <span className="font-hand text-3xl">gut gedacht!</span>
                      )}
                    </motion.button>
                  )
                })}
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="font-editorial italic text-lg text-ink/75 max-w-[40ch]">
                  {answered ? current.feedback : 'wähle eine idee oder überleg kurz still mit.'}
                </span>
                <button
                  onClick={nextQ}
                  disabled={!answered}
                  className="shrink-0 flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-3 font-body text-xs uppercase tracking-[0.22em] transition disabled:opacity-30"
                >
                  {q === steps.length - 1 ? 'nochmal von vorn' : 'nächster schritt'}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 2 L8 6 L4 10" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex items-center gap-2"
        >
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === q ? 'w-12 bg-butter' : 'w-5 bg-cream/25'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
