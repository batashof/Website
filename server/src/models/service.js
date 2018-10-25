module.exports = (db, { STRING }) => {
  var Service = db.define(
    'Service',
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
      tableName: 'services',
      timestamps: false
    }
  );
  Service.associate = function(models) {
    Service.belongsToMany(models.CaseStudy, {
      through: 'services_case-studies'
    });
  };
  return Service;
};
