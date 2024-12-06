const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

const TeamModel = (sequelize, DataTypes) => {
  const Team = sequelize.define(
    "team",
    // fk 설정은 models/index.js에서 설정
    {
      team_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
  return Team;
};

module.exports = TeamModel;
