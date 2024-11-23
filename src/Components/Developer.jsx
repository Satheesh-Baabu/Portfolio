import React from 'react'

function Developer() {
  var date =new Date;
  var year= date.getFullYear();
  return (
    <div className='text-center text-white bg-gradient-to-r from-cyan-950 to-gray-800 p-3'>&copy; {year}&nbsp;Developed by <b className='text-cyan-400'><a href='/'>Satheesh Baabu</a></b>. All rights reserved. </div>
  )
}

export default Developer