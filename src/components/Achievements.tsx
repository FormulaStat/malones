'use client'
import React from 'react'
import { motion } from 'framer-motion'

const milestones = [
  { year: '2015', title: 'Started in Property Management', desc: 'Started small property management firm.' },
  { year: '2018', title: 'First 20% ROI', desc: 'Delivered 20% ROI for investor portfolio.' },
  { year: '2020', title: 'International Expansion', desc: 'Services in 6 countries.' },
  { year: '2023', title: '100+ Clients', desc: 'Trusted by 100+ clients worldwide.' }
]

export default function Achievements() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Achievements</h3>
      <div className="space-y-4">
        {milestones.map((m, i) => (
          <motion.div key={m.year} initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="p-4 bg-white/5 rounded flex items-start gap-4">
            <div className="w-14 h-14 flex items-center justify-center bg-accent text-black font-bold rounded">{m.year}</div>
            <div>
              <div className="font-semibold">{m.title}</div>
              <div className="text-sm text-neutral-300">{m.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
