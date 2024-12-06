// TODO: 컨트롤러 코드

const User = require("../model/User");

// get /
exports.main = (req, res) => {
  res.render("index");
};

exports.signin = (req, res) => {
  res.render("/user/signin");
};

exports.signup = (req, res) => {
  res.render("/user/signup");
};

exports.getUsers = (req, res) => {
  User.getUsers((result) => {
    res.render("users", { data: result });
  });
};
