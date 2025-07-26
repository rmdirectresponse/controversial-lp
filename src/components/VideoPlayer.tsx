import { useEffect } from "react";

const VideoPlayer = () => {
  useEffect(() => {
    // Performance timing script
    const performanceScript = document.createElement('script');
    performanceScript.innerHTML = '!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);';
    document.head.appendChild(performanceScript);

    // Preload links
    const preloadLinks = [
      { href: "https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68841f5b5e710078faeda02c/v4/player.js", as: "script" },
      { href: "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js", as: "script" },
      { href: "https://cdn.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/6884195a0baf9bcf28c4ee96/main.m3u8", as: "fetch" }
    ];

    preloadLinks.forEach(linkData => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = linkData.href;
      link.as = linkData.as;
      document.head.appendChild(link);
    });

    // DNS prefetch links
    const dnsLinks = [
      "https://cdn.converteai.net",
      "https://scripts.converteai.net", 
      "https://images.converteai.net",
      "https://api.vturb.com.br"
    ];

    dnsLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = href;
      document.head.appendChild(link);
    });

    // Load the main player script
    const playerScript = document.createElement('script');
    playerScript.src = "https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68841f5b5e710078faeda02c/v4/player.js";
    playerScript.async = true;
    document.head.appendChild(playerScript);
  }, []);

  return (
    <div className="youtube-video-player">
      <div id="smartplayer-68841f5b5e710078faeda02c"></div>
    </div>
  );
};

export default VideoPlayer;