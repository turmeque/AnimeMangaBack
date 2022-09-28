"use strict";
import { Model } from "sequelize";

interface MangaAttributes {
  id: number;
  title: string;
  image: string;
  score: number;
  popularity: number;
  chapters: number;
  status: string;
  synopsis: string;
  genres: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Manga extends Model<MangaAttributes> implements MangaAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    title!: string;
    image!: string;
    score!: number;
    popularity!: number;
    chapters!: number;
    status!: string;
    synopsis!: string;
    genres!: string;

    static associate(models: any) {
      // define association here
    }
  }
  Manga.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.STRING,
      },
      score: {
        type: DataTypes.FLOAT,
      },
      popularity: {
        type: DataTypes.FLOAT,
      },
      chapters: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
      },
      synopsis: {
        type: DataTypes.TEXT,
      },
      genres: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Manga",
    }
  );
  return Manga;
};
