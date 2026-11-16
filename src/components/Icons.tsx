import type { SVGProps } from 'react'

const paths = {
  eye: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  ear: 'M7 9a5 5 0 1 1 10 0c0 2.5-1.6 3.4-2.6 4.6-.9 1-1.1 1.9-1.4 3a3 3 0 0 1-5.8-.6M10 9a2 2 0 1 1 4 0',
  camera: 'M3 8h3l1.6-2.4h8.8L18 8h3v11H3V8Zm9 8.5a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z',
  spark: 'M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M18 6l-2.5 2.5m-7 7L6 18',
  wave: 'M3 12h2m3-5v10m4-13v16m4-12v8m3-5h2',
  pin: 'M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Zm0-8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  route: 'M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 17h6.5a3.5 3.5 0 0 0 0-7h-5a3.5 3.5 0 0 1 0-7H16',
  hand: 'M8 12V5.5a1.5 1.5 0 0 1 3 0V11m0-1.5V4a1.5 1.5 0 0 1 3 0v5.5m0-4a1.5 1.5 0 0 1 3 0V13m-9 0-1.2-1.7a1.6 1.6 0 0 0-2.6 1.8L7.5 17A6 6 0 0 0 13 21h.5a5.5 5.5 0 0 0 5.5-5.5V10',
  bell: 'M6 16v-5a6 6 0 1 1 12 0v5l2 2H4l2-2Zm4 4a2 2 0 0 0 4 0',
  alert: 'M12 4 2.5 20h19L12 4Zm0 6v4.5m0 2.5v.1',
  lock: 'M6 11h12v9H6v-9Zm3 0V8a3 3 0 0 1 6 0v3',
  check: 'm5 12.5 4.5 4.5L19 7.5',
  arrow: 'M5 12h14m-5-5 5 5-5 5',
  external: 'M14 4h6v6m0-6-9 9M18 14v5H5V6h5',
} as const

export type IconName = keyof typeof paths

export function Icon({ name, ...p }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...p}
    >
      <path d={paths[name]} />
    </svg>
  )
}
