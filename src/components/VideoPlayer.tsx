import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Criar o elemento vturb-smartplayer
      const vTurbElement = document.createElement("vturb-smartplayer");
      vTurbElement.id = "vid-68925bc9e69e8e799c274d3e";
      vTurbElement.style.display = "block";
      
      containerRef.current.appendChild(vTurbElement);

      // Carregar o script do VTurb
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68925bc9e69e8e799c274d3e/v4/player.js";
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup
      const existingScript = document.querySelector(`script[src*="68925bc9e69e8e799c274d3e"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      {/* O elemento vturb-smartplayer será criado aqui */}
    </div>
  );
};

export default VideoPlayer;