import React from 'react'
import Home from './Home'
import Loader from '../Components/Loader'
import { useState, useEffect } from 'react';

function First() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout as needed
  }, []);
  return (
    <>{isLoading?<Loader /> :<Home/>}
    </>
  )
}

export default First