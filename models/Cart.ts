import { DataTypes, Model, Sequelize } from "sequelize";
import db from ".";

interface CartAttributes {
  id: string;
  amount: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Cart extends Model implements CartAttributes {
    id!: string;
    amount!: number;

    static associate(models: any) {
      Cart.belongsTo(models.Animes, { foreignKey: "AnimeId" });
      Cart.belongsTo(models.Manga, { foreignKey: "MangaId" });
      Cart.belongsTo(models.Users);
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
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      AnimeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Animes",
          key: "id",
        },
      },
      MangaId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Mangas",
          key: "id",
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Cart",
    }
  );

  return Cart;
};
