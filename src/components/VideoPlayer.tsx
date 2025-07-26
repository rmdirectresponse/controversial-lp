import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Primeiro, criar o div alvo no local correto
    if (containerRef.current) {
      const targetDiv = document.createElement('div');
      targetDiv.id = 'smartplayer-68841f5b5e710078faeda02c';
      containerRef.current.appendChild(targetDiv);
    }

    // Adicionar CSS para forçar qualquer elemento do VTurb a ficar no local correto
    const style = document.createElement('style');
    style.textContent = `
      /* Forçar qualquer elemento do player VTurb para o local correto */
      [id*="smartplayer"], 
      [class*="smartplayer"],
      smart-player,
      [style*="position: fixed"],
      [style*="z-index: 9999"] {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        z-index: auto !important;
        transform: none !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      
      /* Esconder qualquer overlay ou elemento fixo do VTurb que apareça fora do container */
      body > [id*="smartplayer"]:not(.youtube-video-player [id*="smartplayer"]),
      body > [class*="smartplayer"]:not(.youtube-video-player [class*="smartplayer"]) {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // Observer para mover elementos criados pelo VTurb
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            
            // Verificar se é um elemento do VTurb
            if (
              element.id?.includes('smartplayer') ||
              element.className?.includes('smartplayer') ||
              element.tagName?.toLowerCase() === 'smart-player' ||
              element.style?.position === 'fixed' ||
              element.style?.zIndex === '9999'
            ) {
              // Se foi criado fora do nosso container, mover para dentro
              if (containerRef.current && !containerRef.current.contains(element)) {
                console.log('Movendo elemento VTurb para container correto');
                
                // Resetar estilos problemáticos
                element.style.position = 'relative';
                element.style.top = 'auto';
                element.style.left = 'auto';
                element.style.right = 'auto';
                element.style.bottom = 'auto';
                element.style.zIndex = 'auto';
                element.style.transform = 'none';
                element.style.width = '100%';
                
                // Mover para o container
                containerRef.current.appendChild(element);
              }
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Carregar o script do VTurb
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68841f5b5e710078faeda02c/v4/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      observer.disconnect();
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
      {/* O player VTurb será forçado a aparecer aqui */}
    </div>
  );
};

export default VideoPlayer;