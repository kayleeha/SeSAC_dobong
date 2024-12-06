const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

const GameModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "game",
    // fk 설정은 models/index.js에서 설정
    {
      game_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
};

module.exports = GameModel;
