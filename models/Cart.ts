import { DataTypes, Model, Sequelize } from "sequelize";

interface CartAttributes {
  id: string;
  amount: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Cart extends Model implements CartAttributes {
    id!: string;
    amount!: number;

    static associate(models: any) {
      Cart.belongsToMany(models.Animes, { through: "cartAnime" });
      Cart.belongsToMany(models.Manga, { through: "cartManga" });
      Cart.belongsTo(models.Users)
    }
  }

  Cart.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Cart",
    }
  );

  return Cart;
};
