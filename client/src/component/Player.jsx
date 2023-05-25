import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri]);

  if (!accessToken) return null;

  // const playerStyles = {
  //   bgColor: "transparent",
  //   color: "#ffffff",
  //   loaderColor: "#1db954",
  //   sliderColor: "#1db954",
  //   trackArtistColor: "#b3b3b3",
  //   trackNameColor: "#ffffff",
  //   height: "80px",
  //   sliderHandleColor: "#ffffff",
  //   sliderTrackColor: "#383838",
  // };

  return (
    <div className="bottom">
      <div className="spotify-player-wrapper">
        <SpotifyPlayer
          token={accessToken}
          showSaveIcon
          callback={(state) => {
            if (!state.isPlaying) setPlay(false);
          }}
          play={play}
          uris={trackUri ? [trackUri] : []}
          // styles={playerStyles}
        />
      </div>
    </div>
  );
}
