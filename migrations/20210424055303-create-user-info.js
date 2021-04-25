'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      street1: {
        allowNull:true,
        type: Sequelize.STRING
      },
      street2: {
        allowNull:true,
        type: Sequelize.STRING
      },
      city: {
        allowNull:true,
        type: Sequelize.STRING
      },
      pincode: {
        allowNull:true,
        type: Sequelize.INTEGER
      },
      phone: {
        allowNull:true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userInfos');
  }
};