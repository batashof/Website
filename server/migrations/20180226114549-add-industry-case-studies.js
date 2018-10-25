'use strict';
module.exports = {
  up: (db, { INTEGER, DATE }) => {
    db.createTable('industries_case-studies', {
      industryID: {
        type: INTEGER,
        references: {
          model: 'industries',
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
    return db.dropTable('industries_case-studies');
  }
};
