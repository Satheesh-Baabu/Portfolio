import React from 'react'
import Navbar from '../Components/Navbar'
import Profile from '../assets/SatheeshBaabu.png'

function Home() {
  return (
    <div className='bg-gradient-to-r from-cyan-950 to-gray-800 w-full md:h-screen overflow-hidden'>
      <Navbar/> 
      <div className='pt-24 px-10 h-screen flex flex-col md:flex-row place-items-center space-evenly'>
        <div className=' basis-3/4'>
          <h1 className='text-white md:text-6xl sm:text-4xl text-3xl font-bold'>Hi, I'm Satheesh Baabu</h1>
          <h3 className='text-cyan-400 md:text-5xl sm:text-4xl text-2xl mt-4 font-semibold'>Aspiring Web Developer</h3>
          <p className='text-white mt-9'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas fuga eos debitis quaerat molestias ipsum aspernatur culpa id nostrum aliquam, ipsam harum sunt est ex? Dolores vel quod facilis sapiente. 
          </p>
        </div>
        <div className='basis-1/2  place-items-center'> 
          <img src={Profile} alt="NO Profile" className='md:size-full '/>
        </div>
      </div>
    </div>
  )
}

export default Home