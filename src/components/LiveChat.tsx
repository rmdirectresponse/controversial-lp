const LiveChat = () => {
  const comments = [
    {
      id: 1,
      user: "Linda M.",
      avatar: "L",
      message: "Día 7 y mi azúcar bajó a 97. Honestamente lloré cuando vi el medidor. Gracias, Dra. Angela.",
      color: "bg-blue-500"
    },
    {
      id: 2,
      user: "Carlos Reyes",
      avatar: "C",
      message: "Mi papá ha estado usando insulina por 12 años. Después de 2 semanas con esto, su doctor dijo 'No sé qué estás haciendo, pero sigue haciéndolo'.",
      color: "bg-blue-500"
    },
    {
      id: 3,
      user: "Deborah W.",
      avatar: "D",
      message: "No cambié mi dieta, no empecé a hacer ejercicio. Solo comencé esta receta. Mi energía está regresando. Esto es real.",
      color: "bg-blue-500"
    },
    {
      id: 4,
      user: "Samantha R.",
      avatar: "S",
      message: "He visto un montón de 'curas' para diabetes en línea. Esta se sintió diferente. Se siente legítima por primera vez.",
      color: "bg-blue-500"
    },
    {
      id: 5,
      user: "Ben H.",
      avatar: "B",
      message: "Bueno... usualmente me salto estos videos largos. Pero vi cada segundo de este. Algo sobre su historia se sintió real.",
      color: "bg-blue-500"
    },
    {
      id: 6,
      user: "Amy Delgado",
      avatar: "A",
      message: "No voy a mentir — pensé que esto era una estafa al principio. Pero acabo de hacerlo. Vale la pena intentarlo. Acabo de revertir mi diabetes en menos de 7 días...",
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="bg-background border border-border rounded">
      {/* Live Chat Header */}
      <div className="border-b border-border p-4">
        <h3 className="font-medium text-foreground">Chat en Vivo</h3>
        <div className="flex items-center mt-1 text-sm text-muted-foreground">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
          <span>Principales</span>
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
            placeholder="Haz clic aquí..."
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