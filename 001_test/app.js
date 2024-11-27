const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/static", express.static(__dirname + "public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

// multer 설정
const uploadSetting = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 확장자
      // userId, name, pw, file..
      // req.body.userId == "id"
      done(null, req.body.userId + Date.now() + ext);
    },
  }),
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", uploadSetting.single("profileImg"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  //   res.send("요청!");

  res.render("result", {
    userInfo: req.body,
    src: req.file.path,
  });

  //   res.render("result", {
  //     ...req.body,
  //     src: req.file.path,
  //   });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
