const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_PORT,
} = process.env;

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./development.sqlite"
  },
  testing: {
    dialect: "sqlite",
    storage: "./testing.sqlite"
  },
  production: {
    dialect: "postgres",
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host:     DB_HOST,
    port:     DB_PORT,
  }
};
