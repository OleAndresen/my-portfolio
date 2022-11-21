import React, { useRef, useState } from 'react'
import { gsap } from "gsap";
import { Typewriter } from 'react-simple-typewriter'
import emitter from '../Emitter';
import { BsSun } from 'react-icons/bs'

function UI({ onClick }) {
    const [scroll, setScroll] = useState(false);
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

  return (
    <>
        <div ref={buttons}>
            <button className='bg-neutral-50 text-black z-50 fixed rounded-xl p-3 text-xl right-14 top-10 shadow-md opacity-0' type='button' onClick={onClick}><BsSun /></button>
            <a href='/portfolio' className='bg-neutral-50 text-black font-medium z-50 fixed rounded-xl px-3 py-2.5 right-14 top-28 shadow-md cursor-pointer opacity-0'>2D</a>
        </div>
        <div ref={hero} className="relative z-10 text-white" onWheel={(e) => { if(scroll === true) {
            emitter.emit('intro-ready');
            handleScroll();
            emitter.removeAllListeners();
            }}}>
            <div ref={arrow} className="opacity-0 absolute z-10 bottom-20 left-2/4 text-white animate-bounce"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="currentColor" d="M12 14.95q-.2 0-.375-.063-.175-.062-.325-.212L6.675 10.05q-.275-.275-.262-.688.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l3.9 3.9 3.925-3.925q.275-.275.688-.263.412.013.687.288.275.275.275.7 0 .425-.275.7l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Z"/></svg></div>
            <section className="hero w-screen h-screen">
                <div className="relative h-full my-0 mx-auto max-w-screen-2xl">
                    <div className=" absolute top-1/2 text-lg left-1/3">
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