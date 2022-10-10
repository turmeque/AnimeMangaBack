"use strict";
import { UUIDV4, Model } from "sequelize";

interface UserAttributes {
  id: number;
  username: string;
  image:string;
  email: string;
  password: string;
  cellphone: number;
  isActive: boolean;
  isAdmin: boolean;
  google: boolean
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Users extends Model<UserAttributes> implements UserAttributes {
    id!: number;
    username!: string;
    image!:string;
    email!: string;
    password!: string;
    cellphone!: number;
    isActive!: boolean;
    isAdmin!: boolean;
    google!: boolean
    static associate(models: any) {
      // define association here
      //  Users.belongsToMany(models.AnimeFavorites, { through: 'anime_favorite' })
       Users.hasMany(models.Purchases)
      // Users.hasOne(models.Profile);
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image:{
        type:DataTypes.STRING,
        defaultValue: "https://images.unsplash.com/photo-1634034379073-f689b460a3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      
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
      google: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Users",
    }
  );
  return Users;
};
