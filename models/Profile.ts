"use strict";
import { Model, UUIDV1 } from "sequelize";

interface ProfileAttributes {
  id: number;
  username: string;
  image: string;
  biography: string;
  address: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Profile extends Model<ProfileAttributes> implements ProfileAttributes {
    id!: number;
    username!: string;
    image!: string;
    biography!: string;
    address!: string;

    static associate(models: any) {
      // define association here
      // Profile.belongsTo(models.Users, { foreignKey: "userId" });
      Profile.hasOne(models.Users);
    }
  }
  Profile.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV1,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      biography: {
        type: DataTypes.TEXT,
      },
      address: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Profile",
    }
  );
  return Profile;
};
