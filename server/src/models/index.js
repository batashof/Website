const fs        = require("fs");
const path      = require("path");
const Sequelize = require("sequelize");
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || "development";
const config    = require("../../db-config.js")[env];
const db        = {};

module.exports = {
  Sequelize,
  db: new Sequelize(config.database, config.username, config.password, config)
};

fs
  .readdirSync(__dirname)
  .filter(file => file !== "index.js" && !file.startsWith(".") && file.endsWith(".js"))
  .forEach(file => {
    const model = module.exports.db.import(path.join(__dirname, file));
    module.exports[model.name] = model;
  });

Object.keys(module.exports).forEach(modelName => {
  if (module.exports[modelName].associate) {
    module.exports[modelName].associate(module.exports);
  }
});
