import React, { useEffect, useState } from "react";

const Typewriter = ({ phrases, period = 2000 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullTxt = phrases[i];

      if (isDeleting) {
        setText(fullTxt.substring(0, text.length - 1));
      } else {
        setText(fullTxt.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullTxt) {
        setTimeout(() => setIsDeleting(true), period);
        setDelta(period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(500);
      } else {
        setDelta(200 - Math.random() * 100);
      }
    };

    const ticker = setTimeout(handleTyping, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, delta, loopNum, phrases, period]);

  return (
    <div>
      <a href="#" className="typewrite">
        <span className="wrap leading-normal">Aspiring {text}</span>
        <span className="border-r-2 border-cyan-500 animate-blink"></span>
      </a>
    </div>
  );
};
export default Typewriter;