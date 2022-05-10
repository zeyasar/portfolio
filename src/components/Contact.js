import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#2F6073] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/a3c523ad-e086-4792-a5e6-3f8c34f88361" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#b5ab23] text-gray-300'>Contact</p>
                <p className='py-4 text-gray-300'>Submit the form below or shoot me an email - zynpysr67@gmail.com </p>
            </div>
            <input type="text" required name="name" placeholder='Name' className='my-4 p-2 bg-[#f2f2ec]'/>
            <input type="email" required name="name" placeholder='Email' className='my-4 p-2 bg-[#f2f2ec]'/>
            <textarea name="message" required rows="5" className='my-4 p-2 bg-[#f2f2ec]' placeholder='Message'></textarea>
            <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#b5ab23] hover:border-[#b5ab23] hover:text-black'>Let's send me a message.</button>
        </form>
    </div>
  )
}

export default Contact