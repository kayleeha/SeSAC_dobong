const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

const PlayerModel = (sequelize, DataTypes) => {
  const Player = sequelize.define(
    "player",
    // fk 설정은 models/index.js에서 설정
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
  return Player;
};

module.exports = PlayerModel;
