import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ThumbsUp, ThumbsDown, Share, Bookmark, Settings, CastIcon as Cast, Fullscreen } from "lucide-react";
import cbsBackground from "@/assets/cbs-news-background.jpg";
import drAngelaTorres from "@/assets/dr-angela-torres.jpg";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="youtube-video-player">
      {/* Video thumbnail/background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cbsBackground})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* CBS Evening News logo overlay */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-white font-bold text-sm">CBS Evening News</span>
          </div>
        </div>

        {/* Dr. Angela Torres in foreground */}
        <div className="absolute bottom-8 left-8">
          <img 
            src={drAngelaTorres} 
            alt="Dr. Angela Torres"
            className="w-20 h-28 object-cover rounded shadow-lg"
          />
        </div>

        {/* "Click To Listen" overlay */}
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
          <div className="bg-black/70 backdrop-blur-sm rounded px-6 py-2">
            <span className="text-white font-medium text-lg">Click To Listen</span>
          </div>
        </div>
      </div>

      {/* Play button overlay */}
      {!isPlaying && (
        <button 
          className="youtube-play-button"
          onClick={() => setIsPlaying(true)}
        >
          <div className="youtube-play-icon"></div>
        </button>
      )}

      {/* Video duration */}
      <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-2 py-1 rounded">
        7:31
      </div>

      {/* Video controls (bottom bar) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300">
              <Play className="w-5 h-5" />
            </button>
            <div className="flex-1 h-1 bg-white/30 rounded-full">
              <div className="h-full w-0 bg-primary rounded-full"></div>
            </div>
            <span className="text-white text-sm">0:00 / 7:31</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-white hover:text-gray-300">
              <Settings className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-gray-300">
              <Cast className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-gray-300">
              <Fullscreen className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;