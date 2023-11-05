import './lyrics.css';
import { useEffect, useRef } from 'react';

export const Lyrics = ({ lines, currentLineIndex }) => {
  const currentLineRef = useRef();

  useEffect(() => {
    if (currentLineIndex >= 0) {
      console.log('currentLineIndex', currentLineIndex);
      currentLineRef.current.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [currentLineIndex]);

  return (
    <div className="lyrics">
      {lines.map((line, index) =>
        index === currentLineIndex ? (
          <p className="current-line" ref={currentLineRef} key={line.time}>
            {line.text}
          </p>
        ) : (
          <p key={line.time}>{line.text}</p>
        ),
      )}
    </div>
  );
};
