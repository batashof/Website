'use strict';
module.exports = (Sequelize, DataTypes) => {
  var Job = Sequelize.define(
    'Job',
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.TEXT
      },
      spoiler: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      hot: {
        type: DataTypes.BOOLEAN
      },
      division: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: 'jobs',
      timestamps: false
    }
  );
  Job.associate = function(models) {
    Job.belongsToMany(models.Manager, {
      through: 'jobs_managers'
    });
  };
  return Job;
};
