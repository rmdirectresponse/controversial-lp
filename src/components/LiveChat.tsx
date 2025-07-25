const LiveChat = () => {
  const comments = [
    {
      id: 1,
      user: "Linda M.",
      avatar: "L",
      message: "Day 7 and my sugar dropped to 97. I honestly cried when I saw the meter. Thank you, Dr. Angela.",
      color: "bg-blue-500"
    },
    {
      id: 2,
      user: "Carlos Reyes",
      avatar: "C",
      message: "My dad has been on insulin for 12 years. After 2 weeks on this, his doctor said 'I don't know what you're doing, but keep doing it.",
      color: "bg-blue-500"
    },
    {
      id: 3,
      user: "Deborah W.",
      avatar: "D",
      message: "Didn't change my diet, didn't start exercising. Just started this recipe. My energy is coming back. This is real.",
      color: "bg-blue-500"
    },
    {
      id: 4,
      user: "Samantha R.",
      avatar: "S",
      message: "I've seen a ton of diabetes 'cures' online. This one hit different. Feels legit for the first time.",
      color: "bg-blue-500"
    },
    {
      id: 5,
      user: "Ben H.",
      avatar: "B",
      message: "Okay... I usually skip these long videos. But I watched every second of this. Something about her story just felt real.",
      color: "bg-blue-500"
    },
    {
      id: 6,
      user: "Amy Delgado",
      avatar: "A",
      message: "Not gonna lie — I thought this was a scam at first. But I just made it. It's worth a shot. I just reversed my diabetes in less than 7 days...",
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
          <span>Top Posts</span>
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
            placeholder="Click here..."
            className="flex-1 bg-transparent text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
            disabled
          />
          <span className="text-xs text-muted-foreground">0/200</span>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;