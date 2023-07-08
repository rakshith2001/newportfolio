import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[710px] py-10 bg-[#0b0c10]  flex justify-center' name='contact'>
   
        <form method='POST' action='https://getform.io/f/87e54070-874e-4a43-bb06-451af19c3286' className='flex flex-col max-w-[600px] w-full border-4 border-[#66FCF1] rounded-lg p-5 m-2 bg-[#1f2833]'>
            <div className='pb-8'>
                <p className='text-4xl  text-[#c5c6c7] font-bold inline border-b-4 border-[#66fcf1]'>Contact</p>
                <p className='text-gray-300 py-4'>Send me a message and let's connect dm me workrakshith@gmamil.com</p>
            </div>
            <input className='p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2' type='Email' placeholder='Email' name='email' />
            <textarea className='p-2' name='message'   rows='10' placeholder='Message'></textarea>
            <button className='text-white py-2 border-2 px-4 py-3 my-8 mx-auto border-[#45a29e] rounded-sm border-3  hover:bg-[#66FCF1] hover:text-black transition  hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none '>
                Submit
            </button>
        </form>
      </div>

 
  )
}

export default Contact