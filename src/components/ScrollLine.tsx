import { motion, useScroll, useSpring } from 'motion/react'

/** A curva dourada dos slides, desenhada conforme a página rola. */
export function ScrollLine() {
  const { scrollYProgress } = useScroll()
  const pathLength = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M96 0C96 70 6 90 8 170S94 270 90 350 6 450 10 540 94 640 90 730 6 830 10 910 70 980 50 1000"
        fill="none"
        stroke="#E4A80C"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        style={{ pathLength, opacity: 0.32 }}
      />
    </svg>
  )
}
