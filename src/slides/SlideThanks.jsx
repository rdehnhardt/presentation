import { motion } from 'motion/react'
import { Squiggle, Star, FlowerBadge, Sticker } from '../components/Deco.jsx'

export default function SlideThanks() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-gradient-to-br from-coral via-coral-soft to-butter">
      {/* scattered stars */}
      <div className="absolute inset-0">
        {[
          [12, 18, 28, '#2A1735', 8],
          [82, 22, 36, '#FFF', -12],
          [16, 78, 24, '#FFD65C', 20],
          [78, 82, 30, '#C9B6FF', -20],
          [50, 10, 20, '#2A1735', 0],
          [48, 88, 22, '#FFFFFF', 14],
        ].map(([x, y, s, c, r], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
            style={{ left: `${x}%`, top: `${y}%`, '--r': `${r}deg` }}
            className="absolute animate-float"
          >
            <div style={{ transform: `rotate(${r}deg)` }}>
              <Star fill={c} size={s} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* floating flowers */}
      <div className="absolute top-[18%] right-[10%] animate-float" style={{ '--r': '-10deg' }}>
        <FlowerBadge size={90} color="#FFF" center="#FF5E7E" />
      </div>
      <div
        className="absolute bottom-[22%] left-[10%] animate-float"
        style={{ '--r': '12deg', animationDelay: '1.5s' }}
      >
        <FlowerBadge size={70} color="#7C5CFF" center="#FFD65C" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-ink px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <Squiggle stroke="#2A1735" width={100} />
          <span className="font-body text-base uppercase tracking-[0.32em]">ende · kapitel vii</span>
          <Squiggle stroke="#2A1735" width={100} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-display tracking-display leading-[0.95] text-[10vw] md:text-[8vw] text-ink"
        >
          <span className="block">Viel Spaß</span>
          <span
            className="block italic font-extralight text-plum"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            mit der Erkundung!
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-10 max-w-4xl font-editorial italic text-4xl md:text-[2.4vw] text-ink/85 leading-[1.5]"
        >
          bleibt neugierig, stellt Fragen und &nbsp;
          <span className="font-hand not-italic text-4xl md:text-[4vw] text-plum">
            vielleicht baut ihr die Autos der Zukunft
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Sticker color="bg-cream" rotate={-3}>firmen suchen neugierige köpfe</Sticker>
          <Sticker color="bg-lilac" rotate={2}>sei kreativ</Sticker>
          <Sticker color="bg-ink" rotate={-1} className="!text-cream">
            danke, dass ihr da wart ✿
          </Sticker>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 font-body text-xs uppercase tracking-[0.3em] text-ink/60"
        >
          Dauch · einblick für schüler:innen · 2026
        </motion.div>
      </div>
    </section>
  )
}
