const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어 설정
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false })); // body-parser 설정
app.use(express.json());

// 라우터 불러오기
// const indexRouter = require("./routes/index");
const indexRouter = require("./routes"); // defalut 값이 index이기 때문에 생략 가능
app.use("/", indexRouter);

// 404 에러
// 반드시 맨 마지막 라우트로 선언
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
