import React from 'react'
import ProjectTravel from '../../assets/pictures/projects/project-travel.jpg'
import ProjectPoortfolioOld from '../../assets/pictures/projects/project-portfolio-old.png'
import './Projects.css'

function Projects() {
  return (
    <div className=''>
        <div name='work-td' className='md:ml-32'>
            <h1 className='text-project absolute right-3 text-gray-800'>01</h1>
            <div className='md:ml-28 pt-80 text-neutral-200 text-center md:text-left'> 
                <h2 className='text-green-500 text-6xl'>Travel Website</h2>
                <img className='w-7/12 mt-4 inline-block brightness-90' src={ProjectTravel} alt="" />
                <p className='mt-6'>A travel website to discover locations around the world.</p>
                <ul className='flex gap-4 mt-4 mb-6 justify-center md:justify-start'>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML, CSS</li>
                </ul>
                <div className='flex gap-6 justify-center md:justify-start'>
                    <a className='text-neutral-200 bg-green-600 hover:bg-green-800 rounded-lg text-sm px-5 py-2 focus:outline-none' href="https://pers-travel-site.netlify.app/" target={'_blank'} rel="noreferrer">Live</a>
                    <a className='text-neutral-200 bg-green-600 hover:bg-green-800 rounded-lg text-sm px-5 py-2 focus:outline-none' href="https://github.com/OleAndresen/travel-react" target={'_blank'} rel="noreferrer">Github</a>
                </div>
            </div>
            <h1 className='text-project-two absolute md:left-56 left-6 text-zinc-700'>02</h1>
            <div className='mt-80 md:text-right text-center md:mr-28 text-neutral-200'>
                <h2 className='text-green-500 text-6xl'>Old Portfolio</h2>
                <img className='w-7/12 mt-4 inline-block brightness-75' src={ProjectPoortfolioOld} alt="" />
                <p className='mt-6'>My old portfolio in a different setting and less content.</p>
                <ul className='gap-4 mt-4 mb-6 flex md:justify-end justify-center'>
                    <li>Three.js</li>
                    <li>JavaScript</li>
                    <li>HTML, CSS</li>
                </ul>
                <div className='flex gap-6 md:justify-end justify-center pb-10'>
                    <a className='text-neutral-200 bg-green-600 hover:bg-green-800 rounded-lg text-sm px-5 py-2 focus:outline-none' href="https://oleandresen-portfolio-old.netlify.app/" target={'_blank'} rel="noreferrer">Live</a>
                    <a className='text-neutral-200 bg-green-600 hover:bg-green-800 rounded-lg text-sm px-5 py-2 focus:outline-none' href="https://github.com/OleAndresen/my-portfolio-old" target={'_blank'} rel="noreferrer">Github</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Projects