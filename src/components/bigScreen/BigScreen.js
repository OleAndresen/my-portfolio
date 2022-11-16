import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Navbar from '../navbar/Navbar'
import Work from '../work/Work'

function BigScreen() {
  return (
    <>
        <Navbar />
        <About />
        <Work />
        <Contact />
    </>
  )
}

export default BigScreen