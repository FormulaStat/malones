import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Achievements from '../components/Achievements'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'

export default function Page() {
  return (
    <>
      <Hero />
      <section className="section container">
        <About />
      </section>

      <section className="section bg-[#071227]">
        <div className="container">
          <Achievements />
        </div>
      </section>

      <section className="section container">
        <Services />
      </section>

      <section className="section container">
        <ContactForm />
      </section>
    </>
  )
}
