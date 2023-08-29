'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('chats', { 
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      username: { allowNull: false, type: Sequelize.STRING },
      messages: { allowNull: false, type: Sequelize.TEXT },
      finished: { allowNull: false, type: Sequelize.DATE },
         });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('products');

  }
};
