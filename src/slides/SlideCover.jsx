import { motion } from 'motion/react'
import { Squiggle, Star, FlowerBadge, Sticker } from '../components/Deco.jsx'

export default function SlideCover() {
  return (
    <section className="relative h-full w-full overflow-hidden">
      {/* Ambient color blobs */}
      <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-coral-soft/70 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 h-[520px] w-[520px] rounded-full bg-lilac/50 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 h-[260px] w-[260px] rounded-full bg-butter/40 blur-3xl" />

      {/* Spinning decorative sun behind, now centered */}
      <div
        className="animate-spin-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15"
        style={{ transformOrigin: 'center' }}
      >
        <Sunburst />
      </div>

      {/* Scattered floating stickers — "baguncinha" */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -14 }}
        animate={{ opacity: 1, y: 0, rotate: -14 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-[14%] left-[8%] z-10"
        style={{ '--r': '-14deg' }}
      >
        <div className="animate-float">
          <FlowerBadge size={90} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: 18 }}
        animate={{ opacity: 1, scale: 1, rotate: 18 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute top-[20%] right-[10%] z-10"
        style={{ '--r': '18deg' }}
      >
        <div className="animate-float" style={{ animationDelay: '1.2s' }}>
          <Star fill="#7C5CFF" size={70} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 8 }}
        animate={{ opacity: 1, y: 0, rotate: 8 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute bottom-[30%] right-[14%] z-10"
      >
        <div className="animate-float" style={{ animationDelay: '0.7s' }}>
          <FlowerBadge size={70} color="#C9B6FF" center="#FFD65C" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: -10 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-[30%] left-[12%] z-10"
      >
        <div className="animate-float" style={{ animationDelay: '1.8s' }}>
          <Star fill="#FF5E7E" size={54} />
        </div>
      </motion.div>

      {/* Centered hero */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex items-center gap-3 mb-6"
        >
          <Squiggle stroke="#2A1735" width={90} />
          <span className="font-body text-base uppercase tracking-[0.32em] text-ink/60">
            Dauch · einblick für schüler:innen
          </span>
          <Squiggle stroke="#2A1735" width={90} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-display tracking-display text-ink leading-[0.82] text-[11vw] md:text-[9vw]"
        >
          <span className="block">hallo,</span>
          <span className="block">
            <span className="relative inline-block">
              <span
                className="relative z-10 italic font-light"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                zusammen!
              </span>
              <svg
                viewBox="0 0 400 40"
                className="absolute -bottom-2 left-0 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 25 Q 100 5, 200 22 T 395 18"
                  stroke="#FF5E7E"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10 max-w-2xl font-editorial italic text-ink/80 text-3xl md:text-[2vw] leading-snug"
        >
          ein kleiner einblick in das, was ingenieur:innen bei Dauch machen —{' '}
          <span className="font-hand not-italic text-coral text-5xl md:text-[3vw]">
            und warum das spaß macht
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Sticker color="bg-butter" rotate={-3}>junge talente</Sticker>
          <Sticker color="bg-lilac" rotate={2}>autos · teile · fragen</Sticker>
          <Sticker color="bg-coral" rotate={-1}>ca. 12 minuten</Sticker>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="absolute bottom-24 left-0 right-0 overflow-hidden border-y border-ink/15 bg-ink/[0.03] py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8">
              {[
                'neugierig',
                'kreativ',
                'forschend',
                'mutig',
                'genau',
                'lösungsorientiert',
                'team-player',
                'fragen-sammler',
              ].map((w) => (
                <div key={w} className="flex items-center gap-8">
                  <span className="font-display italic text-3xl text-ink/70">{w}</span>
                  <Squiggle stroke="#FF5E7E" width={80} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Sunburst() {
  return (
    <svg width="820" height="820" viewBox="0 0 820 820">
      <g transform="translate(410 410)">
        {Array.from({ length: 24 }).map((_, i) => (
          <rect
            key={i}
            x="-4"
            y="-380"
            width="8"
            height="140"
            rx="4"
            fill="#FF5E7E"
            transform={`rotate(${(360 / 24) * i})`}
          />
        ))}
      </g>
    </svg>
  )
}
