import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Practice1() {
  const [fromServerStr, setFromServerStr] = useState("");
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();

    socket.on("hello2", (str) => {
      setFromServerStr(str);
    });

    socket.on("study2", (str) => {
      setFromServerStr(str);
    });

    socket.on("bye2", (str) => {
      setFromServerStr(str);
    });

    return () => {
      socket.off("hello2");
      socket.off("study2");
      socket.off("bye2");
    };
  }, []);

  // 이벤트 핸들러 중복 등록될 수 있기 때문에 useEffect 안에서 작성해야 함
  //    socket.on("bye2", (str) => {
  //      setFromServerStr(str);
  //    });

  const events = ["hello", "study", "bye"];

  const emitToServer = (eventName) => {
    socket.emit(eventName, eventName);
  };

  return (
    <>
      <h3>실습1번</h3>
      {events.map((event) => (
        <button
          key={event}
          onClick={() => {
            emitToServer(event);
          }}
        >
          {event}
        </button>
      ))}
      <h3>server:{fromServerStr}</h3>
    </>
  );
}
