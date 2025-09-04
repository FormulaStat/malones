'use client'
import React from 'react'

const services = [
  { title: 'Property & Asset Management', desc: 'Full lifecycle management for residential & commercial assets' },
  { title: 'Financial & ROI Strategy', desc: 'Data-driven investment plans for predictable returns' },
  { title: 'International Consulting', desc: 'Cross-border market entry & partnership strategies' },
  { title: 'Mentorship & Education', desc: 'Workshops, courses and 1:1 coaching' }
]

export default function Services() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Services</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((s) => (
          <div key={s.title} className="p-6 bg-white/5 rounded hover:scale-[1.02] transition">
            <div className="font-semibold">{s.title}</div>
            <div className="text-sm text-neutral-300 mt-2">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
