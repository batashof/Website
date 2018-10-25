'use strict';
module.exports = (db, { INTEGER, STRING }) => {
  var Quote = db.define(
    'Quote',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      caseStudyID: { type: INTEGER },
      text: { type: STRING }
    },
    {
      tableName: 'quotes',
      timestamps: false
    }
  );
  Quote.associate = function(models) {
    Quote.belongsTo(models.CaseStudy, {
      foreignKey: 'caseStudyID'
    });
  };
  return Quote;
};
