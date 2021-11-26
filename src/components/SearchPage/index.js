import React from "react";
import { useState } from "react";
import SearchBar from "../SearchBar";
import video from "../../assets/videos/background_video.mp4";
import "./style.css";

function SearchPage() {
  const [nameTyped, setNameTyped] = useState("");
  function handleInputChange(e) {
    setNameTyped(e.target.value);
  }
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          display: "flex",
        }}
      >
        <source src={video} type='video/mp4' />
      </video>
      <div className='search-page-center'>
        <div className='search-page-con'>
          <div className='music-icon'>
            <span className='material-icons music'>music_note</span>
          </div>
          <SearchBar
            nameTyped={nameTyped}
            setNameTyped={setNameTyped}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
}
export default SearchPage;
