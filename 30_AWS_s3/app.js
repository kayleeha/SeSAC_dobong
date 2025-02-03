// npm i aws-sdk
// npm i multer -s3@2.10.0

const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const path = require("path");

const app = express();
const PORT = 8080;
dotenv.config();

app.set("view engine", "ejs");

// aws s3 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

const s3 = new aws.S3();

// multer 설정 1
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname); // 확장자
//     cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
//   },
// });

// multer 설정 2
// s3에 사진을 저장하는 코드
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read", // 파일 접근 권한 설정
    key: (req, file, cb) => {
      cb(null, Date.now().toString + "-" + file.originalname);
    },
  }),
});

app.get("/", (req, res) => {
  res.render("index", { imgUrl: "" });
});

app.post("/upload", upload.single("image"), (req, res) => {
  if (req.file) {
    const imgUrl = req.file.location; // S3에 업로드 된 파일의 경로
    res.render("index", { imgUrl });
  } else {
    res.send("이미지를 주세요");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
