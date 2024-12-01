import React from 'react'
import { Link } from 'react-router-dom';

function Developer() {
  var date =new Date;
  var year= date.getFullYear();
  return (
    <div className='text-center text-white bg-gradient-to-r from-cyan-950 to-gray-800 p-3'>&copy; {year}&nbsp;Developed by <b className='text-cyan-400'><Link to='/admin'>Satheesh Baabu</Link></b>. All rights reserved. </div>
  )
}

export default Developer