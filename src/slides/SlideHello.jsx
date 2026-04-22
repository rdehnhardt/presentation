import { motion } from 'motion/react'
import { Squiggle, Star, Sticker } from '../components/Deco.jsx'

export default function SlideHello() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-ink text-cream">
      {/* soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-plum/40 via-transparent to-berry/30" />

      {/* Scattered stars */}
      <div className="absolute inset-0 opacity-30">
        {[
          [8, 12, 22],
          [22, 40, 28],
          [72, 18, 24],
          [85, 62, 32],
          [10, 75, 20],
          [55, 85, 26],
          [92, 34, 18],
          [6, 52, 16],
        ].map(([x, y, s], i) => (
          <div key={i} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
            <Star fill="#FFD65C" size={s} />
          </div>
        ))}
      </div>

      {/* Floating steckbrief card — left, rotated */}
      <motion.aside
        initial={{ opacity: 0, x: -30, rotate: -4 }}
        animate={{ opacity: 1, x: 0, rotate: -4 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="absolute top-[22%] left-[6%] w-[24%] z-10"
      >
        <div className="rounded-2xl border border-cream/20 bg-cream/5 p-6 backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-coral-soft">
              mini-steckbrief
            </span>
            <div className="h-2 w-2 animate-pulse rounded-full bg-coral" />
          </div>
          <div className="space-y-3">
            {[
              { k: 'Rolle', v: 'Senior Manager PM' },
              { k: 'Studium', v: 'Werkstofftechnik' },
              { k: 'Im Team', v: 'Ideen → Wirklichkeit' },
            ].map((p) => (
              <div key={p.k} className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-coral" />
                <div>
                  <div className="font-body text-xs uppercase tracking-[0.22em] text-cream/60">
                    {p.k}
                  </div>
                  <div className="font-display text-2xl leading-tight text-cream">{p.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.aside>

      {/* Floating deal card — right, rotated */}
      <motion.div
        initial={{ opacity: 0, x: 30, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 5 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute top-[24%] right-[6%] w-[22%] z-10"
      >
        <div className="rounded-2xl bg-butter p-5 text-ink">
          <div className="font-body text-xs uppercase tracking-[0.22em] opacity-70">kleiner deal</div>
          <p className="mt-2 font-editorial italic text-2xl leading-tight">
            die neugierigste Frage am ende gewinnt Applaus 👏
          </p>
        </div>
      </motion.div>

      {/* Centered hero */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <Squiggle stroke="#FFD65C" width={90} />
          <span className="font-body text-base uppercase tracking-[0.3em] text-coral-soft">
            kapitel eins · wer spricht da?
          </span>
          <Squiggle stroke="#FFD65C" width={90} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.65 }}
          className="font-display leading-[0.86] text-[12vw] md:text-[9vw]"
        >
          <span className="block">ich bin</span>
          <span
            className="block italic font-extralight text-butter"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Karen.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 flex items-center gap-4"
        >
          <span className="font-hand text-5xl text-coral-soft">schön, dass ihr da seid</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="mt-6 max-w-3xl font-editorial italic text-3xl md:text-[1.9vw] text-cream/85 leading-snug"
        >
          Werkstoffingenieurin · Senior Manager Project Management · bei Dauch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Sticker color="bg-coral" rotate={-3}>ich bin ingenieurin</Sticker>
          <Sticker color="bg-lilac" rotate={2}>ich frage viel</Sticker>
          <Sticker color="bg-lime" rotate={-1}>ich mag teams</Sticker>
          <Sticker color="bg-butter" rotate={4}>ich lerne immer noch ✿</Sticker>
        </motion.div>
      </div>
    </section>
  )
}
