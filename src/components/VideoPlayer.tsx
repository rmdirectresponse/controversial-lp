import { useEffect } from "react";

const VideoPlayer = () => {
  useEffect(() => {
    // Executar o script do VTurb após o componente montar
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      var s=document.createElement("script"); 
      s.src="https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68925bc9e69e8e799c274d3e/v4/player.js";
      s.async=true;
      document.head.appendChild(s);
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      script.remove();
    };
  }, []);

  return (
    <div 
      className="youtube-video-player"
      dangerouslySetInnerHTML={{
        __html: '<vturb-smartplayer id="vid-68925bc9e69e8e799c274d3e" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>'
      }}
    />
  );
};

export default VideoPlayer;