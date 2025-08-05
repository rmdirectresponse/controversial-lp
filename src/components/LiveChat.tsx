const LiveChat = () => {
  const comments = [
    {
      id: 1,
      user: "María José Fernández",
      avatar: "M",
      message: "No tengo ni idea de cómo funciona, pero funciona. Solo diré esto: véanlo hasta el final. Todo va a tener sentido después.",
      color: "bg-blue-500"
    },
    {
      id: 2,
      user: "Alejandro Ramírez",
      avatar: "A",
      message: "Vi el video pensando que era otra promesa vacía. Pero algo me llegó. Y desde entonces... las cosas simplemente empezaron a cambiar.",
      color: "bg-blue-500"
    },
    {
      id: 3,
      user: "Carmen Valdés",
      avatar: "C",
      message: "No cambié nada en mi rutina. Pero después de ver esto, todo empezó a fluir. Fue casi inmediato.",
      color: "bg-blue-500"
    },
    {
      id: 4,
      user: "Roberto Morales",
      avatar: "R",
      message: "Siempre fui escéptico con estas cosas. Pero lo que me pasó esta semana... solo puedo decir que hay algo ahí que no quieren que sepamos.",
      color: "bg-blue-500"
    },
    {
      id: 5,
      user: "Valeria Silva",
      avatar: "V",
      message: "No suelo comentar en este tipo de videos, pero este me hizo click. Y desde ese día, todo fue diferente. ¿Casualidad? Lo dudo.",
      color: "bg-blue-500"
    },
    {
      id: 6,
      user: "Diego Herrera",
      avatar: "D",
      message: "Estaba a punto de cerrar el video en el primer minuto. Menos mal que lo vi completo. Es raro... pero tiene mucho más sentido que todo lo que había escuchado.",
      color: "bg-blue-500"
    },
    {
      id: 7,
      user: "Andrea López",
      avatar: "A",
      message: "No se puede explicar. Es algo que solo entiendes cuando lo ves. Me arrepiento de no haberlo visto antes.",
      color: "bg-blue-500"
    },
    {
      id: 8,
      user: "Sebastián Torres",
      avatar: "S",
      message: "Pensé que era pura tontería. Pero si están dudando, véanlo. En serio. Es de esas cosas que no puedes \"des-ver\" después.",
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="bg-background border border-border rounded">
      {/* Live Chat Header */}
      <div className="border-b border-border p-4">
        <h3 className="font-medium text-foreground">Chat en vivo</h3>
        <div className="flex items-center mt-1 text-sm text-muted-foreground">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
          <span>Chat principal</span>
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
            placeholder="Escribe algo..."
            className="flex-1 bg-transparent text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
            disabled
          />
          <span className="text-xs text-muted-foreground">0/200</span>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-center">
          Inicia sesión para chatear
        </div>
      </div>
    </div>
  );
};

export default LiveChat;