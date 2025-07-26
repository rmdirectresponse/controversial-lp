import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: MutationObserver;

    // Função para mover qualquer elemento relacionado ao player
    const movePlayerToContainer = (element: Element) => {
      if (containerRef.current && element && !containerRef.current.contains(element)) {
        // Verificar se é um elemento do player VTurb
        const isPlayerElement = 
          element.id?.includes('smartplayer') ||
          element.className?.includes('smartplayer') ||
          element.tagName?.toLowerCase() === 'smart-player' ||
          (element as HTMLElement).style?.position === 'fixed' ||
          (element as HTMLElement).style?.zIndex === '9999' ||
          element.querySelector('[id*="smartplayer"]') ||
          element.querySelector('video') ||
          element.querySelector('iframe');

        if (isPlayerElement) {
          console.log('Player detectado, movendo para container:', element);
          // Resetar estilos que podem estar causando posicionamento incorreto
          (element as HTMLElement).style.position = 'relative';
          (element as HTMLElement).style.top = 'auto';
          (element as HTMLElement).style.left = 'auto';
          (element as HTMLElement).style.right = 'auto';
          (element as HTMLElement).style.bottom = 'auto';
          (element as HTMLElement).style.zIndex = 'auto';
          (element as HTMLElement).style.transform = 'none';
          
          // Mover para o container
          containerRef.current.appendChild(element);
          return true;
        }
      }
      return false;
    };

    // Configurar MutationObserver para detectar novos elementos
    if (containerRef.current) {
      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              movePlayerToContainer(element);
              
              // Também verificar elementos filhos
              const childElements = element.querySelectorAll('*');
              childElements.forEach(movePlayerToContainer);
            }
          });
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }

    // Carregar o script do player
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68841f5b5e710078faeda02c/v4/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (observer) {
        observer.disconnect();
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
        background: 'transparent',
        position: 'relative'
      }}
    >
      <div id="smartplayer-68841f5b5e710078faeda02c"></div>
    </div>
  );
};

export default VideoPlayer;