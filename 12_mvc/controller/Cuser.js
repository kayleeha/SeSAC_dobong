const User = require("../model/User");

// get /user
exports.getUser = (req, res) => {
  console.log(User.userInfo()); // {}
  // res.send("응답 완료");

  res.render("user", { userInfo: User.userInfo() });
};
