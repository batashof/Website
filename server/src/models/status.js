module.exports = (db, Sequelize) => {
  const Status = db.define("Status", {
    value: Sequelize.STRING
  }, {
    tableName: "status",
    timestamps: false
  });

  Status.removeAttribute("id");

  return Status;
};
