import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ComponentsCss/Navbar.css'
import { FaBars } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FaInfoCircle,FaWindowClose,FaHome} from "react-icons/fa";

function Navbar() {
  let Links = [
    { icon: <FaHome />, name: "Home", linkname: "/" },
    { icon: <FaInfoCircle />, name: "About", linkname: "/about" },
    { icon: <IoMdContact />, name: "Contact", linkname: "/contact" }
];
let [open, setopen] = useState(false)

function moveToTop () {
    window.scrollTo(0, 0);
    return null
}
  return (
    // <div className='navbar'>
    //     <ul>
    //       <li><Link to='/' className='links'>Home</Link></li>
    //       <li><Link to='/About' className='links'>About</Link></li>
    //       <li><Link to='/Contact' className='links'>Contact</Link></li>
    //     </ul>
    // </div>  

    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className='md:flex items-center justify-between bg-gradient-to-r from-cyan-950 to-gray-800 py-4 md:px-10 px-7'>
        <Link to="/" className="font-bold text-2xl cursor-pointer flex items-center font-[Sans-serif] text-gray-800">
          {/* icons */}
          <span className='text-xl font-bold text-cyan-400 mr-1 pt-2 flex items-center'><h1 className='ml-2'>SB</h1> </span>
        </Link>
        <div onClick={() => setopen(!open)} className=' text-3xl absolute right-8 top-7 cursor-pointer md:hidden'>
          {open ? <FaWindowClose className='text-white' /> : <FaBars className='text-white'/>}
        </div>
        <ul className={`md:flex flex-col md:flex-row items-center bg-gradient-to-r from-cyan-950 to-gray-800 md:bg-none md:pb-0  pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100'} [&>*:first-child]:ml-0`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 ' onClick={() => setopen(!open)}>

                <Link to={link.linkname} className='text-white  hover:text-cyan-400 duration-500 flex' onClick={() => moveToTop()}><h1 className='mt-1 pr-1'>{link.icon}</h1>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar