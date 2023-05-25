import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri]);

  if (!accessToken) return null;

  return (
    <div className="bottom">
      <SpotifyPlayer
        styles={{
          activeColor: "red",
          bgColor: "#9DA8B0",
          // color: "#fff",
          // loaderColor: "#fff",
          // sliderColor: "#1cb954",
          // trackArtistColor: "#ccc",
          // trackNameColor: "#fff",
        }}
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
      />
    </div>
  );
}
