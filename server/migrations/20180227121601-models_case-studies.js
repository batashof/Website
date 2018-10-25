'use strict';
module.exports = {
  up: (db, { INTEGER, DATE }) => {
    db.createTable('models_case-studies', {
      modelID: {
        type: INTEGER,
        references: {
          model: 'models',
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
    return db.dropTable('models_case-studies');
  }
};
