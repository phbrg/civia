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
    <span role="img" aria-label="CIVIA" className={`inline-flex items-center gap-[0.4em] ${className}`}>
      <Mark className="h-[1.7em] w-auto" />
      <span
        aria-hidden="true"
        className="inline-flex items-end font-display font-semibold leading-none tracking-[0.14em]"
      >
        CIVI
        <svg viewBox="0 0 30 24" className="ml-[0.06em] h-[0.74em] w-[0.95em]">
          <path d="M3 24 15 2 27 24" fill="none" stroke="#F8F5EF" strokeWidth="5.6" />
          <rect x="9" y="15" width="12" height="4.2" fill="#E4A80C" />
        </svg>
      </span>
    </span>
  )
}
