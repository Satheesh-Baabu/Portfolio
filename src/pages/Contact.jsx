import React from 'react'
import confetti from 'canvas-confetti'
import Developer from '../Components/Developer'
import ContactButtons from '../Components/ContactButtons'
function Contact() {
  function submitclicked() {
    alert("Submitted successfully.")

    confetti({
      particleCount: 250,
      spread: 100
    }
    )

  }
  let inputcolor = "text-white placeholder:text-slate-200 border-2 border-cyan-600 w-full p-2 rounded my-2 font-mono focus:outline-none bg-transparent"
  return (
    <div id="contact" className='h-max bg-gradient-to-r from-cyan-950 to-gray-800 w-full pt-10'>
      <div className=' w-full px-12'>
        <h1 className='text-4xl md:text-5xl mb-10 font-medium font-serif text-white pt-12'>Contact <span className='text-cyan-500'>ME!</span></h1>
        <div className='flex flex-col md:flex-row w-full text-center justify-center'>
          <div className='md:w-6/12 lg:w-5/12 feedback p-5'>
            <input type='text' id='name' placeholder='Full Name' className={inputcolor} />
            <input type='text' id='email' placeholder='Email Address' className={inputcolor} />
            <input type='number' id='mobileno' placeholder='Mobile Number' className={inputcolor} />
            <input type='text' id='subject' placeholder='Subject' className={inputcolor} />
            <textarea rows={4} placeholder='Your Message' className="text-white placeholder:text-slate-200 border-2 border-cyan-600 p-2 rounded my-2 font-mono focus:outline-none bg-transparent  w-full"></textarea>

            <div><button className='text-white border-2 border-cyan-600 rounded p-1 w-24 bg-gradient-to-r from-cyan-950 to-gray-800 hover:text-cyan-600 hover:border-white text-lg font-normal font-mono' onClick={submitclicked}>Submit</button></div>
          </div>
        </div>
      </div>
      <div className='flex flex-col place-items-center w-full mb-10'>
        <h1 className='text-4xl md:text-5xl mb-10 font-medium font-serif text-white pt-12'>Let's <span className='text-cyan-500'>Connect!</span></h1>
        <ContactButtons mxprop={"mx-5"}/>
      </div>
      <Developer />
    </div>
  )
}

export default Contact