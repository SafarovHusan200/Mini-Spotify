import React from 'react'

function Song({ currentSong, songInfo, isPlaying }) {
  return (
    <div className="song-container">
      <img
        className={`${
          songInfo.currentTime > 0 && isPlaying === true
            ? "aylana"
            : "aylana stop"
        }`}
        src={currentSong.cover}
        alt={currentSong.name}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}

export default Song