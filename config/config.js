require("dotenv").config();

module.exports = {
  development: {
    password: process.env.DB_PASSWORD || "JOHAN",
    database: process.env.DB_NAME || "Anime",
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "postgres",
    dialect: "postgres",
    logging: false,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "0.0.0.0",
    dialect: "postgres",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",

    host: "0.0.0.0",
    dialect: "postgres",
  },
};



