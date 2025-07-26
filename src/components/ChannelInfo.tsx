import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share, Bookmark } from "lucide-react";
import drAngelaTorres from "@/assets/dr-angela-torres.jpg";

const ChannelInfo = () => {
  return (
    <div className="space-y-4">
      {/* Video title */}
      <h1 className="text-lg md:text-xl font-normal text-foreground">
        Descubrí esto al final de mi vida… y ahora necesito contarlo antes de que lo borren.
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
            <div className="font-medium text-foreground">Danny Kelly</div>
            <div className="text-sm text-muted-foreground">1.2M suscriptores</div>
          </div>
        </div>
        <Button variant="youtube" size="youtube" className="font-medium">
          Suscribirse
        </Button>
      </div>

      {/* Action buttons */}
      <div className="flex items-center space-x-2 flex-wrap gap-2">
        <div className="flex items-center bg-secondary rounded-full">
          <Button variant="ghost" size="sm" className="rounded-l-full rounded-r-none hover:bg-accent">
            <ThumbsUp className="w-4 h-4 mr-2" />
          </Button>
          <div className="w-px h-6 bg-border"></div>
          <Button variant="ghost" size="sm" className="rounded-r-full rounded-l-none hover:bg-accent">
            <ThumbsDown className="w-4 h-4" />
          </Button>
        </div>
        
        <Button variant="youtube-secondary" size="youtube" className="font-normal">
          <Share className="w-4 h-4 mr-2" />
          Compartir
        </Button>
        
        <Button variant="youtube-secondary" size="youtube" className="font-normal">
          <Bookmark className="w-4 h-4 mr-2" />
          Guardar
        </Button>
      </div>
    </div>
  );
};

export default ChannelInfo;