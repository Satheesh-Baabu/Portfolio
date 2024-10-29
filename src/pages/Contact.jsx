import React from 'react'
import confetti from 'canvas-confetti'
function Contact() {
  function submitclicked()
  {
    confetti({
      particleCount:250,
      spread:100
    }
    )
  }
  let inputcolor="text-white placeholder:text-slate-200 border-2 border-cyan-600 w-72 p-2 rounded m-2 font-mono focus:outline-none bg-transparent"
  return (
    <div className='bg-gradient-to-r from-cyan-950 to-gray-800 '>
      <div className='flex justify-center w-full text-center items-center h-screen flex-col'>
        <h1 className='text-5xl mb-16 font-medium font-serif text-white'>Contact <span className='text-cyan-500'>ME!</span></h1>
        <div className=''>
          <input type='text'id='name' placeholder='Full Name' className={inputcolor}/>
          <input type='text'id='email' placeholder='Email Address' className={inputcolor}/>
        </div>
        <div>
          <input type='number'id='mobileno' placeholder='Mobile Number' className={inputcolor}/>
          <input type='text'id='subject' placeholder='Subject' className={inputcolor}/>
        </div>
        <div className='md:w-7/12 w-11/12 lg:w-5/12 '>
          <textarea rows={8} placeholder='Your Message' className="text-white placeholder:text-slate-200 border-2 border-cyan-600 p-2 rounded my-2 font-mono focus:outline-none bg-transparent w-full"></textarea>
        </div>
        <div><button className='text-white border-2 border-cyan-600 rounded p-1 w-24 bg-gradient-to-r from-cyan-950 to-gray-800 hover:text-cyan-600 hover:border-white text-lg font-normal font-mono' onClick={submitclicked}>Submit</button></div>
      </div>
    </div>
  )
}

export default Contact