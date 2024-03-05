'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      source: {
        allowNull: false,
        type: Sequelize.STRING
      },
      destination: {
        allowNull: false,
        type: Sequelize.STRING
      },
      timeSlot : {
        allowNull: false,
        type: Sequelize.TIME
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('trips');
  }
};