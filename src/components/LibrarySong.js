import React from "react";
import { playSong } from "../util";

function LibrarySong({
  song,
  setCurrentSong,
  audioRef,
  songs,
  isPlaying,
  id,
  setSongs,
  setIsPlaying,
}) {
  const songSelectHandler = () => {
    if (!isPlaying) {
      setIsPlaying(!isPlaying);
      audioRef.current.play()
    }
    console.log(audioRef.current.play());

    setCurrentSong(song);
    // BUG FIX -skip-forward-play
    playSong(isPlaying, audioRef);

    // Adding State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };

  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
