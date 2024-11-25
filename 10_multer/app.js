const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static 폴더 설정
app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

// multer 설정
const upload = multer({
  dest: "uploads/", // 어디에 저장될 지 // 자동으로 폴더가 만들어짐
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/"); // 어디에 저장될 지
      // uploads라는 폴더가 미리 만들어져 있어야 함
    },
    filename: function (req, file, done) {
      // const extension = path.extname(파일 이름.확장자) >> 확장자만 return
      const extension = path.extname(file.originalname); // .png, .webp, ...

      // path.basename(파일 이름.확장자, 확장자); >> 파일 이름만 return // zoom
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );

      console.log("path.basename", path.basename(file.originalname, extension));
      console.log("path.extname", path.extname(file.originalname));

      //   {
      //   fieldname: 'userfile', // 폼 내부에 정의한 name 값
      //   originalname: 'zoom.png', // 원본 파일명
      //   encoding: '7bit', // 파일 인코딩 타입
      //   mimetype: 'image/png', // 파일 타입
      //   destination: 'uploads/', // 파일 저장 경로
      //   filename: 'c4047b197b786bfe28ce678cae093efc', // 저장된 파일명
      //   path: 'uploads\\c4047b197b786bfe28ce678cae093efc', // 업로드 된 파일 전체 경로
      //   size: 612889 // 파일 크기(byte)
      // }
    },
  }),

  limits: { fieldSize: 5 * 1024 * 1024 }, // 5mb
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.body); // 파일 정보는 req.file에서 확인
  console.log(req.file);
  //   {
  //   fieldname: 'userfile', // 폼 내부에 정의한 name 값
  //   originalname: 'zoom.png', // 원본 파일명
  //   encoding: '7bit', // 파일 인코딩 타입
  //   mimetype: 'image/png', // 파일 타입
  //   destination: 'uploads/', // 파일 저장 경로
  //   filename: 'c4047b197b786bfe28ce678cae093efc', // 저장된 파일명
  //   path: 'uploads\\c4047b197b786bfe28ce678cae093efc', // 업로드 된 파일 전체 경로
  //   size: 612889 // 파일 크기(byte)
  // }
  res.send("응답!");
});

// 하나의 input에 여러 개의 파일
app.post("/uploads/array", uploadDetail.array("multifiles"), (req, res) => {
  // console.log(req.file); // undefined
  console.log(req.files);

  // {
  //   fieldname: 'multifiles',
  //   originalname: 'cat_1.jpg',
  //   encoding: '7bit',
  //   mimetype: 'image/jpeg',
  //   destination: 'uploads/',
  //   filename: 'cat_11732518452680.jpg',
  //   path: 'uploads\\cat_11732518452680.jpg',
  //   size: 4463
  // }

  console.log(req.body);
  res.send("업로드 완료!!");
});

// 여러 개의 input에 파일 업로드
// .fields() 사용
// fields의 매개변수는 배열[{name:'name값1'},...]
app.post(
  "/uploads/fields",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  (req, res) => {
    // upload.fields()로 받아주는 req.files 객체 형태로 들어옴
    console.log(req.files);
    /* 
      {filename1:[{업로드 파일 정보}], filename2:[{업로드 파일 정보}], ...}
    */
    console.log(req.body);
    res.send("업로드 완료");
  }
);

// 동적 form 파일 업로드
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
