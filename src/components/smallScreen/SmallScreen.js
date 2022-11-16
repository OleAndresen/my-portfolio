import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'

function SmallScreen() {
  return (
    <div className=''>
        <section className='p-4'>
            <h1 className='text-3xl tracking-tight font-extrabold text-white'>
              <span>Hi, I'm </span>
              <span className='text-green-500'>Ole</span>
            </h1>
            <h1 className='mt-3 tracking-tight font-extrabold text-white'>Frontend Developer</h1>
            <div className='mt-3 flex justify-center'>
              <a className='text-blue-500' href="https://www.linkedin.com/in/ole-andresen-in" target={'_blank'} rel="noreferrer"><AiFillLinkedin className='text-2xl' /></a>
              <a className='text-white ml-4 mr-4' href="https://github.com/OleAndresen" target={'_blank'} rel="noreferrer"><AiFillGithub className='text-2xl' /></a>
              <a className='text-sky-600' href="https://twitter.com/OleAndresen_" target={'_blank'} rel="noreferrer"><AiOutlineTwitter className='text-2xl' /></a>
            </div>
        </section>
    </div>
  )
}

export default SmallScreen