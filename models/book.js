'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    isbn: {
      type: DataTypes.STRING(13),
      primaryKey : true,
      validate:{
        is: ["[0-9]{13}","i"]
      }
    },
    title: DataTypes.STRING,
    edition: DataTypes.STRING,
    totalCopy: DataTypes.INTEGER,
    remCopy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
