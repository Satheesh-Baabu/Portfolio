import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function Form() {
    const [name,setName] = useState('');
    const [pass,setPass] = useState('');
    useEffect(()=>{
      axios.get("http://localhost:8000/data")
      .then((result)=>console.log(result.data))
      .catch((err)=>{console.log(err)})
      
    })
    function savedata(){
      axios.post("http://localhost:8000/add",{name,pass})
      .then((result)=>console.log(result))
      .catch((err)=>{console.log(err)})
      
    }
    

  return (
    

    <div>
        <form action="">
          <label htmlFor="">username</label>
            <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
            <label htmlFor="">password</label>
            <input type="password" required onChange={(e)=>{setPass(e.target.value)}} />
            <button onClick={savedata}>submit</button>
            <p>{pass}</p>
        </form>
    </div>
  )
}
