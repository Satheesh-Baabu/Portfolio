import React from 'react'

function ContactButtons(props) {
    let sty=`text-cyan-400 hover:text-white hover:bg-cyan-400 border border-none hover:border hover:border-cyan-400 rounded-full p-2 text-3xl w-14 hover:scale-110 ease-in-out duration-700 group ${props.mxprop} ${props.btnprop}`
  return (
    <div className='w-fit'>
        <button className={sty}><a href="mailto:satheeshbaabum@gmail.com?subject=Mail%20from%20Portfolio"><i className="fa-solid fa-envelope"></i></a></button>
        <button className={sty}><a href='https://github.com/Satheesh-Baabu/' target="_blank"><i className="fa-brands fa-github"></i></a></button>
        <button className={sty}><a href='https://www.linkedin.com/in/satheeshbaabum/' target="_blank"><i className="fa-brands fa-linkedin"></i></a></button>
        
        <button className={sty}><a href="https://api.whatsapp.com/send?phone=9360301475&text=Hello" target="_blank"><i className="fa-brands fa-whatsapp"></i></a></button>
    </div>
  )
}

export default ContactButtons