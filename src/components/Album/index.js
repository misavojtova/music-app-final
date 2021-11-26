import "./style.css";
function Album({ albumId }) {
  return (
    <div className='album'>
      <div>See all the album</div>
      <iframe
        title='album'
        className='album-frame'
        src={`https://widget.deezer.com/widget/dark/album/${albumId}?autoplay=false&radius=true&tracklist=true`}
        allowtransparency='true'
        allowfullscreen='true'
        allow='encrypted-media'
      ></iframe>
    </div>
  );
}
export default Album;
