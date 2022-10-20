import { DataTypes, UUIDV1, Model, Sequelize, STRING } from 'sequelize'

interface MangaFavoriteAttributes {
    id: number;
    title: string;
    image: string;
    score: number;
    popularity: number;
    chapters: number;
    status: string;
    synopsis: string;
    genres: string;
    price: number;
  
 
}

module.exports = (sequelize: any, DataTypes: any) => {
  class MangaFavorites extends Model implements MangaFavoriteAttributes {
    id!: number;
    title!: string;
    image!: string;
    score!: number;
    popularity!: number;
    chapters!: number;
    status!: string;
    synopsis!: string;
    genres!: string;
    price!: number;

    static associate(models: any) {
         MangaFavorites.belongsToMany(models.Users, { through: 'manga_favorite' })
    

     
    }
  }
  MangaFavorites.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
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
        defaultValue: 5,
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
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
  
  }, {
    sequelize,
    timestamps: false,
    modelName: "MangaFavorites"
  })
  return MangaFavorites
}