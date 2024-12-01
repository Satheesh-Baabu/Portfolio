import React from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from '../Components/Navbar'
import Profile from '../assets/SatheeshBaabu.png'
import ContactButtons from '../Components/ContactButtons'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Typewriter from '../Components/Typewriter'
import TopArrow from '../Components/TopArrow'


function Home() {
  
  return (
    <div id="home" className='selection:text-white selection:bg-cyan-400'>
      <div className='bg-gradient-to-r from-cyan-950 to-gray-800 w-full md:h-max overflow-hidden'>
        <Navbar />
        <div className='pt-24 px-10 h-fit flex flex-col md:flex-row place-items-center space-evenly'>
          <div className=' basis-3/4'>
            <h1 className='text-white md:text-6xl sm:text-4xl text-4xl font-semibold'>Hi, I'm <span className='text-cyan-400 text-4xl sm:text-6xl font-bold font-serif'>Satheesh Baabu</span></h1>
            <h3 className='text-white md:text-5xl sm:text-4xl text-4xl mt-4 font-semibold'><Typewriter phrases={["Web Developer","MERN Stack Developer","Full Stack Developer","App Developer"
            ]} period={1500}/></h3>
            <p className='text-white mt-9 md:text-lg'>I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. </p> 
            <ContactButtons btnprop={"sm:mt-10 mt-5 mr-5"}/>
             
          </div>
          <div className='basis-1/2  place-items-center'>
            <img src={Profile} alt="NO Profile" className='md:size-full rounded-full ' />
          </div>
        </div>

      </div>
      <About />
      <Education />
      <Skills />
      <Projects/>
      <Contact />
      <TopArrow />
    </div>
  )
}

export default Home