"use strict";
import { Model } from "sequelize";

interface ContentAttributes {
  id_product: string;
  userId: string;
  email: string;
  name: string;
  amount: number;
  address: string;
  address2: string;
  city: string;
  country: string;
  cp: string;
  delivery_process: boolean;
  date: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Sales extends Model<ContentAttributes> implements ContentAttributes {
    id_product!: string;
    userId!: string;
    email!: string;
    name!: string;
    amount!: number;
    address!: string;
    address2!: string;
    city!: string;
    country!: string;
    cp!: string;
    delivery_process!: boolean;
    date!: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Sales.init(
    {
      id_product: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.INTEGER,
      },
      address: {
        type: DataTypes.STRING,
      },
      address2: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      cp: {
        type: DataTypes.INTEGER,
      },
      delivery_process: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
    },

    {
      sequelize,
      updatedAt: false,
      timestamps: false,
      modelName: "Sales",
    }
  );
  return Sales;
};
