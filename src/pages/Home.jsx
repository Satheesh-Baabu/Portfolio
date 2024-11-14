import React from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from '../Components/Navbar'
import Profile from '../assets/SatheeshBaabu.png'
import ContactButtons from '../Components/ContactButtons'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'


function Home() {
  
  return (
    <div id="home">
      <div className='bg-gradient-to-r from-cyan-950 to-gray-800 w-full md:h-max overflow-hidden'>
        <Navbar />
        <div className='pt-24 px-10 h-fit flex flex-col md:flex-row place-items-center space-evenly'>
          <div className=' basis-3/4'>
            <h1 className='text-white md:text-6xl sm:text-4xl text-3xl font-bold'>Hi, I'm <span className='text-cyan-400 text-4xl sm:text-5xl'>Satheesh Baabu</span></h1>
            <h3 className='text-white md:text-5xl sm:text-4xl text-4xl mt-4 font-semibold'>Aspiring Web Developer</h3>
            <ContactButtons btnprop={"sm:mt-20 mt-10 mr-5"}/>
            {/* <p className='text-white mt-9'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas fuga eos debitis quaerat molestias ipsum aspernatur culpa id nostrum aliquam, ipsam harum sunt est ex? Dolores vel quod facilis sapiente.</p> */}
          </div>
          <div className='basis-1/2  place-items-center'>
            <img src={Profile} alt="NO Profile" className='md:size-full rounded-full' />
          </div>
        </div>

      </div>
      <About />
      <Education />
      <Skills />
      <Projects/>
      <Contact />
    </div>
  )
}

export default Home