'use client'

import { motion } from 'framer-motion'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'
import { SocialIcons } from './SocialIcons'
import { useTransition } from 'react'

export function BartenderHero() {
  const [isPending, startTransition] = useTransition()

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen hero-image flex items-center justify-center overflow-hidden">
      {/* Background overlay animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      />

      {/* Floating social icons */}
      <SocialIcons variant="floating" />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="space-y-6"
        >
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            <span className="block">DJ</span>
            <span className="block cocktail-shimmer bg-clip-text text-transparent">
              Pourmaster
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Master of cocktails, curator of vibes. 
            <br />
            <span className="afro-gold">Afro Pop bartender bringing liquid artistry to life.</span>
          </motion.p>

          {/* Animated accent line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* Call to action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <Button
            as={Link}
            href="/drinks"
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105"
            onPress={() => startTransition(() => {})}
            isLoading={isPending}
          >
            🍹 Explore Signature Drinks
          </Button>

          <Button
            as={Link}
            href="/contact"
            variant="bordered"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            📞 Book an Experience
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated particles/bubbles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>
    </section>
  )
}
