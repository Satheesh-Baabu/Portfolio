import React from 'react'
import EducationField from '../Components/EducationField'

function Education() {
  return (
    <div id="education" className='h-max bg-gradient-to-r from-cyan-950 to-gray-800 w-full pt-10 px-12'>
      <h1 className='text-4xl md:text-5xl pb-10 font-medium font-serif text-white pt-12'>Education</h1>
      <EducationField />
    </div>
  )
}

export default Education