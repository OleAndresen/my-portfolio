import React from 'react'
import ProjectTravel from '../../assets/pictures/projects/project-travel.jpg'

function WorkCardTravel() {
  return (
    <div>
        <img className='rounded-t-lg' src={ProjectTravel} width={100} height={100} alt='' />
        <div className='flex justify-center gap-6'>
            <a className='text-white bg-green-500 hover:bg-green-700 rounded-lg text-sm px-5 py-1 focus:outline-none' href="https://pers-travel-site.netlify.app/" target={'_blank'} rel="noreferrer">Live</a>
            <a className='text-white bg-green-500 hover:bg-green-700 rounded-lg text-sm px-5 py-1 focus:outline-none' href="https://github.com/OleAndresen/travel-react" target={'_blank'} rel="noreferrer">Github</a>
       </div>
    </div>
  )
}

export default WorkCardTravel