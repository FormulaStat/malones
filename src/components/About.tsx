'use client'
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 })

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center" ref={ref}>
      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
        <Image src="/images/portrait.png" alt="James Malone" fill style={{ objectFit: 'cover' }} />
      </div>

      <div>
        <h2 className="text-3xl font-bold">About James Malone</h2>
        <p className="mt-4 text-neutral-200">
          I transform underperforming properties into sustainable, profitable assets. I combine strategy, operational rigor and relationship-driven service to deliver superior results.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <Stat label="Years Experience" value={inView ? 10 : 0} />
          <Stat label="Avg ROI" value={inView ? 25 : 0} percent />
          <Stat label="Countries" value={inView ? 12 : 0} />
          <Stat label="Clients" value={inView ? 100 : 0} />
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, percent = false }: { label: string; value: number; percent?: boolean }) {
  return (
    <div className="bg-white/5 p-4 rounded">
      <div className="text-2xl font-semibold">
        <CountUp end={value} duration={1.6} suffix={percent ? '%' : ''} />
      </div>
      <div className="text-sm text-neutral-300">{label}</div>
    </div>
  )
}
