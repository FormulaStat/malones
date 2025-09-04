'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Button from './ui/button'

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/images/cpbg.png"
        alt="hero bg"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          James Malone — Property & Investment Expert
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-lg max-w-2xl mx-auto text-neutral-200"
        >
          Transforming Properties into Profitable, Life-Enhancing Assets.
        </motion.p>

        <motion.div className="mt-8 flex gap-4 justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <Button>📩 Work With Me</Button>
          <Button variant="ghost">🌍 Explore Services</Button>
        </motion.div>
      </div>
    </header>
  )
}
