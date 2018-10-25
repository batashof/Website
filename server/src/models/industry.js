module.exports = (db, { STRING }) => {
  var Industry = db.define(
    'Industry',
    {
      title: {
        type: STRING,
        allowNull: false
      },
      tag: {
        type: STRING
      }
    },
    {
      tableName: 'industries',
      timestamps: false
    }
  );
  Industry.associate = function(models) {
    Industry.belongsToMany(models.CaseStudy, {
      through: 'industries_case-studies'
    });
  };
  return Industry;
};
