const express = require("express");
const db = require("./models");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static 폴더 설정
app.use("/static", express.static(__dirname + "/static"));

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// 404 에러
// 반드시 맨 마지막 라우트로 선언
app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then((result) => {
  //console.log(result);
  console.log("db 연결 성공!");

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
