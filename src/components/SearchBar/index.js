import React from 'react';
import './style.css';
import SongResultsList from '../SongResultsList';

function SearchBar(props) {
  const { nameTyped, setNameTyped, handleInputChange } = props;
  return (
    <>
      <div className="search-con">
        <span className="material-icons search">search</span>

        <input
          className="search-space"
          id="fullName"
          type="text"
          autoComplete="off"
          placeholder="Search Song"
          value={nameTyped}
          onChange={(e) => handleInputChange(e)}
        />

        <div
          className="clear-icon-holder"
          onClick={() => {
            setNameTyped('');
          }}
        >
          <span className="material-icons clear">clear</span>
        </div>
      </div>
      <SongResultsList nameTyped={nameTyped} />
    </>
  );
}
export default SearchBar;
