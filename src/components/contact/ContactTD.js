import React from 'react'

function ContactTD() {
  return (
    <div>
        <div name='contact-td' className='h-screen flex flex-col justify-center'>
            <div className='text-center text-neutral-200'>
                <h1 className='text-6xl mb-24'>Want to say hi?</h1>
                <a className='px-8 py-4 border hover:bg-green-600 hover:border-green-600' href="mailto:contact@ole-andresen.com">Contact Me</a>
            </div>
        </div>
    </div>
  )
}

export default ContactTD