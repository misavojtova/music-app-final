import React, { useEffect, useState } from "react";
import "./style.css";
const axios = require("axios");

function SongCardLyrics({ artist, title, setShowLyr, showLyr }) {
  console.log(artist, title);
  const [lyrics, setLyrics] = useState("");

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(
        `https://api.lyrics.ovh/v1/${artist}/${title}`
      );
      if (resp.data.lyrics.includes("Paroles de la chanson")) {
        const RespData = resp.data.lyrics.slice(22);
        setLyrics(RespData);
      } else {
        setLyrics(resp.data.lyrics);
        console.log(resp.data.lyrics);
      }
    } catch (err) {
      console.error(err);
      setShowLyr(false);
    }
  };

  useEffect(() => {
    if (artist) {
      sendGetRequest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container'>
      <div className='lyrics-con'>
        <div className='close-lyr' onClick={() => setShowLyr(!showLyr)}>
          <span className='material-icons clear'>clear</span>
        </div>
        <div className='text-wrap'>
          <p className='text'>{lyrics}</p>
        </div>
      </div>
    </div>
  );
}

export default SongCardLyrics;
