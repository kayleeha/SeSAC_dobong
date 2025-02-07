const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  const nickInfo = {}; // {socket.id:nickname}
  io.on("connection", (socket) => {
    console.log(socket.id);
    // io.emit("notice", nickInfo[socket.id] + "님이 입장했습니다");

    // 닉네임 중복 체크 후 사용 가능한 닉네임일 때 nickInfo에 추가
    socket.on("checkNick", (nickname) => {
      if (Object.values(nickInfo).includes(nickname)) {
        // 닉네임이 nickInfo에 존재하는 경우 (닉네임 중복)
        socket.emit("error", "이미 존재하는 닉네임입니다.");
      } else {
        // 닉네임이 nickInfo에 존재하지 않는 경우 (중복 X, 사용 가능)
        nickInfo[socket.id] = nickname;

        // 중복되지 않는 닉네임 클라이언트로 전달
        socket.emit("entrySuccess", nickname);

        // 입장 성공 시 입장 메세지 보내기
        io.emit("notice", nickInfo[socket.id] + "님이 입장했습니다");
      }
    });

    socket.on("disconnect", () => {
      io.emit("notice", nickInfo[socket.id] + "님이 퇴장했습니다");
      delete nickInfo[socket.id]; // 객체에서 제거
    });
  });
}

module.exports = socketHandler;
