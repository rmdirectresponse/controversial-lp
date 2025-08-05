import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Criar o elemento vturb-smartplayer
      const vTurbElement = document.createElement("vturb-smartplayer");
      vTurbElement.id = "vid-688974e5f20f5056a87df20a";
      vTurbElement.style.display = "block";
      vTurbElement.style.margin = "0 auto";
      vTurbElement.style.width = "100%";
      
      containerRef.current.appendChild(vTurbElement);

      // Carregar o script do VTurb
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/688974e5f20f5056a87df20a/v4/player.js";
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup
      const existingScript = document.querySelector(`script[src*="688974e5f20f5056a87df20a"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="youtube-video-player">
      {/* O elemento vturb-smartplayer será criado aqui */}
    </div>
  );
};

export default VideoPlayer;