const user = require("../model/User");

// get /
exports.main = (req, res) => {
  res.render("index");
};

// get / user
exports.user = (req, res) => {
  console.log(user.userInfo());

  const { id, pw } = req.body;
  if (realId === id && realPw === pw) {
    res.send({ isSuccess: true, id: id });
  } else {
    res.send({ isSuccess: false });
  }

  res.render("user", { userInfo: user.userInfo() });
};
