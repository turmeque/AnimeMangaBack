require("dotenv").config();

module.exports = {
  development: {
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    dialect: "postgres",
    logging: false,
  },

  test: {
    username: "root",
    password: null,
    database: "railway",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
