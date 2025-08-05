import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('VideoPlayer mounting...');
    
    // LIMPAR TUDO primeiro
    const allVturbElements = document.querySelectorAll('vturb-smartplayer');
    const allVturbScripts = document.querySelectorAll('script[src*="converteai.net"]');
    
    console.log('Removendo elementos VTurb existentes:', allVturbElements.length);
    console.log('Removendo scripts VTurb existentes:', allVturbScripts.length);
    
    allVturbElements.forEach(el => el.remove());
    allVturbScripts.forEach(script => script.remove());
    
    // Aguardar um momento antes de criar o novo
    setTimeout(() => {
      if (containerRef.current) {
        // Limpar o container também
        containerRef.current.innerHTML = '';
        
        // Criar o elemento vturb-smartplayer LIMPO
        const vTurbElement = document.createElement("vturb-smartplayer");
        vTurbElement.id = "vid-68925bc9e69e8e799c274d3e";
        
        console.log('Criando elemento VTurb limpo:', vTurbElement.id);
        
        containerRef.current.appendChild(vTurbElement);

        // Carregar o script do VTurb
        const script = document.createElement("script");
        script.src = "https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68925bc9e69e8e799c274d3e/v4/player.js";
        script.async = true;
        
        script.onload = () => {
          console.log('Script VTurb carregado com sucesso');
        };
        
        script.onerror = () => {
          console.error('Erro ao carregar script VTurb');
        };
        
        document.head.appendChild(script);
      }
    }, 100);

    return () => {
      // Cleanup completo
      const existingElements = document.querySelectorAll('vturb-smartplayer');
      const existingScripts = document.querySelectorAll('script[src*="converteai.net"]');
      
      existingElements.forEach(el => el.remove());
      existingScripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div ref={containerRef}>
      {/* O elemento vturb-smartplayer será criado aqui */}
    </div>
  );
};

export default VideoPlayer;