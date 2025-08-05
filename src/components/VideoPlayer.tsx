import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Primeiro, limpar qualquer script ou elemento antigo
      const oldScripts = document.querySelectorAll('script[src*="converteai.net"]');
      const oldElements = document.querySelectorAll('vturb-smartplayer');
      
      console.log('Removendo scripts antigos:', oldScripts.length);
      console.log('Removendo elementos antigos:', oldElements.length);
      
      oldScripts.forEach(script => script.remove());
      oldElements.forEach(element => element.remove());
      
      // Limpar o container
      containerRef.current.innerHTML = '';
      
      // Criar o novo elemento vturb-smartplayer
      const vTurbElement = document.createElement("vturb-smartplayer");
      vTurbElement.id = "vid-68925bc9e69e8e799c274d3e";
      vTurbElement.style.display = "block";
      vTurbElement.style.margin = "0 auto";
      vTurbElement.style.width = "100%";
      
      console.log('Criando novo elemento com ID:', vTurbElement.id);
      
      containerRef.current.appendChild(vTurbElement);

      // Carregar o novo script do VTurb
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68925bc9e69e8e799c274d3e/v4/player.js";
      script.async = true;
      
      console.log('Carregando novo script:', script.src);
      
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup completo
      const allScripts = document.querySelectorAll('script[src*="converteai.net"]');
      const allElements = document.querySelectorAll('vturb-smartplayer');
      
      allScripts.forEach(script => script.remove());
      allElements.forEach(element => element.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="youtube-video-player">
      {/* O elemento vturb-smartplayer será criado aqui */}
    </div>
  );
};

export default VideoPlayer;