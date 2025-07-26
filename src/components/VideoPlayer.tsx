const VideoPlayer = () => {
  return (
    <div className="youtube-video-player relative w-full aspect-video">
      <div 
        id="smartplayer-68841f5b5e710078faeda02c"
        dangerouslySetInnerHTML={{
          __html: `
            <script>!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);</script>
            <link rel="preload" href="https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68841f5b5e710078faeda02c/v4/player.js" as="script">
            <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script">
            <link rel="preload" href="https://cdn.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/6884195a0baf9bcf28c4ee96/main.m3u8" as="fetch">
            <link rel="dns-prefetch" href="https://cdn.converteai.net">
            <link rel="dns-prefetch" href="https://scripts.converteai.net">
            <link rel="dns-prefetch" href="https://images.converteai.net">
            <link rel="dns-prefetch" href="https://api.vturb.com.br">
            <script async src="https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68841f5b5e710078faeda02c/v4/player.js"></script>
          `
        }}
      />
    </div>
  );
};

export default VideoPlayer;