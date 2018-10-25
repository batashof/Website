"use strict";
module.exports = {
  up: (db, { INTEGER, STRING, TEXT }) => {
    return db.createTable(
      "technologies",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: INTEGER
        },
        title: {
          type: STRING,
          allowNull: false
        },
        tag: {
          type: STRING
        },
        pageTitle: {
          type: STRING
        },
        technologiesList: {
          type: TEXT
        },
        pageSpoiler: {
          type: TEXT
        }
      },
      {
        timestamps: false
      }
    );
  },
  down: (db, { INTEGER, STRING,TEXT }) => {
    return db.dropTable("technologies");
  }
};
