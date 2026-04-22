import { motion } from 'motion/react'

export function Squiggle({ className = '', stroke = 'currentColor', width = 120 }) {
  return (
    <svg
      viewBox="0 0 120 18"
      width={width}
      className={className}
      fill="none"
      stroke={stroke}
      strokeWidth="2.2"
      strokeLinecap="round"
    >
      <path d="M2 9 C 12 1, 22 17, 32 9 S 52 1, 62 9 S 82 17, 92 9 S 112 1, 118 9" />
    </svg>
  )
}

export function Star({ className = '', fill = 'currentColor', size = 40 }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className={className}>
      <path
        d="M20 0 C 21 12, 28 19, 40 20 C 28 21, 21 28, 20 40 C 19 28, 12 21, 0 20 C 12 19, 19 12, 20 0 Z"
        fill={fill}
      />
    </svg>
  )
}

export function Blob({ className = '', fill = 'currentColor', size = 180 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className}>
      <path
        fill={fill}
        d="M 47 -62 C 62 -50, 73 -30, 74 -9 C 76 12, 68 34, 54 49 C 40 64, 20 73, -1 74 C -22 75, -43 68, -56 54 C -69 40, -74 20, -73 -1 C -72 -22, -65 -42, -51 -55 C -37 -68, -17 -74, 4 -74 C 25 -74, 32 -74, 47 -62 Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}

export function Ticket({ children, color = 'bg-coral', className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className={`relative ${color} px-5 py-2 text-ink font-body text-[11px] uppercase tracking-[0.2em] rounded-sm shadow-[3px_3px_0_0_rgba(42,23,53,0.9)]`}>
        {children}
      </div>
    </div>
  )
}

export function Sticker({ children, rotate = -4, color = 'bg-butter', className = '' }) {
  return (
    <motion.div
      whileHover={{ rotate: 0, scale: 1.05 }}
      initial={{ rotate }}
      className={`inline-flex items-center gap-2 ${color} px-4 py-2 rounded-full shadow-[3px_3px_0_0_rgba(42,23,53,0.85)] border border-ink/90 font-body text-sm uppercase tracking-[0.18em] text-ink ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function FlowerBadge({ className = '', size = 64, color = '#FF5E7E', center = '#FFD65C' }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={className}>
      <g transform="translate(32 32)">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse key={deg} cx="0" cy="-16" rx="9" ry="14" fill={color} transform={`rotate(${deg})`} />
        ))}
        <circle r="7" fill={center} />
      </g>
    </svg>
  )
}
