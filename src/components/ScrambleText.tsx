import React, { useState, useEffect } from "react";

const CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

export const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isHovering) {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText((prev) => 
          prev.split("").map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join("")
        );
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 3; 
      }, 30);
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(interval);
  }, [isHovering, text]);

  return (
    <span 
      onMouseEnter={() => setIsHovering(true)} 
      onMouseLeave={() => setIsHovering(false)}
      className="inline-block"
    >
      {displayText}
    </span>
  );
};
