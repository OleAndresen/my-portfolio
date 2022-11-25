import React, { useRef, useState } from 'react'
import { gsap } from "gsap";
import { Typewriter } from 'react-simple-typewriter'
import emitter from '../Emitter';
import { BsSun } from 'react-icons/bs'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast';
import CatPic from '../../assets/pictures/Cat.png'

function UI(onClick) {
    const [scroll, setScroll] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false)
    const arrow = useRef()
    const hero = useRef()
    const buttons = useRef();
    
    const handleDone = () => { 
        let ctx = gsap.context(() => {   
            gsap.to(arrow.current, {opacity: 1});        
        }, arrow); 
        setScroll(true);
        handleButtons();
        return () => ctx.revert();
    }

    const handleButtons = () => { 
        let ctx = gsap.context(() => {   
            gsap.to(buttons.current.children, {opacity: 1});        
        }, buttons); 
        return () => ctx.revert();  
    }

    const handleScroll = () => { 
        let ctx = gsap.context(() => {   
            gsap.to(hero.current, {opacity: 0});
            gsap.to(hero.current, {display: 'none'});
        }, hero); 
        return () => ctx.revert();
    }

    const [toasted, setToasted] = useState(true);

    const toastMessage = () => {
        if(toasted === true) {
            setTimeout(toastPopUp, 12000);
        }
    }

    const toastPopUp = () => {
        toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-sm w-full bg-zinc-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={CatPic}
                      alt=""
                      onClick={onClick.m}
                      onPointerOver={(e) => {
                        document.body.style.cursor = 'pointer'
                      }}
                      onPointerOut={(e) => {
                        document.body.style.cursor = 'default'
                      }}
                    />
                  </div>
                  <div className="ml-5 flex-1">
                    <p className="text-sm font-medium text-neutral-200">
                      Need help?
                    </p>
                    <p className="mt-1 text-sm text-neutral-200">
                      Click one of the Cats for tips.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-zinc-700">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-neutral-200 hover:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                >
                  <AiOutlineClose className='text-xl'/>
                </button>
              </div>
            </div>
          ))
    }

  return (
    <>
        <div>
            <Toaster position="bottom-right" reverseOrder={true} toastOptions={{
            className: '',
            duration: 12000 }}
            containerStyle={{
                bottom: 86,
                right: 64,
              }}
            />
        </div>
        <div ref={buttons} className='hidden md:block'>
            <button className='bg-zinc-800 hover:bg-zinc-700 text-neutral-200 hover:text-green-500 z-50 fixed rounded-xl p-3 text-xl right-14 top-10 shadow-md opacity-0' type='button' onClick={onClick.onClick}><BsSun /></button>
            <a href='/portfolio' className='bg-zinc-800 hover:bg-zinc-700 text-neutral-200 hover:text-green-500 font-medium z-50 fixed rounded-xl px-3 py-2.5 right-14 top-28 shadow-md cursor-pointer opacity-0'>2D</a>
        </div>
        <div className='md:hidden text-neutral-200 hover:text-neutral-400 fixed left-10 top-10 z-50'>
            <button className='mobile-menu-button ' onClick={() => setNavbarOpen((prev) => !prev)}>{!navbarOpen ? (<HiOutlineMenu className='text-4xl'/>) : (<AiOutlineClose className='text-4xl' />)}</button>
        </div>
        <div className={navbarOpen ? "showMenuNav h-0" : "hidden"}>
            <div className='md:hidden z-10 '>
                <button className='bg-zinc-800 hover:bg-zinc-700 text-neutral-200  hover:text-green-500 rounded-xl p-3 text-xl shadow-md fixed right-14 top-10 z-50' type='button' onClick={onClick.onClick}><BsSun /></button>s
                <a href='/portfolio' className='bg-zinc-800 hover:bg-zinc-700 text-neutral-200 hover:text-green-500 font-medium z-50 fixed rounded-xl px-3 py-2.5 right-14 top-28 shadow-md cursor-pointer'>2D</a>
            </div>
        </div>
        <div ref={hero} className="relative z-10 text-white" onWheel={(e) => { if(scroll === true) {
                emitter.emit('intro-ready');
                handleScroll();
                toastMessage();
                setToasted(false);
                emitter.removeAllListeners();
            }}}
            onTouchMove ={(e) => { if(scroll === true) {
                emitter.emit('intro-ready');
                handleScroll();
                toastMessage();
                setToasted(false);
                emitter.removeAllListeners();
            }}}
            >
            <div ref={arrow} className="opacity-0 absolute z-10 bottom-20 left-1/2 -translate-x-1/2 text-neutral-200 animate-bounce"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="currentColor" d="M12 14.95q-.2 0-.375-.063-.175-.062-.325-.212L6.675 10.05q-.275-.275-.262-.688.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l3.9 3.9 3.925-3.925q.275-.275.688-.263.412.013.687.288.275.275.275.7 0 .425-.275.7l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Z"/></svg></div>
            <section className="hero w-screen h-screen">
                <div className="relative h-full my-0 mx-auto max-w-screen-2xl">
                    <div className=" absolute top-1/2 text-lg md:left-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 md:ml-20">
                        <Typewriter
                            words={['Welcome to my portfolio! ', 'Scroll down to start. ']}
                            cursor
                            loop={1}       
                            typeSpeed={60}
                            delaySpeed={2000}
                            onLoopDone={handleDone}        
                        />
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default UI