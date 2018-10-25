module.exports = (db, { STRING }) => {
  var Model = db.define(
    'Model',
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
      tableName: 'models',
      timestamps: false
    }
  );
  Model.associate = function(models) {
    Model.belongsToMany(models.CaseStudy, {
      through: 'models_case-studies'
    });
  };
  return Model;
};
