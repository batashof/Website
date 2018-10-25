'use strict';

module.exports = {
  up: (db, {INTEGER, STRING, TEXT, BOOLEAN}) => {
    db.createTable("case-studies", {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      title: { type: STRING, allowNull: false },
      logo: { type: STRING, allowNull: false },
      onHomePage: BOOLEAN,
      tag: STRING,
      agents: STRING,
      photo: STRING,
      bannerFilter: STRING,
      videoId: STRING,
      videoPreview: STRING,
      videoBackground: STRING,
      description: TEXT,
      feature: TEXT,
      caseStudy: TEXT,
      engagementDescription: TEXT,
      duration: STRING
    }, {
      timestamps: false
    });
  },

  down: (db, Sequelize) => {
    db.dropTable("case-studies");
  }
};
