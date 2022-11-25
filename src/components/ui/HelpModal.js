import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { AiOutlineClose } from 'react-icons/ai'

function HelpModal(mailboxOpened) {
    const modal = useRef();

    useEffect(() => {
        if(mailboxOpened.mailboxOpened === true) {
            let ctx = gsap.context(() => {   
                gsap.to(modal.current, {opacity: 1});
                gsap.to(modal.current, {display: 'block'});
            }, modal); 
            return () => ctx.revert();
          
        }

      }, [mailboxOpened.mailboxOpened]);

  return (
    <>
     <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 z-50 md:w-1/4 hidden p-5 rounded-lg' ref={modal}>
        <div className='text-neutral-200 flex justify-between'>
            <h1 className='text-2xl text-green-500'>Need help?</h1>
            <button className='text-xl' onClick={mailboxOpened.onClick}><AiOutlineClose  /></button>
        </div>
        <div className='text-neutral-200'>
            <ul className='mt-5'>
                <li className='p-3'>Move the camera by holding down the left mouse button.</li>
                <li className='p-3'>The bigger screen on the back of the building lets you scroll.</li>
                <li className='p-3'>You can interact with some objects in the scene by clicking on them, like the the train sign for example. Feel free to play around.</li>
                <li className='p-3'>The buttons in the top right toggle day and night and let you change the scene to a 2D one.</li>
                <li className='p-3'>I'll add things from time to time so feel free to visit the site again later.</li>
                <li className='p-3'>Go explore and enjoy!</li>
            </ul>
        </div>
     </div>
     
    </>
   

   
  )
}

export default HelpModal