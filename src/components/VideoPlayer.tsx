import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Carregar o script do player
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68841f5b5e710078faeda02c/v4/player.js';
    script.async = true;
    document.body.appendChild(script);

    // Monitorar para quando o player for criado e movê-lo para o local correto
    const checkAndMovePlayer = () => {
      // Procurar qualquer elemento que contenha "smartplayer" ou elementos relacionados ao VTurb
      const possiblePlayers = [
        document.querySelector('#smartplayer-68841f5b5e710078faeda02c'),
        document.querySelector('[id*="smartplayer"]'),
        document.querySelector('[class*="smartplayer"]'),
        document.querySelector('smart-player'),
        document.querySelector('iframe[src*="converteai"]'),
        document.querySelector('video[src*="converteai"]')
      ];

      for (const player of possiblePlayers) {
        if (player && containerRef.current && !containerRef.current.contains(player)) {
          console.log('Movendo player para o local correto:', player);
          // Remover de onde está
          player.remove();
          // Colocar no container correto
          containerRef.current.appendChild(player);
          return true;
        }
      }
      return false;
    };

    // Tentar mover o player a cada 500ms até encontrar
    const interval = setInterval(() => {
      if (checkAndMovePlayer()) {
        clearInterval(interval);
      }
    }, 500);

    // Parar de tentar depois de 10 segundos
    setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="youtube-video-player"
      style={{ 
        width: '100%', 
        minHeight: '400px',
        background: 'transparent'
      }}
    >
      <div id="smartplayer-68841f5b5e710078faeda02c"></div>
    </div>
  );
};

export default VideoPlayer;