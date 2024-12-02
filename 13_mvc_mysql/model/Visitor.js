const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

exports.getVisitors = (cb) => {
  // DB 연결 전 코드
  //   return [
  //     { id: 1, name: "홍길동", comment: "내가 왔다" },
  //     { id: 2, name: "이찬희", comment: "으라차차" },
  //   ];

  // DB 연결 후 코드
  conn.query(`SELECT * FROM visitor;`, (e, rows) => {
    if (e) {
      throw e;
    }

    console.log("visitor 테이블의 전체 조회", rows);

    // controller에 정보 넘기기
    cb(rows);
  });
};
