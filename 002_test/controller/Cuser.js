const User = require("../model/User");

// get /
exports.main = (req, res) => {
  res.render("index");
};

// post /login
exports.login = (req, res) => {
  console.log(req.body);
  // console.log("model>>>", User.getUserInfo());

  // 객체 구조 분해 추가
  const { realId, realPw } = User.getUserInfo();
  // console.log("---------");
  // console.log(realId, realPw);

  res.send("response@");
  const { id, pw } = req.body;

  if (realId === id && realPw === pw) {
    res.send({ userInfo: req.body, isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
};

// post /login2
exports.login2 = (req, res) => {
  console.log(User.user);

  const users = []; // [{realId, realPw, name},...]
  const userIds = []; // ["apple", "banana", "cocoa"]
  const userData = User.user.split("\n");
  userData.forEach((user) => {
    const userInfoArr = user.split("//");
    const userObj = {
      realId: userInfoArr[0],
      realPw: userInfoArr[1],
      name: userInfoArr[2],
    };
    users.push(userObj);
    userIds.push(userInfoArr[0]);
  });

  console.log("users", users);
  console.log("userIds", userIds);

  // 요청 정보를 바탕으로 회원이 맞는 지 확인

  const idx = userIds.indexOf(req.body.userId);
  // idx >= 0 userIds에 있는 회원
  // idx가 -1이라면 userIds에 없는 회원

  if (idx >= 0) {
    console.log("아이디가 있는 회원");
    if (req.body.pw === users[idx].realPw) {
      console.log("비밀번호 일치");
      res.send({ isSuccess: true, userName: users[idx].name });
    } else {
      console.log("비밀번호 불일치");
      res.send({ isSuccess: false });
    }
  } else {
    console.log("아이디가 없는 회원");
    res.send({ isSuccess: false });
  }
  res.send("response!!");
};
