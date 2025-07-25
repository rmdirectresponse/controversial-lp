import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share, Bookmark } from "lucide-react";
import drAngelaTorres from "@/assets/dr-angela-torres.jpg";

const ChannelInfo = () => {
  return (
    <div className="space-y-4">
      {/* Video title */}
      <h1 className="text-xl font-normal text-foreground">
        This Cactus Recipe Reverses Your Type 2 Diabetes in 7 Days
      </h1>

      {/* Channel info and subscribe */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={drAngelaTorres} 
            alt="Dr. Angela Torres"
            className="w-10 h-10 object-cover rounded-full"
          />
          <div>
            <div className="font-medium text-foreground">Dr. Angela Torres</div>
            <div className="text-sm text-muted-foreground">1.7M inscritos</div>
          </div>
        </div>
        <Button variant="youtube" size="youtube" className="font-medium">
          Subscribe
        </Button>
      </div>

      {/* Action buttons */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center bg-secondary rounded-full">
          <Button variant="ghost" size="sm" className="rounded-l-full rounded-r-none hover:bg-accent">
            <ThumbsUp className="w-4 h-4 mr-2" />
            <span className="text-sm">👍</span>
          </Button>
          <div className="w-px h-6 bg-border"></div>
          <Button variant="ghost" size="sm" className="rounded-r-full rounded-l-none hover:bg-accent">
            <ThumbsDown className="w-4 h-4" />
          </Button>
        </div>
        
        <Button variant="youtube-secondary" size="youtube" className="font-normal">
          <Share className="w-4 h-4 mr-2" />
          To share
        </Button>
        
        <Button variant="youtube-secondary" size="youtube" className="font-normal">
          <Bookmark className="w-4 h-4 mr-2" />
          Save
        </Button>
      </div>
    </div>
  );
};

export default ChannelInfo;