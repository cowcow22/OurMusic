import React from "react";
import "./Playlist.css";

function Playlist({ userPlaylist, choosePlaylist }) {
  return (
    <div className="leftMenus">
      <p className="leftmenuPlaylist">Playlist</p>
      {userPlaylist.length > 0 && (
        <ul>
          {userPlaylist.map(({ name, id }) => (
            <li id={id} onClick={(e) => choosePlaylist(e.target.id)}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Playlist;
