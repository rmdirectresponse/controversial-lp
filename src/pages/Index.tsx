import YouTubeHeader from "@/components/YouTubeHeader";
import VideoPlayer from "@/components/VideoPlayer";
import ChannelInfo from "@/components/ChannelInfo";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="youtube-container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content area */}
          <div className="lg:col-span-2 space-y-4">
            <VideoPlayer />
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
