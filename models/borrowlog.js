'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrowlog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Borrowlog.init({
    isbn: {
      type:DataTypes.STRING(13),
      primaryKey:true,
      allowNull:false,
      unique:true,
    },
    userid: DataTypes.STRING,
    issuedOn: DataTypes.DATE,
    dueOn: DataTypes.DATE,
    status: {
      type:DataTypes.INTEGER,
      // validate : {
      //   is : "[0-3],'i'"
      // }
    }
  }, {
    sequelize,
    modelName: 'Borrowlog',
  });
  return Borrowlog;
};