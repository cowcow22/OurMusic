import React from "react";
import "./PlaylistShow.css";

function PlaylistShow({ playlistsSelected, chooseTrack }) {
  return (
    <div className="tracks">
      {playlistsSelected &&
        playlistsSelected.tracks.map(
          ({ id, name, artists, image, album, context_uri }) => {
            // console.log('line 172', id, name, artists, image, album, context_uri);
            const track = {
              albumUrl: image,
              artist: artists[0],
              title: name,
              uri: context_uri,
            };
            // console.log('TRACK ', track);
            return (
              <div className="showPlaylist">
                <div
                  className="row"
                  key={id}
                  onClick={() => chooseTrack(track)}
                >
                  <div className="col detail">
                    <div className="image">
                      <img src={image} alt="track" />
                    </div>
                    <div className="info infoMusic">
                      <span className="name">{name}</span>
                      <span>{artists}</span>
                    </div>
                  </div>
                  <div className="col infoMusic">
                    <span>{album}</span>
                  </div>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
}

export default PlaylistShow;
