'use strict';

module.exports = {
  up: (db, { INTEGER, DATE }) => {
    db.createTable('technologies_case-studies', {
      technologyID: {
        type: INTEGER,
        references: {
          model: 'technologies',
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
  down: (db, { INTEGER, DATE }) => {
    return db.dropTable('technologies_case-studies');
  }
};
