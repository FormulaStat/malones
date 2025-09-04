'use client'
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ children, variant = 'primary', ...props }: Props) {
  const base = 'px-5 py-2 rounded-md font-medium transition-transform inline-flex items-center gap-2'
  const styles =
    variant === 'primary'
      ? 'bg-accent text-black hover:scale-105'
      : 'bg-transparent border border-neutral-700 hover:bg-white/5'

  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  )
}
