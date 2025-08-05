import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share, Bookmark, CheckCircle } from "lucide-react";
import drAngelaTorres from "@/assets/dr-angela-torres.jpg";

const ChannelInfo = () => {
  return (
    <div className="space-y-4">
      {/* Video title */}
      <h1 className="text-xl font-normal text-foreground">
        Descubrí esto al final de mi vida… y ahora necesito contarlo antes de que lo eliminen.
      </h1>

      {/* Channel info and subscribe */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/01143b19-89dc-478a-b94c-0f12089171d4.png" 
            alt="Danny Kelly"
            className="w-10 h-10 object-cover object-center rounded-full"
          />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-foreground">Danny Kelly</span>
              <CheckCircle className="w-4 h-4 text-blue-500" fill="currentColor" />
            </div>
            <div className="text-sm text-muted-foreground">3,27 mi</div>
          </div>
        </div>
        <Button variant="youtube" size="youtube" className="font-medium">
          Inscrever-se
        </Button>
      </div>

      {/* Action buttons */}
      <div className="flex items-center space-x-2 flex-wrap gap-2">
        <div className="flex items-center bg-secondary rounded-full">
          <Button variant="ghost" size="sm" className="rounded-l-full rounded-r-none hover:bg-accent px-3 py-2 h-9">
            <ThumbsUp className="w-4 h-4 mr-2" />
            543,3 mil
          </Button>
          <div className="w-px h-6 bg-border"></div>
          <Button variant="ghost" size="sm" className="rounded-r-full rounded-l-none hover:bg-accent px-3 py-2 h-9">
            <ThumbsDown className="w-4 h-4" />
          </Button>
        </div>
        
        <Button variant="youtube-secondary" size="sm" className="font-normal h-9 px-4">
          <Share className="w-4 h-4 mr-2" />
          Compartilhar
        </Button>
        
        <Button variant="youtube-secondary" size="sm" className="font-normal h-9 px-4">
          <Bookmark className="w-4 h-4 mr-2" />
          Salvar
        </Button>
      </div>
    </div>
  );
};

export default ChannelInfo;