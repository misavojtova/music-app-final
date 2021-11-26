import { useEffect, useState } from "react";

import axios from "axios";
import SongResult from "../SongResult";

import "./style.css";

function SongResultList({ nameTyped }) {
  const [songResults, setSongResults] = useState([]);
  const [hidden, setHidden] = useState(true);

  function fetchApi() {
    if (nameTyped === "") {
      setSongResults([]);
      setHidden(true);
    } else {
      const apiUrl = `https://api.deezer.com/search/track/autocomplete?limit=15&q=${nameTyped}`;
      axios.get(apiUrl).then((response) => {
        setSongResults(response.data.data);
        setHidden(false);
      });
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchApi(), [nameTyped]);

  return (
    <div className={hidden ? "hide" : "song-holder"}>
      {songResults.map((song) => (
        <SongResult
          key={song.id}
          id={song.id}
          title={song.title}
          artist={song.artist.name}
          imgUrl={song.album.cover_small}
        />
      ))}
    </div>
  );
}
export default SongResultList;
