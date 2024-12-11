const { name } = require("ejs");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8080;
const SECRET = "siijsBQOUxUWbhjG"; //.env에 저장해서 사용

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB 정보
const userInfo = {
  id: "cocoa",
  pw: "1234",
  name: "코코아",
  age: 18,
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// post /login
app.post("/login", (req, res) => {
  try {
    console.log(req.body);
    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;
    if (id === realId && pw === realPw) {
      // 로그인 성공 >> jwt 발급
      const token = jwt.sign({ id }, SECRET); // sign(payload, 비밀키)
      console.log("token", token);
      // 토큰 발급은 서버가, 토큰 관리는 클라이언트가 함 (클라이언트에게 토큰을 보내주어야 함)
      res.send({ result: true, token });
    } else {
      // 로그인 실패
      res.send({ message: "로그인 정보가 올바르지 않습니다", result: false });
    }
  } catch (e) {
    console.error("post .login error", e);
    res.status(500).send({ message: "서버 에러" });
  }
});

app.post("/token", (req, res) => {
  try {
    console.log(req.headers.authorization); // Bearer sdfs.sdfs.sdfs
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      console.log(token);
      try {
        // 토큰 검증 작업
        const auth = jwt.verify(token, SECRET);
        console.log(auth);
        // { id: 'cocoa', iat: 1733894256 }
        if (auth.id === userInfo.id) {
          res.send({ result: true, name: userInfo.name });
        }
      } catch (e) {
        console.log("token erro");
        res.status(401).send({ message: "인증된 회원이 아닙니다." });
      }
    } else {
      // 인증 정보 없을 때
      res.redirect("/login");
    }
  } catch (e) {
    console.error("post token error", e);
    res.status(500).send({ message: "서버 에러" });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
