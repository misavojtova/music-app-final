import { Link } from "react-router-dom";
import "./style.css";
function SongCardResult({ id, title, artist, imgUrl }) {
  return (
    <Link to={`/songs/${id}`} style={{ textDecoration: "none" }}>
      <div className='song-result-card'>
        <div className='song-result-img-holder'>
          <img alt='album' src={imgUrl} className='song-result-img' />
        </div>
        <div className='song-result-info-holder'>
          <div className='song-result-title'>{title}</div>
          <div className='song-result-artist'>{artist}</div>
        </div>
      </div>
    </Link>
  );
}
export default SongCardResult;
