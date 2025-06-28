'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
}

export function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <motion.div
      className={`page-transition ${className}`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
} 