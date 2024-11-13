import React from 'react'
import Home from './Home'
import Loader from '../Components/Loader'
import { useState, useEffect } from 'react';

function First() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {setIsLoading(false);}, 2000);},[]);
  return (
    <>
      {isLoading?<Loader /> :<Home/>}
    </>
  )
}

export default First