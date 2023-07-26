import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const targetText = "Hello World";
    const typingDelay = 100; // Adjust the typing speed (milliseconds per character)
    const deletingDelay = 50; // Adjust the deleting speed (milliseconds per character)
    const pauseDuration = 1000; // Adjust the pause duration between typing and deleting (milliseconds)

    const type = () => {
      if (isTyping) {
        const nextCharacter = targetText[currentIndex];
        if (nextCharacter) {
          setText((prevText) => prevText + nextCharacter);
          currentIndex++;
          setTimeout(type, typingDelay);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setText("");
            setIsTyping(true);
            currentIndex = 0;
          }, pauseDuration);
        }
      } else {
        const nextCharacter = text.slice(0, -1);
        setText(nextCharacter);
        if (nextCharacter) {
          setTimeout(type, deletingDelay);
        } else {
          setIsTyping(true);
          setTimeout(type, typingDelay);
        }
      }
    };

    setTimeout(type, typingDelay);

    // The effect will run only once when the component mounts
  }, []);

  return <div>{text}</div>;
};

export default Typewriter;
