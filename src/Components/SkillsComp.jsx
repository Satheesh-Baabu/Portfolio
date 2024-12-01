import React from 'react'

function SkillsComp(props) {
  return (
    <div className='pb-5'>
        <h1 className='text-3xl text-cyan-400 font-medium drop-shadow-xl inline'>{props.title}</h1>
        <div className='flex  '>
            {props.image.map((imglinks,index) => (
              <div className='w-20 mr-5 shadow-xl hover:shadow-cyan-500 mt-3 text-center'>
              <img src={imglinks}  key={index} className=' pt-2 '/>
              <p className='text-white text-center pt-2'>{props.names[index]}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default SkillsComp