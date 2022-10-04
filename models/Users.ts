"use strict";
import { UUIDV4, Model } from "sequelize";

interface UserAttributes {
  id: string;
  username: string;
  email: string;
  password: string;
  cellphone: number;
  isActive: boolean;
  rol: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Users extends Model<UserAttributes> implements UserAttributes {
    id!: string;
    username!: string;
    email!: string;
    password!: string;
    cellphone!: number;
    isActive!: boolean;
    rol!: string;
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
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: true,
      },
      rol: {
        type: DataTypes.ENUM("ADMIN_ROLE", "USER_ROLE"),
        allowNull: false,
        defaultValue: "USER_ROLE",
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
