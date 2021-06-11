'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'John1',
      lastName: 'Doe1',
      email: 'example1@example.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'John2',
      lastName: 'Doe2',
      email: 'example2@example.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
