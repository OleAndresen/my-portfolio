import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <nav className="container">   
        <ul className="flex items-center justify-between font-bold text-xs p-3">
          <li className='text-white hover:text-green-500'><a href="/portfolio">2D View</a></li>
          <Link to='about'><li className='text-white hover:text-green-500 ml-24'>About</li></Link>
          <Link to='work'><li className='text-white hover:text-green-500'>Projects</li></Link>
          <Link to='contact'><li className='text-white hover:text-green-500'>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar