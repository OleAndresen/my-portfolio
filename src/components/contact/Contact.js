import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'

function Contact() {
  return (
    <div name='contact' className='text-white text-center font-medium'>
        <h2 className='text-2xl mt-10 mb-2'>Want to say hi?</h2>
        <a className='text-green-500 hover:underline' href="mailto:contact@ole-andresen.com">Contact me</a>
        <div className='flex justify-center p-7'>
              <a className='text-blue-500 hover:text-blue-700' href="https://www.linkedin.com/in/ole-andresen-in" target={'_blank'} rel="noreferrer"><AiFillLinkedin className='text-2xl' /></a>
              <a className='text-white hover:text-gray-400 ml-4 mr-4' href="https://github.com/OleAndresen" target={'_blank'} rel="noreferrer"><AiFillGithub className='text-2xl' /></a>
              <a className='text-sky-600 hover:text-sky-700' href="https://twitter.com/OleAndresen_" target={'_blank'} rel="noreferrer"><AiOutlineTwitter className='text-2xl' /></a>
        </div>
    </div>
  )
}

export default Contact