import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Hero() {
  return (
    <div className='bg-zinc-900'>
      <div name='home-td' className='md:ml-32 h-screen'>
          <div className="relative h-full my-0 mx-auto max-w-screen-2xl">
              <div className=" absolute top-1/2 text-lg left-1/3 text-neutral-200">
                  <Typewriter
                      words={['Welcome to my portfolio! ', 'Scroll down whenever you like. ']}
                      cursor
                      loop={false}       
                      typeSpeed={60}
                      delaySpeed={2500}       
                  />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero