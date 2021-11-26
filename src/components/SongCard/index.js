import SongCardHeader from "../SongCardHeader";
import Album from "../Album";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SongCardLyrics from "../SongCardLyrics";
import "./style.css";
function SongCard() {
  let songId = useParams().id;
  const [showLyr, setShowLyr] = useState(false);
  let [loading, setLoading] = useState(true);
  let [songInfo, setSongInfo] = useState([]);
  function getAllSongInfo() {
    setLoading(true);
    axios
      .get(`https://api.deezer.com/track/${songId}`)
      .then((resp) => {
        setSongInfo(resp.data);
        setLoading(false);
      })
      .catch((err) => {});
  }
  useEffect(() => {
    getAllSongInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='song-card'>
        <SongCardHeader
          image={songInfo.album.cover_big}
          artist={songInfo.contributors[0].name}
          title={songInfo.title}
          preview={songInfo.preview}
          allSong={songInfo.link}
          showLyr={showLyr}
          setShowLyr={setShowLyr}
        />
        {showLyr && (
          <SongCardLyrics
            artist={songInfo.contributors[0].name}
            title={songInfo.title}
            showLyr={showLyr}
            setShowLyr={setShowLyr}
          />
        )}
        <Album albumId={songInfo.album.id} />
      </div>
    );
  }
}

export default SongCard;
