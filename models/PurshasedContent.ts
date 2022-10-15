"use strict";
import { Model } from "sequelize";

interface ContentAttributes {
  name: string;
  image: string;
  amount: number;
  id_product: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class PurshasedContent
    extends Model<ContentAttributes>
    implements ContentAttributes
  {
    name!: string;
    image!: string;
    amount!: number;
    id_product!: string;

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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.INTEGER,
      },
      id_product: {
        type: DataTypes.STRING,
      },
    },

    {
      sequelize,
      modelName: "PurshasedContent",
    }
  );
  return PurshasedContent;
};
