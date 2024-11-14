import React from 'react'
import FlipCard from '../Components/FlipCard'

function Projects() {
  return (
    <div id="projects" className='h-max bg-gradient-to-r from-cyan-950 to-gray-800 w-full pt-10 px-12'>
      <h1 className='text-4xl md:text-5xl pb-10 font-medium font-serif text-white pt-12'>Projects</h1>
      <FlipCard />
    </div>
  )
}

export default Projects