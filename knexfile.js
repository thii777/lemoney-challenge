require("dotenv").config();

module.exports = {
  production: {
    client: "pg",
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    migrations: {
      directory: "./src/infra/database/migrations",
    },
    seeds: { directory: "./src/infra/seeds" },
    useNullAsDefault: true,
    pool: {
      min: 1,
      max: 10,
    },
  },
  development: {
    client: "pg",
    connection: {
      host: process.env.DATABASE_HOST_DEV,
      database: process.env.DATABASE_NAME_DEV,
      user: process.env.DATABASE_USER_DEV,
      password: process.env.DATABASE_PASSWORD_DEV,
    },
    migrations: {
      directory: "./src/infra/database/migrations",
    },
    seeds: { directory: "./src/infra/seeds" },
    useNullAsDefault: true,
    pool: {
      min: 1,
      max: 10,
    },
  },
};
