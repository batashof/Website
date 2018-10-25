'use strict';
module.exports = {
  up: (db, { INTEGER, STRING }) => {
    db.createTable(
      'services',
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true
        },
        tag: { type: STRING },
        title: { type: STRING, allowNull: false }
      },
      {
        timestamps: false
      }
    );
  },
  down: (db, Sequelize) => {
    return db.dropTable('services');
  }
};
