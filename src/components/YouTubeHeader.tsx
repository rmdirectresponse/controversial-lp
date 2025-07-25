import { Search, Menu, Video, Bell, User } from "lucide-react";

const YouTubeHeader = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left section - Menu and Logo */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-accent transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-1">
            <span className="text-xl font-medium text-white">YouTube</span>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex items-center max-w-2xl flex-1 mx-8">
          <div className="flex flex-1 max-w-xl">
            <input
              type="text"
              placeholder="Buscar"
              className="flex-1 bg-background border border-border rounded-l-full px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <button className="bg-secondary border border-l-0 border-border rounded-r-full px-6 py-2 hover:bg-accent transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right section - User actions */}
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-accent transition-colors">
            <Video className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-full hover:bg-accent transition-colors">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-full hover:bg-accent transition-colors">
            <User className="w-8 h-8" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default YouTubeHeader;