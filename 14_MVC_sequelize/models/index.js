"use strict";

const Sequelize = require("sequelize");
let config = require(__dirname + "/../config/config.js");
console.log("config", config);
config = config["development"];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 설정 정보를 sequelize라는 키 안에 넣어주는 중
db.sequelize = sequelize;
// {
//   sequelize: sequelize;
// }

// 시퀄라이즈 모듈을 sequelize 라는 key 안에 넣어주는 중
db.Sequelize = Sequelize;
// {
//   sequelize: sequelize,
//   Sequelize: Sequelize
// }

// 함수 호출해서 사용
db.Visitor = require("./Visitor")(sequelize, Sequelize);
// {
//   sequelize: sequelize,
//   Sequelize: Sequelize,
//   Visitor: visitor의 모델
// }

// app.js에서 사용
module.exports = db;
