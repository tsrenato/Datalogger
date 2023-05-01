'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('logs', 'datalogger', Sequelize.INTEGER); 
     await queryInterface.addColumn('logs', 'hash', Sequelize.STRING); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('logs', 'datalogger'); 
     await queryInterface.removeColumn('logs', 'hash'); 
  }
};
