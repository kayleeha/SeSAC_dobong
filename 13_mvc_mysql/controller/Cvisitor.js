const Visitor = require("../model/Visitor");

// get /
exports.main = (req, res) => {
  res.render("index");
};

// get /visitors
exports.visitor = (req, res) => {
  // DB 연결 전 코드
  // res.render("visitors", { data: Visitor.getVisitors() });

  // DB 연결 후 코드
  // cb(rows)와 result가 동일함
  Visitor.getVisitors((result) => {
    console.log("전체 목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  });
};
