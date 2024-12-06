const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

const TeamGameModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "teamGame",
    // fk 설정은 models/index.js에서 설정
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
    },
    { freezeTableName: true }
  );
};

module.exports = TeamGameModel;
