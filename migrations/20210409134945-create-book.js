'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      isbn: {
        type: Sequelize.STRING(13),
        primaryKey: true,
        allowNull: true
      },
      title: {
        type: Sequelize.STRING
      },
      edition: {
        type: Sequelize.STRING
      },
      totalCopy: {
        type: Sequelize.INTEGER
      },
      remCopy: {
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
    await queryInterface.dropTable('Books');
  }
};
