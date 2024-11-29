const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static 폴더 설정
app.use("/static", express.static(__dirname + "/public"));

// 라우터 분리
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const userRouter = require("./routes/user");
app.use("/user", userRouter);

// 404 에러
// 반드시 맨 마지막 라우트로 선언
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
