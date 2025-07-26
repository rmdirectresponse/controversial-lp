const VideoPlayer = () => {
  return (
    <div className="youtube-video-player">
      <div 
        dangerouslySetInnerHTML={{
          __html: `
            <vturb-smartplayer id="vid-68841f5b5e710078faeda02c" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>
            <script type="text/javascript">
              var s=document.createElement("script"); 
              s.src="https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68841f5b5e710078faeda02c/v4/player.js"; 
              s.async=true;
              document.head.appendChild(s);
            </script>
          `
        }}
      />
    </div>
  );
};

export default VideoPlayer;