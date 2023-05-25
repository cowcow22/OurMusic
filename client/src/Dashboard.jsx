import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import Player from "./component/Player";
import TrackSearchResult from "./component/TrackSearchResult";
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import "./Dashboard.css";
import Playlist from "./component/Playlist";
import PlaylistShow from "./component/PlaylistShow";
import SwitchBackground from "./component/SwitchBackground";

const spotifyApi = new SpotifyWebApi({
  clientId: "455d30aa9c0a4cefa57a5050a7b854f4",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [userPlaylist, setuserPlaylist] = useState("");
  const [playlistsFetched, setPlaylistsFetched] = useState(false);
  const [playlistsSelected, setPlaylistSelected] = useState("");
  const [userId, setuserId] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const [isNight, setIsNight] = useState(false);

  //Ubah Background Start
  const ubahMode = () => {
    setIsNight(!isNight);
  };
  //Ubah Background End

  //Token Start
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);
  //Token End

  //Get User ID Start
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.getMe().then(
      function (data) {
        setuserId(data.body.id);
        console.log("Id", data.body.id);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [userId, accessToken]);
  //Get User ID End

  //Playlist Start
  //Get User Playlist Start
  useEffect(() => {
    if (!accessToken || (!userId && userPlaylist !== "") || playlistsFetched)
      return;

    spotifyApi.getUserPlaylists(userId).then(
      function (data) {
        console.log("Retrieved playlists", data.body);
        const { items } = data.body;
        const playlists = items.map(({ name, id }) => {
          return { name, id };
        });
        setuserPlaylist(playlists);
        setPlaylistsFetched(true);
        console.log("playlists", playlists);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [userId, userPlaylist, accessToken, playlistsFetched]);
  //Get User Playlist End

  //Choose Playlist Start
  function choosePlaylist(id) {
    spotifyApi.getPlaylistTracks(id).then(
      function (data) {
        const respond = data.body;

        const playlistsSelected = {
          tracks: respond.items.map(({ track }) => ({
            id: track.id,
            name: track.name,
            artists: track.artists.map((artist) => artist.name),
            image: track.album.images[2].url,
            duration: track.duration_ms,
            album: track.album.name,
            context_uri: track.album.uri,
            track_number: track.track_number,
          })),
        };
        setPlaylistSelected(playlistsSelected);
        setSearchResults([]);
        console.log("PLAYLIST SLECET", playlistsSelected);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }
  //Choose Playlist End
  //Playlist End

  //Search Song Start
  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);
  //Search Song End

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
  }

  return (
    <div
      className={`${isNight ? "night-mode" : "day-mode"} container-fluid px-0`}
    >
      <div id="bungkus" className="d-flex flex-col ">
        {/* <div className="header">
          <p className="judul">O S I C</p>
          
        </div> */}

        <div
          className="d-flex flex-grow-1 flex-row mainBody"
          style={{ height: "88vh" }}
        >
          <Playlist
            userPlaylist={userPlaylist}
            choosePlaylist={choosePlaylist}
          />
          <div className="rightMenu flex-grow-1 my-2">
            <div>
              <div>
                <div className="searchSongContainer">
                  <div className="searchSong mr-0 d-flex">
                    <Form.Control
                      className="searchForSong"
                      type="search"
                      placeholder="Search Songs/Artists"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onClick={() => setPlaylistSelected("")}
                    />
                  </div>
                  <div className="switchBackgroundContainer">
                    <div className="gantiBG">
                      <SwitchBackground isNight={isNight} ubahMode={ubahMode} />
                    </div>
                  </div>
                </div>
                {searchResults.map((track) => (
                  <TrackSearchResult
                    track={track}
                    key={track.uri}
                    chooseTrack={chooseTrack}
                  />
                ))}

                <PlaylistShow
                  playlistsSelected={playlistsSelected}
                  chooseTrack={chooseTrack}
                />
              </div>
            </div>
          </div>
        </div>

        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </div>
  );
}
