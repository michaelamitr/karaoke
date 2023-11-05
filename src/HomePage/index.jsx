import './style.css';
import { Player } from '../Player/player';
import { useState } from 'react';
import { Lyrics } from '../Lyrics/lyrics';
import lyricsLines from '../lyrics-lines';

export const HomePage = () => {
  const [activeLine, setActiveLine] = useState(-1);

  const handleTimeUpdate = (currentTime) => {
    if (lyricsLines[activeLine + 1].time < currentTime) {
      setActiveLine((prevState) => prevState + 1);
    }
  };

  return (
    <div className="container">
      <h1>Fools Garden: Lemon Tree</h1>
      <Player
        src="fools-garden-lemon-tree.mp3"
        onTimeUpdate={handleTimeUpdate}
      />
      <Lyrics lines={lyricsLines} currentLineIndex={activeLine} />
    </div>
  );
};
