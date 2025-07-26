import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Interceptar a criação de elementos com position fixed
    const originalAppendChild = Element.prototype.appendChild;
    const originalInsertBefore = Element.prototype.insertBefore;

    Element.prototype.appendChild = function(newChild: any) {
      // Se for um elemento relacionado ao VTurb, redirecionar para nosso container
      if (containerRef.current && newChild && newChild.nodeType === 1) {
        const isVTurbElement = 
          newChild.id?.includes('smartplayer') ||
          newChild.className?.includes('smartplayer') ||
          newChild.tagName?.toLowerCase() === 'smart-player';

        if (isVTurbElement && this === document.body) {
          // Forçar estilos corretos
          newChild.style.position = 'relative';
          newChild.style.top = 'auto';
          newChild.style.left = 'auto';
          newChild.style.right = 'auto';
          newChild.style.bottom = 'auto';
          newChild.style.zIndex = 'auto';
          newChild.style.transform = 'none';
          newChild.style.width = '100%';
          
          // Adicionar ao nosso container em vez do body
          return originalAppendChild.call(containerRef.current, newChild);
        }
      }
      return originalAppendChild.call(this, newChild);
    };

    Element.prototype.insertBefore = function(newChild: any, referenceChild: any) {
      // Se for um elemento relacionado ao VTurb, redirecionar para nosso container
      if (containerRef.current && newChild && newChild.nodeType === 1) {
        const isVTurbElement = 
          newChild.id?.includes('smartplayer') ||
          newChild.className?.includes('smartplayer') ||
          newChild.tagName?.toLowerCase() === 'smart-player';

        if (isVTurbElement && this === document.body) {
          // Forçar estilos corretos
          newChild.style.position = 'relative';
          newChild.style.top = 'auto';
          newChild.style.left = 'auto';
          newChild.style.right = 'auto';
          newChild.style.bottom = 'auto';
          newChild.style.zIndex = 'auto';
          newChild.style.transform = 'none';
          newChild.style.width = '100%';
          
          // Adicionar ao nosso container
          return originalAppendChild.call(containerRef.current, newChild);
        }
      }
      return originalInsertBefore.call(this, newChild, referenceChild);
    };

    // CSS para forçar posicionamento correto
    const style = document.createElement('style');
    style.textContent = `
      /* Esconder qualquer elemento VTurb que apareça no body */
      body > [id*="smartplayer"],
      body > [class*="smartplayer"],
      body > smart-player {
        display: none !important;
      }
      
      /* Garantir que elementos dentro do container apareçam corretamente */
      .youtube-video-player [id*="smartplayer"],
      .youtube-video-player [class*="smartplayer"],
      .youtube-video-player smart-player {
        display: block !important;
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        z-index: auto !important;
        transform: none !important;
        width: 100% !important;
      }
    `;
    document.head.appendChild(style);

    // Criar o div alvo
    if (containerRef.current) {
      const targetDiv = document.createElement('div');
      targetDiv.id = 'smartplayer-68841f5b5e710078faeda02c';
      containerRef.current.appendChild(targetDiv);
    }

    // Carregar o script
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68841f5b5e710078faeda02c/v4/player.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      Element.prototype.appendChild = originalAppendChild;
      Element.prototype.insertBefore = originalInsertBefore;
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="youtube-video-player"
      style={{ 
        width: '100%', 
        minHeight: '400px',
        position: 'relative',
        background: 'transparent'
      }}
    >
      {/* O player será forçado a aparecer aqui */}
    </div>
  );
};

export default VideoPlayer;