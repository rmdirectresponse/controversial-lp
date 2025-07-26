import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Limpar qualquer conteúdo existente
      containerRef.current.innerHTML = '';
      
      // Criar o div do player diretamente no container
      const playerDiv = document.createElement('div');
      playerDiv.id = 'smartplayer-68841f5b5e710078faeda02c';
      containerRef.current.appendChild(playerDiv);
    }
  }, []);

  return (
    <div className="youtube-video-player" ref={containerRef}>
      {/* O player será injetado aqui pelo script */}
    </div>
  );
};

export default VideoPlayer;