const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어 설정 추가
// 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("/views", "views");

// static 폴더 설정 추가 // static이라는 경로를 /public 대신에 사용할 것
app.use("/static", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  /* 
    - request : 클라이언트가 서버에게 보내는 요청
    - response : 서버가 클라이언트에게 보내는 응답
    */
  // console.log(req)
  // res.send('hello express')
  res.render("test", {
    isLogin: false,
    userInfo: {
      name: "allie",
      msg: "오늘 너무 추워요",
    },
  });
});

// get /login
app.get("/login", function (req, res) {
  res.render("login", {
    isLogin: false, // 로그인 여부
    userInfo: {
      name: "allie", // 사용자 이름
      msg: "오늘 너무 추워요", // 사용자 메시지
    },
  });
});

// get /register
app.get("/register", function (req, res) {
  res.render("register", {
    isLogin: false, // 로그인 여부
    userInfo: {
      name: "allie", // 사용자 이름
      msg: "오늘 너무 추워요", // 사용자 메시지
    },
  });
});

// 404 처리
app.use(function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
