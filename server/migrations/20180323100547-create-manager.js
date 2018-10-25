'use strict';
module.exports = {
  up: (queryInterface, {STRING, INTEGER}) => {
    return queryInterface.createTable(
      'managers',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: INTEGER
        },
        name: {
          type: STRING,
          allowNull: false
        },
        position: {
          type: STRING,
          allowNull: false
        },
        photo: {
          type: STRING
        },
        address: {
          type: STRING
        },
        skype: {
          type: STRING
        },
        tel: {
          type: STRING
        },
        mail: {
          type: STRING
        }
      },
      {
        timestamps: false
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('managers');
  }
};
