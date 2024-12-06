// const Visitor = require("../model/Visitor");
const models = require("../models");
const { errorlogs } = require("../utils/common");

// get /
exports.main = (req, res) => {
  res.render("index");
};

// get /visitors
exports.getVisitors = (req, res) => {
  // DB 연결 전 코드
  // res.render("visitors", { data: Visitor.getVisitors() });

  // DB 연결 후 코드, sequelize 하기 전
  // cb(rows)와 result가 동일함
  // Visitor.getVisitors((result) => {
  //   console.log("전체 목록 Cvisitor.js", result);
  //   res.render("visitors", { data: result });
  // });

  // sequelize이후
  // `SELECT * FROM visitor;`
  models.Visitor.findAll() // findAll의 결과는 배열임
    .then((result) => {
      //console.log("findAll", result);
      // res.send(result);
      res.render("visitors", { data: result });
    })
    .catch((e) => {
      // console.log("getVisitors controller error", e);
      // res.status(500).send("server error!");
    });
};

// get /visitor/:id
exports.getVisitor = async (req, res) => {
  console.log(req.params); // {id:'1'}
  console.log(req.params.id); // '2'

  // sequelize 하기 전
  // Visitor.getVisitor(req.params.id, (result) => {
  //   console.log("한 개의 데이터 Cvisitor.js", result);
  //   res.send("response!");
  // });

  // sequelize 이후
  // `SELECT * FROM visitor WHERE id=${req.params.id};`
  try {
    const result = await models.Visitor.findOne({
      where: {
        id: req.params.id,
      },
    });
    //console.log("findOne", result);
    res.send(result);
  } catch (e) {
    // console.log("e", e);
    // res.status(500).send("Internal Server Error");
  }
};

// POST /visitor 등록
exports.postVisitor = (req, res) => {
  console.log(req.body);

  // sequelize 하기 전
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js", result);
  //   res.send({ id: result, comment: req.body.comment, name: req.body.name });
  // });

  // sequelize 이후
  // `INSERT INTO visitor VALUE(null, "${data.name}", "${data.comment}")`
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  })
    .then((result) => {
      //console.log(result);
      res.render(result);
    })
    .catch((e) => {
      // console.log("e", e);
      // res.status(500).send("server error");
    });
};

// DELETE /visitor
exports.deleteVisitor = async (req, res) => {
  console.log(req.body); // {id:'3'}
  console.log(req.body.id); // '3'

  // sequelize 하기 전
  // Visitor.deleteVisitor(req.body.id, () => {
  //   res.send(req.body.id + "번 삭제 완료~!");
  // });

  // sequelize 이후
  // `DELETE FROM visitor WHERE id=${id}`
  try {
    const result = await models.Visitor.destroy({
      where: { id: req.body.id },
    });
    //console.log(result); // 1 (삭제 성공) , 0 (삭제 실패 - 없는 데이터를 삭제하려고 할 때) -> 1은 true, 2는 false
    if (Boolean(result)) {
      // Number to Boolean
      res.send(req.body.id + "번 id 삭제 완료");
    } else {
      res.send("잘못된 접근입니다!");
    }
  } catch (e) {
    console.log("e", e);
    res.send("Internal Server error!");
  }
};

// PATCH /visitor 수정
exports.patchVisitor = async (req, res) => {
  console.log(req.body);

  // sequelize 하기 전
  // Visitor.patchVisitor(req.body, () => {
  //   res.send("수정 완료!");
  // });

  // sequelize 이후
  // `UPDATE visitor SET name="${data.name}", comment="${data.comment}" WHERE id=${data.id}`;
  try {
    const result = await models.Visitor.update(
      {
        name: req.body.name,
        comment: req.body.comment,
      },
      {
        where: { id: req.body.id },
      }
    );
    //console.log(result); // [1], [0]
    // const [number] = result;
    // console.log(number);
    if (Boolean(result)) {
      // Number to Boolean
      res.send("수정 완료");
    } else {
      res.send("잘못된 접근입니다!");
    }
  } catch (e) {
    errorlogs(e, "patch controller 내부");
  }
};
