'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('news', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT
      },
      spoiler: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      coverImage: {
        type: Sequelize.STRING,
        allowNull: false
      },
      spoilerImage: {
        type: Sequelize.STRING,
      },
      publishedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      timestamps: false
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('news');
  }
};