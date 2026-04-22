import { motion } from 'motion/react'

export default function Chrome({ index, total, onPrev, onNext, onJump, title, dark = false }) {
  const t = dark
    ? {
        label: 'text-cream/80',
        labelMuted: 'text-cream/55',
        labelFaint: 'text-cream/45',
        accent: 'text-cream',
        titleItalic: 'text-cream/70',
        dot: 'bg-coral',
        prevBtn:
          'border-cream/25 bg-ink/30 text-cream hover:border-cream hover:bg-cream hover:text-ink',
        nextBtn: 'bg-cream text-ink hover:bg-butter',
        trackBg: 'bg-cream/20',
        trackFill: 'bg-cream',
        counterBorder: 'border-cream/25 text-cream/75',
        counterSlash: 'text-cream/30',
      }
    : {
        label: 'text-ink/70',
        labelMuted: 'text-ink/50',
        labelFaint: 'text-ink/40',
        accent: 'text-ink',
        titleItalic: 'text-ink/60',
        dot: 'bg-coral',
        prevBtn:
          'border-ink/15 bg-cream/70 text-ink hover:border-ink hover:bg-ink hover:text-cream',
        nextBtn: 'bg-ink text-cream hover:bg-plum',
        trackBg: 'bg-ink/15',
        trackFill: 'bg-ink',
        counterBorder: 'border-ink/15 text-ink/70',
        counterSlash: 'text-ink/30',
      }

  return (
    <>
      {/* Top ribbon — event tag */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 flex items-start justify-between p-6 md:p-8">
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Dauch"
            className={`h-7 w-auto ${dark ? 'brightness-0 invert' : ''}`}
          />
        </div>
        <div className="text-right">
          <div className={`font-display italic text-sm ${dark ? 'text-butter' : 'text-plum/80'}`}>
            Ingenieurarbeit
          </div>
          <div
            className={`font-body text-[10px] uppercase tracking-[0.22em] ${t.labelMuted}`}
          >
            edition schüler:innen
          </div>
        </div>
      </div>

      {/* Bottom bar — nav + progress + counter */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-6 md:p-8">
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={onPrev}
            disabled={index === 0}
            className={`group grid h-11 w-11 place-items-center rounded-full border backdrop-blur transition ${t.prevBtn} disabled:opacity-30`}
            aria-label="Slide anterior"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 2 L4 7 L9 12" />
            </svg>
          </button>
          <button
            onClick={onNext}
            disabled={index === total - 1}
            className={`group flex h-11 items-center gap-2 rounded-full px-5 transition ${t.nextBtn} disabled:opacity-30`}
            aria-label="Próximo slide"
          >
            <span className="font-body text-[11px] uppercase tracking-[0.22em]">weiter</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 2 L10 7 L5 12" />
            </svg>
          </button>
          <div className="ml-2 hidden md:block">
            <div className={`font-editorial italic ${t.titleItalic} text-[13px] leading-none`}>
              "{title}"
            </div>
            <div
              className={`mt-1 font-body text-[9px] uppercase tracking-[0.24em] ${t.labelFaint}`}
            >
              pfeiltasten ← → oder leertaste
            </div>
          </div>
        </div>

        <div className="pointer-events-auto flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => onJump(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`group relative h-1.5 overflow-hidden rounded-full transition-all ${t.trackBg}`}
                style={{ width: i === index ? 40 : 14 }}
              >
                {i === index && (
                  <motion.div
                    layoutId="dot-fill"
                    className={`absolute inset-0 ${t.trackFill}`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
          <div
            className={`rounded-full border px-3 py-1.5 font-body text-[10px] uppercase tracking-[0.22em] ${t.counterBorder}`}
          >
            <span className={`${t.accent} tabular-nums`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={`mx-1.5 ${t.counterSlash}`}>/</span>
            <span className="tabular-nums">{String(total).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </>
  )
}
