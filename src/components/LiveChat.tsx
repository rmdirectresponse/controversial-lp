const LiveChat = () => {
  const comments = [
    {
      id: 1,
      user: "Sarah Johnson",
      avatar: "S",
      message: "I have no idea how it works, but it works. I'll just say this: watch it until the end. Everything will make sense after.",
      color: "bg-blue-500"
    },
    {
      id: 2,
      user: "Michael Davis",
      avatar: "M",
      message: "I watched the video thinking it was another empty promise. But something touched me. And since then... things just started to change.",
      color: "bg-blue-500"
    },
    {
      id: 3,
      user: "Jennifer Wilson",
      avatar: "J",
      message: "I didn't change anything in my routine. But after watching this, everything started to flow. It was almost immediate.",
      color: "bg-blue-500"
    },
    {
      id: 4,
      user: "Robert Martinez",
      avatar: "R",
      message: "I was always skeptical about these things. But what happened to me this week... I can only say there's something there they don't want us to know.",
      color: "bg-blue-500"
    },
    {
      id: 5,
      user: "Lisa Anderson",
      avatar: "L",
      message: "I don't usually comment on these types of videos, but this one clicked for me. And since that day, everything was different. Coincidence? I doubt it.",
      color: "bg-blue-500"
    },
    {
      id: 6,
      user: "David Thompson",
      avatar: "D",
      message: "I was about to close the video in the first minute. Good thing I watched it completely. It's weird... but it makes much more sense than everything I had heard.",
      color: "bg-blue-500"
    },
    {
      id: 7,
      user: "Amanda Garcia",
      avatar: "A",
      message: "It can't be explained. It's something you only understand when you see it. I regret not having seen it before.",
      color: "bg-blue-500"
    },
    {
      id: 8,
      user: "Christopher Lee",
      avatar: "C",
      message: "I thought it was pure nonsense. But if you're doubting, watch it. Seriously. It's one of those things you can't \"unsee\" after.",
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="bg-background border border-border rounded">
      {/* Live Chat Header */}
      <div className="border-b border-border p-4">
        <h3 className="font-medium text-foreground">Live Chat</h3>
        <div className="flex items-center mt-1 text-sm text-muted-foreground">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
          <span>Top chat</span>
          <span className="ml-4">👥 2.3K</span>
        </div>
      </div>

      {/* Comments */}
      <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3">
            <div className={`w-8 h-8 ${comment.color} rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0`}>
              {comment.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-foreground text-sm">{comment.user}</span>
              </div>
              <p className="text-sm text-foreground mt-1 leading-relaxed">{comment.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat input */}
      <div className="border-t border-border p-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gray-600 rounded-full flex-shrink-0"></div>
          <input
            type="text"
            placeholder="Say something..."
            className="flex-1 bg-transparent text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
            disabled
          />
          <span className="text-xs text-muted-foreground">0/200</span>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-center">
          Sign in to chat
        </div>
      </div>
    </div>
  );
};

export default LiveChat;