'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userInfo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      allowNull:true
    },
    name: {
      type:DataTypes.STRING,
    },
    street1: {
      type: DataTypes.STRING,
      allowNull : true
    },
    street2: {
      type: DataTypes.STRING,
      allowNull : true
    },
    city: {
      type: DataTypes.STRING,
      allowNull : true
    },
    pincode: {
      type:DataTypes.INTEGER,
      allowNull:true,
      validate: {
        max:999999,
        min:100000
      }
    },
    phone: {
      type:DataTypes.INTEGER,
      allowNull:true,
      validate: {
        max:9999999999,
        min:1000000000
      }
    }
  }, {
    sequelize,
    modelName: 'userInfo',
  });
  return userInfo;
};