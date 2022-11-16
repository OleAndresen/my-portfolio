import React from 'react'
import ProjectTravel from '../../assets/pictures/projects/project-travel.jpg'
import ProjectPoortfolioOld from '../../assets/pictures/projects/project-portfolio-old.png'

function Work() {
  return (
    <div name='work'>
        <h1 className='my-4 text-white text-center text-2xl'>Projects i worked on</h1>
        <div className='max-w-sm text-white text-xs font-medium rounded-lg shadow-md text-center justify-center bg-neutral-900 mx-12 my-6'>
            <img className='rounded-t-lg' src={ProjectTravel} width={260} height={260} alt='' />
            <div className="p-4">
                <h3 className='text-xl mb-1'>Travel Website</h3>
                <p className='mb-5'>A travel website to discorver locations around the world.</p>
                <ul className='flex justify-center gap-4 mb-4'>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML, CSS</li>
                </ul>
                <div className='flex justify-center gap-6'>
                    <a className='text-white bg-green-500 hover:bg-green-700 rounded-lg text-sm px-5 py-1 focus:outline-none' href="https://pers-travel-site.netlify.app/" target={'_blank'} rel="noreferrer">Live</a>
                    <a className='text-white bg-green-500 hover:bg-green-700 rounded-lg text-sm px-5 py-1 focus:outline-none' href="https://github.com/OleAndresen/travel-react" target={'_blank'} rel="noreferrer">Github</a>
                </div>
            </div>
        </div>
        <div className='max-w-sm text-white text-xs font-medium rounded-lg shadow-md text-center justify-center bg-neutral-900 mx-12'>
            <img className='rounded-t-lg' src={ProjectPoortfolioOld} width={260} height={260} alt='' />
            <div className="p-4">
                <h3 className='text-xl mb-1'>Old Portfolio</h3>
                <p className='mb-5'>My old portfolio in a different setting and less content.</p>
                <ul className='flex justify-center gap-4 mb-4'>
                    <li>Three.js</li>
                    <li>JavaScript</li>
                    <li>HTML, CSS</li>
                </ul>
                <div className='flex justify-center gap-6'>
                    <a className='text-white bg-green-500 hover:bg-green-700 rounded-lg text-sm px-5 py-1 focus:outline-none' href="https://oleandresen-portfolio-old.netlify.app/" target={'_blank'} rel="noreferrer">Live</a>
                    <a className='text-white bg-green-500 hover:bg-green-700 rounded-lg text-sm px-5 py-1 focus:outline-none' href="https://github.com/OleAndresen/my-portfolio-old" target={'_blank'} rel="noreferrer">Github</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work