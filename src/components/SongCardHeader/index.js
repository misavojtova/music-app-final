import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

import image from "../../images/Better-Call-Saul.jpeg";
function SongCardHeader({
  image,
  title,
  artist,
  preview,
  allSong,
  showLyr,
  setShowLyr,
}) {
  console.log(showLyr);
  function handleButtonClick() {
    window.open(allSong, "_blank");
  }
  return (
    <div className='songCardHeaderMain'>
      <div className='iconArrow'>
        <Link to='/'>
          <span className='material-icons'>arrow_back</span>
        </Link>
      </div>

      <div className='song-card-header '>
        <div className='song-image-container'>
          <img src={image} alt='artist' className='image-song' />
        </div>

        <div className='song-details'>
          <div className='song-details-text'>
            <h2 className='song-title'>{title}</h2>
            <h3 className='song-artist'>{artist}</h3>
          </div>

          <div className='buttons-container'>
            <button
              className='glow-on-hover'
              onClick={() => setShowLyr(!showLyr)}
            >
              Lyrics
            </button>
            <button className='glow-on-hover' onClick={handleButtonClick}>
              Full Song
            </button>
          </div>
        </div>

        <div className='audio-control'>
          <audio src={preview} controls className='audio'></audio>
        </div>
      </div>
    </div>
  );
}
export default SongCardHeader;
