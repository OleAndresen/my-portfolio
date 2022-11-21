import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'
import { BsSun } from 'react-icons/bs'
import { Link } from 'react-scroll'

function NavbarTD() {
  return (
    <>
        <div>
            <button className='bg-neutral-200 text-black z-50 fixed rounded-xl p-3 text-xl right-10 top-10 shadow-md'><BsSun /></button>
            <a href='/' className='bg-neutral-200 text-black font-medium z-50 fixed rounded-xl px-3 py-2.5 right-10 top-28 shadow-md cursor-pointer'>3D</a>
        </div>
        <div className='bg-neutral-900 fixed left-0 top-0 h-screen w-32 text-center justify-evenly flex flex-col'>
            <nav className=''>
                <ul className='text-neutral-200'>
                    <li className='p-3.5'><Link to='home-td' smooth={true} duration={500}><button className='hover:text-green-500' href="">Home</button></Link></li>
                    <li className='p-3.5'><Link to='about-td' smooth={true} duration={500}><button className='hover:text-green-500' href="">About</button></Link></li>
                    <li className='p-3.5'><Link to='work-td' smooth={true} duration={500}><button className='hover:text-green-500' href="">Projects</button></Link></li>
                    <li className='p-3.5'><Link to='contact-td' smooth={true} duration={500}><button className='hover:text-green-500' href="">Contact</button></Link></li>
                </ul>
            </nav>       
            <ul className='ml-12'>
                <li><a className='text-blue-500 hover:text-blue-700' href="https://www.linkedin.com/in/ole-andresen-in" target={'_blank'} rel="noreferrer"><AiFillLinkedin className='text-3xl' /></a></li>
                <li><a className='text-white hover:text-gray-400 ml-4 mr-4' href="https://github.com/OleAndresen" target={'_blank'} rel="noreferrer"><AiFillGithub className='text-3xl' /></a></li>
                <li><a className='text-sky-600 hover:text-sky-700' href="https://twitter.com/OleAndresen_" target={'_blank'} rel="noreferrer"><AiOutlineTwitter className='text-3xl' /></a></li>
            </ul>
        </div>
    </>
  )
}

export default NavbarTD
    