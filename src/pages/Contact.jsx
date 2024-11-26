import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import Developer from '../Components/Developer'
import ContactButtons from '../Components/ContactButtons'
import axios from 'axios';
function Contact() {
  const [formData, setformData] = useState({
    fullname: '',
    email: '',
    mobileno: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value })
  }
  function submitclicked(e) {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.fullname.trim())
      validationErrors.fullname = "Name is required"

    if (!formData.email.trim())
      validationErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      validationErrors.email = "Email is not valid"

    if (!formData.mobileno.trim())
      validationErrors.mobileno = "Mobile Number is required"
    else if (formData.mobileno.length < 10 || formData.mobileno.length >10)
      validationErrors.mobileno = "Mobile number must be 10 digits"

    if (!formData.subject.trim())
      validationErrors.subject = "Subject is required"

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // axios.post("http://localhost:3000/contact",formData)
      axios.post("https://portfolioserver-1vcb.onrender.com/contact",formData)
      .then((result)=>{
        console.log(result)
        alert("Submitted successfully.");
        confetti({
          particleCount: 250,
          spread: 100
        });
        e.target.reset();
      })
      .catch((err)=>{console.log(err)})
      

    }
  }
  let errorsdisp = "text-cyan-500 text-start pl-1"
  let inputcolor = "text-white placeholder:text-slate-200 border-2 border-cyan-600 w-full p-2 rounded my-2 font-mono focus:outline-none bg-transparent"
  return (
    <div id="contact" className='h-max bg-gradient-to-r from-cyan-950 to-gray-800 w-full pt-10'>
      <div className=' w-full px-12'>
        <h1 className='text-4xl md:text-5xl mb-10 font-medium font-serif text-white pt-12'>Contact <span className='text-cyan-500'>ME!</span></h1>
        <div className='flex flex-col md:flex-row w-full justify-center'>
          <form className='md:w-6/12 lg:w-5/12 feedback p-5' onSubmit={submitclicked}>
            <input type='text' id='name' name='fullname' placeholder='Full Name' className={inputcolor} onChange={handleChange} />
            {errors.fullname && <><i class="fa-solid fa-circle-exclamation" style={{ color: "red" }}></i><span className={errorsdisp}>{errors.fullname}</span></>}
            <input type='email' id='email' name='email' placeholder='Email Address' className={inputcolor} onChange={handleChange} />
            {errors.email && <><i class="fa-solid fa-circle-exclamation" style={{ color: "red" }}></i><span className={errorsdisp}>{errors.email}</span></>}
            <input type='number' id='mobileno' name="mobileno" placeholder='Mobile Number' className={inputcolor} onChange={handleChange} />
            {errors.mobileno && <><i class="fa-solid fa-circle-exclamation" style={{ color: "red" }}></i><span className={errorsdisp}>{errors.mobileno}</span></>}
            <input type='text' id='subject' placeholder='Subject' name="subject" className={inputcolor} onChange={handleChange} />
            {errors.subject && <><i class="fa-solid fa-circle-exclamation" style={{ color: "red" }}></i><span className={errorsdisp}>{errors.subject}</span></>}
            <textarea rows={4} placeholder='Your Message' name="message" onChange={handleChange} className="text-white placeholder:text-slate-200 border-2 border-cyan-600 p-2 rounded my-2 font-mono focus:outline-none bg-transparent  w-full"></textarea>

            <button className='text-white border-2 border-cyan-600 rounded p-1 w-24 bg-gradient-to-r from-cyan-950 to-gray-800 hover:text-cyan-600 hover:border-white text-lg font-normal font-mono' type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <div className='flex flex-col place-items-center w-full mb-10'>
        <h1 className='text-4xl md:text-5xl mb-10 font-medium font-serif text-white pt-12'>Let's <span className='text-cyan-500'>Connect!</span></h1>
        <ContactButtons mxprop={"mx-5"} />
      </div>
      <Developer />
    </div>
  )
}

export default Contact