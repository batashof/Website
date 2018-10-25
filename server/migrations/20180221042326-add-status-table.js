module.exports = {
  up: (db, Sequelize) => {
    db.createTable("status", {
      value: Sequelize.STRING
    }, {
      timestamps: false
    })
  },

  down: (db, Sequelize) => {
    db.dropTable("status");
  }
};
