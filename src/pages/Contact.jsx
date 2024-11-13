import React from 'react'
import confetti from 'canvas-confetti'
import Developer from '../Components/Developer'
function Contact() {
  function submitclicked() {
    confetti({
      particleCount: 250,
      spread: 100
    }
    )
  }
  let inputcolor = "text-white placeholder:text-slate-200 border-2 border-cyan-600 w-full p-2 rounded my-2 font-mono focus:outline-none bg-transparent"
  return (
    <>
    <div className='bg-gradient-to-r from-cyan-950 to-gray-800 h-screen w-full px-12'>
      <h1 className='text-4xl md:text-5xl mb-10 font-medium font-serif text-white pt-12'>Contact <span className='text-cyan-500'>ME!</span></h1>
      <div className='flex flex-col md:flex-row w-full text-center'>
        <div className='w-3/4 border'>
          <p>content</p>
        </div>
        <div className='md:w-1/2 feedback p-5'>
            <input type='text' id='name' placeholder='Full Name' className={inputcolor} />
            <input type='text' id='email' placeholder='Email Address' className={inputcolor} />
            <input type='number' id='mobileno' placeholder='Mobile Number' className={inputcolor} />
            <input type='text' id='subject' placeholder='Subject' className={inputcolor} />
          <textarea rows={8} placeholder='Your Message' className="text-white placeholder:text-slate-200 border-2 border-cyan-600 p-2 rounded my-2 font-mono focus:outline-none bg-transparent  w-full"></textarea>

          <div><button className='text-white border-2 border-cyan-600 rounded p-1 w-24 bg-gradient-to-r from-cyan-950 to-gray-800 hover:text-cyan-600 hover:border-white text-lg font-normal font-mono' onClick={submitclicked}>Submit</button></div>
        </div>
      </div>
    </div>
    
    <Developer />
    </>
  )
}

export default Contact