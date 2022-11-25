import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap";

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
     <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 z-50 w-1/4 hidden p-5 rounded-lg' ref={modal}>
        <div className='text-neutral-200'>
            <h1 className='text-2xl'>Need help?</h1>
        </div>
        <div className='text-neutral-200'>
            <ul className=''>
                <li>Move the camera by holding down the left mouse button.</li>
                <li>You can interact with some objects in the scene by clicking on them, like the the train sign for example. Feel free to play around.</li>
                <li></li>
            </ul>
        </div>
     </div>
     
    </>
   

   
  )
}

export default HelpModal