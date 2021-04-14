'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Borrowlogs', {
      isbn: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      userid: {
        type: Sequelize.STRING
      },
      issuedOn: {
        type: Sequelize.DATE
      },
      dueOn: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt : {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Borrowlogs');
  }
};