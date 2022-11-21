import React from 'react'
import { Link } from 'react-scroll'

function AboutTD() {
  return (
    <div className='bg-zinc-900'>
      <div name='about-td' className='md:ml-32 h-screen flex flex-col justify-center'>
          <div className=' ml-28 text-neutral-200'>
              <h1 className='text-8xl font-medium'>
                  <span>Hi, I'm </span>
                <span className='text-green-500'>Ole</span>
              </h1>
              <h2 className='text-3xl font-medium mt-2.5'>Frontend Developer</h2>
              <p className='leading-7 mt-8 w-4/12 mb-12'>
              I'm a quietly confident person, curious with a knack for solving problems and high attention to detail. Besides <span className='text-green-600'>Frontend</span>, im a fan of photography, outdoor activities and building small games. I occasionally dive into <span className='text-green-600'>Backend</span> stuff.
              </p>
              <div className='flex flex-row'>
                <Link to='contact-td' smooth={true} duration={500}><button className='px-8 py-2.5 border hover:bg-green-600 hover:border-green-600' href="">Contact</button></Link>
                <form action="./Lebenslauf.pdf" method="get" target="_blank">
                  <button className='px-8 py-2.5 border ml-12 hover:bg-green-600 hover:border-green-600' type="submit">Resume</button>
                </form>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AboutTD