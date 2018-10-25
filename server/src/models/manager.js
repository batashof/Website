'use strict';
module.exports = (Sequelize, {STRING}) => {
  var Manager = Sequelize.define(
    'Manager',
    {
      name: {
        type: STRING,
        allowNull: false
      },
      position: {
        type: STRING,
        allowNull: false
      },
      photo: {
        type: STRING
      },
      address: {
        type: STRING
      },
      skype: {
        type: STRING
      },
      tel: {
        type: STRING
      },
      mail: {
        type: STRING
      }
    },
    {
      tableName: 'managers',
      timestamps: false
    }
  );
  Manager.associate = function(models) {
    Manager.belongsToMany(models.Job, {
      through: 'jobs_managers'
    });
  };
  return Manager;
};
