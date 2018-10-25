'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'jobs',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        url: {
          type: Sequelize.STRING,
          allowNull: false
        },
        position: {
          type: Sequelize.STRING,
          allowNull: false
        },
        location: {
          type: Sequelize.STRING
        },
        content: {
          type: Sequelize.TEXT
        },
        spoiler: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        hot: {
          type: Sequelize.BOOLEAN
        },
        division: {
          type: Sequelize.STRING
        }
      },
      {
        timestamps: false
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jobs');
  }
};
