import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Primeiro, criar o div do player no local correto
    if (containerRef.current) {
      const playerDiv = document.createElement('div');
      playerDiv.id = 'smartplayer-68841f5b5e710078faeda02c';
      containerRef.current.appendChild(playerDiv);
    }

    // Carregar o script do player
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68841f5b5e710078faeda02c/v4/player.js';
    script.async = true;
    
    script.onload = () => {
      // Aguardar um pouco e verificar se o player foi criado em outro lugar
      setTimeout(() => {
        const existingPlayer = document.querySelector('[id*="smartplayer"]');
        if (existingPlayer && containerRef.current && !containerRef.current.contains(existingPlayer)) {
          // Mover o player para o container correto
          containerRef.current.appendChild(existingPlayer);
        }
      }, 1000);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="youtube-video-player"
      style={{ 
        width: '100%', 
        minHeight: '400px',
        position: 'relative'
      }}
    >
      {/* O player será injetado aqui */}
    </div>
  );
};

export default VideoPlayer;