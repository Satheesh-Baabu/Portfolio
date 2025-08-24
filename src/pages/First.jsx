// import React from 'react'
// import Home from './Home'
// import Loader from '../Components/Loader'
// import { useState, useEffect } from 'react';

// function First() {
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     setTimeout(() => { setIsLoading(false); }, 2000);
//   }, []);
//   useEffect(() => {
//     const elements = document.querySelectorAll(
//       ".animate-slide-left, .animate-slide-right, .animate-slide-up"
//     );

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("in-view");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);
//   return (
//     <>
//       {isLoading ? <Loader /> : <Home />}
//     </>
//   )
// }

// export default First

import React, { useState, useEffect } from 'react'
import Home from './Home'
import Loader from '../Components/Loader'

function First() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return; // 👈 Only run observer after Home is shown

    const elements = document.querySelectorAll(
      ".animate-slide-left, .animate-slide-right, .animate-slide-up"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // only once
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]); // 👈 re-run when Home mounts

  return (
    <>
      {isLoading ? <Loader /> : <Home />}
    </>
  )
}

export default First
