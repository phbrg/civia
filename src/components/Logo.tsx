import { img } from '../lib/img'

/** Marca "C" com talho dourado, redesenhada em SVG a partir da apresentação. */
export function Mark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 84" className={className} aria-hidden="true">
      <path
        fill="#F8F5EF"
        d="M96 4H34C16 4 6 14 6 32v20c0 18 10 28 28 28h6l12-18H40c-8 0-12-4-12-10V32c0-6 4-10 12-10h40z"
      />
      <path fill="#E4A80C" d="M44 80l18-24h36L80 80z" />
    </svg>
  )
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <img src={img('civia-logo.svg')} alt="CIVIA" className={`inline-block h-[1.9em] w-auto ${className}`} />
  )
}
