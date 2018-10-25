'use strict';
module.exports = {
  up: (db, { INTEGER, DATE }) => {
    db.createTable('services_case-studies', {
      serviceID: {
        type: INTEGER,
        references: {
          model: 'services',
          key: 'id'
        },
        allowNull: false
      },
      caseStudyID: {
        type: INTEGER,
        references: {
          model: 'case-studies',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: DATE,
      updatedAt: DATE
    });
  },
  down: (db, Sequelize) => {
    return db.dropTable('services_case-studies');
  }
};
