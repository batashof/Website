'use strict';
module.exports = {
  up: (db, { INTEGER, STRING }) => {
    db.createTable(
      'quotes',
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true
        },
        caseStudyId: {type: INTEGER},
        text: { type: STRING },
      },
      {
        timestamps: false
      }
    );
  },
  down: (db, Sequelize) => {
    return db.dropTable('quotes');
  }
};