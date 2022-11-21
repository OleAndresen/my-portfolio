import React from 'react'
import AboutTD from './about/AboutTD'
import ContactTD from './contact/ContactTD'
import Hero from './hero/Hero'
import NavbarTD from './navbar/NavbarTD'
import Projects from './work/Projects'

function twoD() {
  return (
    <>
        <NavbarTD />
        <Hero />
        <AboutTD />
        <Projects />
        <ContactTD />
    </>
  )
}

export default twoD