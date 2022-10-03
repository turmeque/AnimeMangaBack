"use strict";
import { Model, UUIDV4 } from "sequelize";

interface UserAttributes {
  id: string;
  username: string;
  email: string;
  password: string;
  cellphone: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Users extends Model<UserAttributes> implements UserAttributes {
    id!: string;
    username!: string;
    email!: string;
    password!: string;
    cellphone!: number;
    static associate(models: any) {
      // define association here
      // Users.hasOne(models.Profile);
      Users.belongsTo(models.Profile);
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cellphone: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Users",
    }
  );
  return Users;
};
