import React from 'react'

function Button(props) {
  return (
    <>
    {/* <button className='w-28 text-white bg-cyan-400 p-2 rounded-3xl border border-cyan-400 transition-all duration-300 ease-in-out hover:text-cyan-400 hover:bg-transparent'>{props.content}</button> */}
    <a href="" download="SatheeshBaabuResume"><button className="relative px-6 py-3 font-semibold text-white bg-cyan-500 rounded-3xl overflow-hidden group hover:bg-transparent">
      <span className="relative z-10">{props.content}</span>
      <span className="absolute left-0 top-0 h-full w-full bg-cyan-400  transition-transform duration-700 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
    </button></a>
    </>
  )
}

export default Button