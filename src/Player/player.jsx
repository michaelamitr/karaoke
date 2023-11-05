import './player.css';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

export const Player = ({ src, onTimeUpdate }) => {
  const [playing, setPlaying] = useState(false);

  const audioPlayer = useRef();

  useEffect(() => {
    if (playing) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }, [playing]);

  const handlePlaying = () => {
    setPlaying(!playing);
  };
  return (
    <>
      <audio
        src={src}
        ref={audioPlayer}
        onTimeUpdate={(e) => onTimeUpdate(e.target.currentTime)}
      ></audio>
      <div className="player-controls">
        <button
          className={`play-button ${playing ? 'pause' : 'play'}`}
          onClick={handlePlaying}
        ></button>
      </div>
    </>
  );
};
