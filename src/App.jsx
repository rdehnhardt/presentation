import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { slides } from './slides/index.jsx'
import Chrome from './components/Chrome.jsx'

export default function App() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const total = slides.length

  const go = useCallback(
    (next) => {
      setDirection(next > index ? 1 : -1)
      setIndex(Math.max(0, Math.min(total - 1, next)))
    },
    [index, total],
  )

  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prev()
      }
      if (e.key === 'Home') go(0)
      if (e.key === 'End') go(total - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, total])

  const Slide = slides[index].component

  return (
    <div className="relative h-full w-full overflow-hidden bg-cream grain">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, y: direction > 0 ? 24 : -24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: direction > 0 ? -24 : 24 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Slide />
        </motion.div>
      </AnimatePresence>

      <Chrome
        index={index}
        total={total}
        onPrev={prev}
        onNext={next}
        onJump={go}
        title={slides[index].title}
        dark={slides[index].dark}
      />
    </div>
  )
}
