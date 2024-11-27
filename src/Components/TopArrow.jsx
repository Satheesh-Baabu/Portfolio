import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function TopArrow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollFunction = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);


  return (
    <AnchorLink href="#home" >
        <button className={`fixed h-12 w-12 bottom-5 right-7 border border-cyan-500 rounded-full text-white bg-cyan-500 z-50 flex items-center justify-center hover:bg-transparent hover:border-cyan-400 hover:text-cyan-500 drop-shadow-lg shadow animate-bounce ${isVisible ? "block" : "hidden"}`} aria-label="Scroll to top">
      <i className="fa-solid fa-arrow-up"></i>
    </button></AnchorLink>
  );
}

export default TopArrow;
