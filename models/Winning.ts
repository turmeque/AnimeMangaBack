"use strict";
import { Model } from "sequelize";

interface WinningAttributes {
  id_order: string;
  profit: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Winning extends Model<WinningAttributes> implements WinningAttributes {
    id_order!: string;
    profit!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Winning.init(
    {
      id_order: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      profit: {
        type: DataTypes.FLOAT,
      },
    },
    {
      sequelize,
      modelName: "Winning",
    }
  );
  return Winning;
};
