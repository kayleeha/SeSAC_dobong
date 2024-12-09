const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));

// 세션 설정, 10분 뒤 세션 종료

app.get("/", (req, res) => {
  // 로그인이 안된 유저 > {isLogin:false}
  // 로그인이 된 유저 > {isLogin:true, user:유저}
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

const userInfo = {
  userId: "cocoa",
  userPw: "1234",
};

// post /login
app.post("/login", (req, res) => {
  // 실제 로그인 진행 >> 세션 연결
  // 세션의 user라는 키를 추가하여 userId 값을 value로 전달
});

app.get("/logout", (req, res) => {
  // 실제 로그아웃 진행 >> 세션 삭제
});

// get /logout

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
