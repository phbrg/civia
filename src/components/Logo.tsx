import { img } from '../lib/img'

/** Ícone "C" da CIVIA. */
export function Mark({ className = '' }: { className?: string }) {
  return <img src={img('civia-icon.svg')} alt="" aria-hidden="true" className={className} />
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <img src={img('civia-logo.svg')} alt="CIVIA" className={`inline-block h-[1.9em] w-auto ${className}`} />
  )
}
