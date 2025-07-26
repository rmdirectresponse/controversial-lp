import { useEffect } from "react";

const VideoPlayer = () => {
  useEffect(() => {
    // Carregar o script principal do player
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68841f5b5e710078faeda02c/v4/player.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="youtube-video-player">
      <div id="smartplayer-68841f5b5e710078faeda02c"></div>
    </div>
  );
};

export default VideoPlayer;