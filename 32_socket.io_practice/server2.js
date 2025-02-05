const express = require("express");
const app = express();
const PORT = 8080;

// socket.io의 소켓이 http 모듈로 생성된 서버에만 동작
const http = require("http");
const { emit } = require("process");

const server = http.createServer(app);
const io = require("socket.io")(server);

app.set("view engine", "ejs");

// api

app.get("/", (req, res) => {
  res.render("client_dm");
});

/* socket */
const nickInfo = {};

io.on("connection", (socket) => {
  socket.on("checkNick", (nickname) => {
    // console.log(nickInfo);
    // console.log(Object.values(nickInfo)); // ["a", "b", "c"]
    // console.log(Object.values(nickInfo).indexOf(nickname));

    if (Object.values(nickInfo).indexOf(nickname) > -1) {
      // 중복된 닉네임이 있을 때 (입장 실패)
      // console.log("존재하는 닉네임입니다!");
      socket.emit("error", "이미 존재하는 닉네임입니다!");
    } else {
      // 중복되지 않은 닉네임
      nickInfo[socket.id] = nickname; // 현재 클라이언트 닉네임 정보 넣기

      // console.log("존재 하지 않는 닉네임입니다!");

      // 입장 성공, 내 닉네임 정보 전달
      socket.emit("entrySuccess", nickname);

      // 입장 성공, 입장 알림 메세지 전체에게 전달
      socket.broadcast.emit("notice", `${nickname}님이 입장하셨습니다.`);

      // 입장 성공, 나를 포함한 전체 client에게 전체 닉네임 정보 전달
      io.emit("updateNicks", nickInfo);
    }
  });

  // 메세지를 하나의 클라이언트에게 받아서 전체 클라이언트에게 전달
  socket.on("send", (msg) => {
    io.emit("message", { id: nickInfo[socket.id], message: msg });
  });

  // 클라이언트 퇴장 공고
  socket.on("disconnect", () => {
    io.emit("notice", `${nickInfo[socket.id]}님이 퇴장하셨습니다.`);
    // nickInfo에서 삭제된 클라이언트 정보 삭제
    delete nickInfo[socket.id]; // 객체에서 특정 데이터 삭제 구문
    console.log("deleted?", nickInfo);
    io.emit("updateNicks", nickInfo);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
