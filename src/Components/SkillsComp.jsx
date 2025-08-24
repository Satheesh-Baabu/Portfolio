import React from 'react'

function SkillsComp(props) {
  return (
    <div className='pb-5'>
        <h1 className='text-3xl text-cyan-400 font-medium drop-shadow-xl md:text-center animate-slide-left'>{props.title}</h1>
        <div className='flex md:justify-center animate-slide-up'>
            {props.image.map((imglinks,index) => (
              <div className='w-20 mr-5 shadow-xl hover:shadow-cyan-500 mt-3 text-center' key={index}>
                <img src={imglinks}   className=' pt-2 '/>
                <p className='text-white text-center pt-2'>{props.names[index]}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default SkillsComp