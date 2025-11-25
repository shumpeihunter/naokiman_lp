import React, { useEffect, useState } from 'react';

const TypewriterText = ({ text, speed = 50, delay = 0, className = '', start = true }) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId;
    let intervalId;
    setDisplayText('');
    setIsComplete(false);

    if (!start) {
      return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    }

    timeoutId = setTimeout(() => {
      let index = 0;
      intervalId = setInterval(() => {
        index += 1;
        setDisplayText(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(intervalId);
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay, start]);

  return (
    <span
      className={`typewriter-text ${className}`.trim()}
      data-caret={isComplete ? 'hidden' : 'visible'}
    >
      {displayText}
    </span>
  );
};

export default TypewriterText;
