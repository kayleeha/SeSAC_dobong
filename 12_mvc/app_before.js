const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static 폴더 설정
app.use("/static", express.static(__dirname + "/public"));

const comments = [
  {
    id: 1,
    userId: "apple",
    date: "2024-10-23",
    comment: "안녕하세요!!",
  },
  {
    id: 2,
    userId: "banana",
    date: "2024-11-11",
    comment: "반갑습니다~!!",
  },
  {
    id: 3,
    userId: "cocoa",
    date: "2024-12-01",
    comment: "수고하세요~~~!!",
  },
  {
    id: 4,
    userId: "donut",
    date: "2024-06-24",
    comment: "또 만나요~~",
  },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/comments", (req, res) => {
  console.log(comments);
  res.render("comments", { commentInfos: comments });
});

app.get("/comment/:id", (req, res) => {
  console.log(req.params);
  //   console.log(req.query);

  const commentId = req.params.id; // "/comment/:id"에 id가 키 값임, userId였다면 userId로 썼을 것임!

  console.log("commentId", commentId); // 1, 2, 3, 4

  console.log(comments[commentId - 1]); // 댓글의 실제 정보

  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }

  if (isNaN(commentId)) {
    res.render("404");
  }
  res.render("comment", { commentInfos: comments[commentId - 1] });
});

// 404 에러
// 반드시 맨 마지막 라우트로 선언
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
