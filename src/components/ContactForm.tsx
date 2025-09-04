'use client'
import React, { useState } from 'react'
import Button from './ui/button'

export default function ContactForm() {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // For now we just simulate sending
    console.log({ name, email, message })
    setSent(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="max-w-2xl mx-auto bg-white/5 p-6 rounded">
      <h3 className="text-2xl font-bold mb-4">Contact</h3>
      {sent && <div className="mb-4 text-sm text-green-300">Message sent (simulated).</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full p-3 rounded bg-white/5" required />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="w-full p-3 rounded bg-white/5" required />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" rows={5} className="w-full p-3 rounded bg-white/5" required />
        <div className="flex gap-3">
          <Button type="submit">Let’s Build Success Together 🚀</Button>
          <Button variant="ghost" onClick={() => { setName(''); setEmail(''); setMessage('') }}>Reset</Button>
        </div>
      </form>
    </div>
  )
}
