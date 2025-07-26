import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Adicionar performance script apenas uma vez
    if (!(window as any)._plt) {
      const performanceScript = document.createElement('script');
      performanceScript.innerHTML = '!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);';
      document.head.appendChild(performanceScript);
    }

    // Carregar o script do player depois que o componente for montado
    const loadPlayer = () => {
      if (containerRef.current) {
        // Garantir que o div do player existe no container correto
        let playerDiv = containerRef.current.querySelector('#smartplayer-68841f5b5e710078faeda02c');
        if (!playerDiv) {
          playerDiv = document.createElement('div');
          playerDiv.id = 'smartplayer-68841f5b5e710078faeda02c';
          containerRef.current.appendChild(playerDiv);
        }

        // Carregar o script do player
        const script = document.createElement('script');
        script.src = 'https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68841f5b5e710078faeda02c/v4/player.js';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Carregar com um pequeno delay para garantir que o DOM está pronto
    const timer = setTimeout(loadPlayer, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="youtube-video-player" ref={containerRef}>
      {/* O player ConvertedAI será injetado aqui */}
    </div>
  );
};

export default VideoPlayer;