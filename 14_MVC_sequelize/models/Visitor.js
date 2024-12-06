const Visitor = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "visitor",
    {
      id: {
        // id int not null primary Key auto_increment
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        // name varchar(10) not null
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // comment mediumtext
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      // 데이터 추가/수정 컬럼을 자동으로 만들어서 기록
      // 기본 값 true
      timestamps: false,
      // 첫 번째 인자로 전달을 해준 모델 이름 그대로
      // 테이블 이름 고정 (false면 테이블 이름을 자동으로 복수형으로 바꿈)
      freezeTableName: true,
    }
  );
  return model;
};

module.exports = Visitor; // module/index.js에서 사용할 예정
