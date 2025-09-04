import './globals.css'
import React from 'react'

export const metadata = {
  title: 'James Malone — Property & Investment',
  description: 'Transforming Properties into Profitable, Life-Enhancing Assets.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0b1220] text-white">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
