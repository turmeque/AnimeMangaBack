"use strict";
import { UUIDV4, Model } from "sequelize";

interface UserAttributes {
  id: string;
  username: string;
  email: string;
  password: string;
  cellphone: number;
  isActive: boolean;
  isAdmin: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Users extends Model<UserAttributes> implements UserAttributes {
    id!: string;
    username!: string;
    email!: string;
    password!: string;
    cellphone!: number;
    isActive!: boolean;
    isAdmin!: boolean;
    static associate(models: any) {
      // define association here
      // Users.hasOne(models.Profile);
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
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cellphone: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
