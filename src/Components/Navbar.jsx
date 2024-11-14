import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ComponentsCss/Navbar.css'
import { FaBars,FaDiagramProject,FaPhone } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FaWindowClose,FaHome} from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";


function Navbar() {
  let Links = [
    { icon: <FaHome />, name: "Home", linkname: "#home" },
    { icon: <IoMdContact />, name: "About", linkname: "#about" },
    {icon:<IoSchool />,name:"Education", linkname:"#education"},
    {icon:<FaBars/>,name:"Skills", linkname:"#skills"},
    {icon:<FaDiagramProject />,name:"Projects", linkname:"#projects"},
    { icon: <FaPhone />, name: "Contact", linkname: "#contact" }
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
        <AnchorLink href="#home" className="font-bold text-2xl cursor-pointer flex items-center font-[Sans-serif] text-gray-800">
          {/* icons */}
          <span className='text-xl font-bold text-cyan-400 mr-1 pt-2 flex items-center'><h1 className='ml-2'>SB</h1> </span>
        </AnchorLink>
        <div onClick={() => setopen(!open)} className=' text-3xl absolute right-8 top-7 cursor-pointer md:hidden'>
          {open ? <FaWindowClose className='text-white' /> : <FaBars className='text-white'/>}
        </div>
        <ul className={`md:flex flex-col md:flex-row  w-44 bg-gradient-to-r from-cyan-950 to-gray-800 md:bg-none md:pb-0 pl-5 absolute md:static  md:z-auto z-[-1] right-0 md:w-auto md:pl-0  transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100'} [&>*:first-child]:ml-0`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 ' onClick={() => setopen(!open)}>

                <AnchorLink href={link.linkname} className='text-white  hover:text-cyan-400 duration-500 flex'><h1 className='mt-1 pr-1'>{link.icon}</h1>{link.name}</AnchorLink>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar