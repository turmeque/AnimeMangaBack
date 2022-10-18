import { DataTypes, Model, Sequelize } from "sequelize";
import db from ".";

interface ReviewsAttributes {
  id: string;
  comment: string;
  rating: number;
  category: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Reviews extends Model implements ReviewsAttributes {
    id!: string;
    comment!: string;
    rating!: number;
    category!: string;

    static associate(models: any) {
      Reviews.belongsTo(models.Animes, { foreignKey: "AnimeId" });
      Reviews.belongsTo(models.Manga, { foreignKey: "MangaId" });
      Reviews.belongsTo(models.Users);
    }
  }
  Reviews.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
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
      modelName: "Reviews",
    }
  );

  return Reviews;
};
