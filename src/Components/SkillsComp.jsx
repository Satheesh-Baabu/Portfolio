import React from 'react'

function SkillsComp(props) {
  return (
    <div>
        <h1 className='text-3xl text-cyan-400 font-medium drop-shadow-2xl inline'>{props.title}</h1>
        <div className='flex'>
            {props.image.map((imglinks) => (
              <img src={imglinks} width={60} key={imglinks} className='m-7 ml-0 drop-shadow'/>
            ))}
        </div>
    </div>
  )
}

export default SkillsComp