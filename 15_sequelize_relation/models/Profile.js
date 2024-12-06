const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

const ProfileModel = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "profile",
    // fk 설정은 models/index.js에서 설정
    {
      profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      position: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
  return Profile;
};

module.exports = ProfileModel;
