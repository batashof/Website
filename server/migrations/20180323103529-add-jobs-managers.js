'use strict';
module.exports = {
  up: (db, { INTEGER, DATE }) => {
    db.createTable('jobs_managers', {
      jobID: {
        type: INTEGER,
        references: {
          model: 'jobs',
          key: 'id'
        },
        allowNull: false
      },
      managerID: {
        type: INTEGER,
        references: {
          model: 'managers',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: DATE,
      updatedAt: DATE
    });
  },
  down: (db, Sequelize) => {
    return db.dropTable('jobs_managers');
  }
};