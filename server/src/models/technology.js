module.exports = (db, { STRING, TEXT }) => {
  var Technology = db.define(
    "Technology",
    {
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
      tableName: "technologies",
      timestamps: false
    }
  );
  Technology.associate = function(models) {
    Technology.belongsToMany(models.CaseStudy, {
      through: "technologies_case-studies"
    });
  };
  return Technology;
};
