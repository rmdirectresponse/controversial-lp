import YouTubeHeader from "@/components/YouTubeHeader";
import VideoPlayer from "@/components/VideoPlayer";
import ChannelInfo from "@/components/ChannelInfo";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <YouTubeHeader />
      
      <main className="youtube-container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content area */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              dangerouslySetInnerHTML={{
                __html: '<vturb-smartplayer id="vid-68925bc9e69e8e799c274d3e" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/694efea7-0c09-4e42-b5ff-701bc6a90062/players/68925bc9e69e8e799c274d3e/v4/player.js", s.async=!0,document.head.appendChild(s); </script>'
              }}
            />
            <ChannelInfo />
            
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <LiveChat />
          </div>
        </div>
        
        {/* Espaço no final da página */}
        <div className="h-16 lg:h-24"></div>
      </main>
    </div>
  );
};

export default Index;
