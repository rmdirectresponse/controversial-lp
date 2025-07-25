import { Search, Menu, Video, Bell, User } from "lucide-react";

const YouTubeHeader = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 header-mobile-safe">
      <div className="flex items-center justify-between px-3 py-2 max-w-screen-xl mx-auto min-w-0 lg:px-4">
        {/* Left section - Menu and Logo */}
        <div className="flex items-center gap-3 flex-shrink-0 min-w-0 lg:gap-4">
          <button className="p-1.5 rounded-full hover:bg-accent transition-colors flex-shrink-0 lg:p-2">
            <Menu className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <div className="flex items-center gap-1 min-w-0">
            <span className="text-lg font-medium text-white whitespace-nowrap lg:text-xl">YouTube</span>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="hidden items-center max-w-2xl flex-1 mx-4 min-w-0 lg:flex lg:mx-8">
          <div className="flex flex-1 max-w-xl min-w-0">
            <input
              type="text"
              placeholder="Buscar"
              className="flex-1 bg-background border border-border rounded-l-full px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary min-w-0"
            />
            <button className="bg-secondary border border-l-0 border-border rounded-r-full px-6 py-2 hover:bg-accent transition-colors flex-shrink-0">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right section - User actions */}
        <div className="flex items-center gap-1 flex-shrink-0 lg:gap-2">
          <button className="p-1.5 rounded-full hover:bg-accent transition-colors flex-shrink-0 lg:p-2">
            <Video className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button className="hidden p-1.5 rounded-full hover:bg-accent transition-colors flex-shrink-0 sm:block lg:p-2">
            <Bell className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button className="p-1.5 rounded-full hover:bg-accent transition-colors flex-shrink-0 lg:p-2">
            <User className="w-6 h-6 lg:w-8 lg:h-8" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default YouTubeHeader;