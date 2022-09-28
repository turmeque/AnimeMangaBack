"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize: any, DataTypes: any) => {
  class GenresManga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  GenresManga.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "GenresManga",
    }
  );
  return GenresManga;
};
