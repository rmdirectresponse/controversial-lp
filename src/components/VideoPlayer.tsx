const VideoPlayer = () => {
  const vturbHTML = `
    <vturb-smartplayer id="vid-68925bc9e69e8e799c274d3e" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68925bc9e69e8e799c274d3e/v4/player.js", s.async=!0,document.head.appendChild(s); </script>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: vturbHTML }} />
  );
};

export default VideoPlayer;