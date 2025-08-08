import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('VideoPlayer mounting...');
    
    if (containerRef.current) {
      // Criar o elemento vturb-smartplayer
      const vTurbElement = document.createElement("vturb-smartplayer");
      vTurbElement.id = "vid-68841f5b5e710078faeda02c";
      vTurbElement.style.display = "block";
      vTurbElement.style.margin = "0 auto";
      vTurbElement.style.width = "100%";
      
      console.log('Criando elemento VTurb:', vTurbElement.id);
      
      containerRef.current.appendChild(vTurbElement);

      // Carregar o script do VTurb
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68841f5b5e710078faeda02c/v4/player.js";
      script.async = true;
      
      script.onload = () => {
        console.log('Script VTurb carregado com sucesso');
      };
      
      script.onerror = () => {
        console.error('Erro ao carregar script VTurb');
      };
      
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup - remover script antigo e novo
      const existingScript = document.querySelector(`script[src*="68841f5b5e710078faeda02c"]`);
      const oldScript = document.querySelector(`script[src*="68925bc9e69e8e799c274d3e"]`);
      if (existingScript) {
        existingScript.remove();
      }
      if (oldScript) {
        oldScript.remove();
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