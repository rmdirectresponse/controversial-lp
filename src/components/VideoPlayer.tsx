import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Limpar qualquer conteúdo existente
      containerRef.current.innerHTML = '';
      
      // Inserir diretamente o HTML do VTurb
      containerRef.current.innerHTML = `
        <vturb-smartplayer id="vid-68925bc9e69e8e799c274d3e" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>
      `;

      // Carregar o script
      const existingScript = document.querySelector('script[src*="68925bc9e69e8e799c274d3e"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = `
          var s=document.createElement("script"); 
          s.src="https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68925bc9e69e8e799c274d3e/v4/player.js";
          s.async=true;
          document.head.appendChild(s);
        `;
        document.head.appendChild(script);
      }
    }

    return () => {
      // Cleanup não necessário - deixar o VTurb gerenciar
    };
  }, []);

  return (
    <div ref={containerRef} className="youtube-video-player">
      {/* VTurb player será inserido aqui */}
    </div>
  );
};

export default VideoPlayer;