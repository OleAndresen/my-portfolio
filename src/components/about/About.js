import React from 'react'
import Me from '../../assets/pictures/Me.png'

function About() {
  return (
    <div name='about' className='text-center py-10 text-white'>
        <h1 className='text-3xl font-medium pb-1'>Hey there! I'm Ole</h1>
        <h2 className='text-base font-medium pb-6'>I have a serious passion for <span className='text-green-500'>Programming</span> and <span className='text-green-500'>Design</span>.</h2>
        <div className="mx-auto bg-gradient-to-b from-gray-700 rounded-full w-36 h-36 relative overflow-hidden md:h-36 md:w-36">
            <img src={Me} alt='' />
        </div>
        <p className='text-xs mx-8 leading-4 mt-6'>
            I'm a quietly confident person, curious with a knack for solving problems and high attention to detail. Besides <span className='text-green-700'>Frontend</span>, im a fan of photography, outdoor activities and building small games. I occasionally dive into <span className='text-green-700'>Backend</span> stuff.
        </p>
    </div>
  )
}

export default About