"use strict";
import { Model } from "sequelize";

interface ContentAttributes {
  id_product: string;
  userId: string;
  amount: number;
  address: string;
  address2: string;
  city: string;
  country: string;
  cp: number;
  delivery_process: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class PurshasedContent
    extends Model<ContentAttributes>
    implements ContentAttributes
  {
    id_product!: string;
    userId!: string;
    amount!: number;
    address!: string;
    address2!: string;
    city!: string;
    country!: string;
    cp!: number;
    delivery_process!: boolean;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      PurshasedContent.belongsTo(models.Users);
    }
  }
  PurshasedContent.init(
    {
      id_product: {
        type: DataTypes.STRING,
      },
      userId: {
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
    },

    {
      sequelize,
      modelName: "PurshasedContent",
    }
  );
  return PurshasedContent;
};
