const Visitor = require("../model/Visitor");

// get /
exports.main = (req, res) => {
  res.render("index");
};

// get /visitors
exports.getVisitors = (req, res) => {
  // DB 연결 전 코드
  // res.render("visitors", { data: Visitor.getVisitors() });

  // DB 연결 후 코드
  // cb(rows)와 result가 동일함
  Visitor.getVisitors((result) => {
    console.log("전체 목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  });
};

// get /visitor/:id
exports.getVisitor = (req, res) => {
  console.log(req.params); // {id:'1'}
  console.log(req.params.id); // '2'
  Visitor.getVisitor(req.params.id, (result) => {
    console.log("한 개의 데이터 Cvisitor.js", result);
    res.send("response!");
  });
};

// POST /visitor 등록
exports.postVisitor = (req, res) => {
  console.log(req.body);
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js", result);
    res.send({ id: result, comment: req.body.comment, name: req.body.name });
  });
};

// DELETE /visitor
exports.deleteVisitor = (req, res) => {
  console.log(req.body); // {id:'3'}
  console.log(req.body.id); // '3'
  Visitor.deleteVisitor(req.body.id, () => {
    res.send(req.body.id + "번 삭제 완료~!");
  });
};

// PATCH /visitor 수정
exports.patchVisitor = (req, res) => {
  console.log(req.body);
  Visitor.patchVisitor(req.body, () => {
    res.send("수정 완료!");
  });
};
