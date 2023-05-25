import React from "react";
import "./Playlist.css";

function Playlist({ userPlaylist, choosePlaylist }) {
  return (
    <div className="leftMenus">
      <div className="header">
        <img src={require("../images/logo.png")} alt="logo" />
        <a href="/aboutus" target="_blank" className="navigation">
          About Us
        </a>
      </div>
      <p className="leftmenuPlaylist">Playlist</p>
      {userPlaylist.length > 0 && (
        <ul>
          {userPlaylist.map(({ name, id }) => (
            <li
              className="playlistName"
              id={id}
              onClick={(e) => choosePlaylist(e.target.id)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Playlist;
