'use strict';

const { ROLE } = require('../services/Constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const rolesData = Object.values(ROLE).map(roleName => ({
      name: roleName,
      // Other properties related to each role
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
        await queryInterface.bulkInsert('roles',rolesData)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('roles', null, {});
  }
};
