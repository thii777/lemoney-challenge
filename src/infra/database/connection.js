const knex = require("knex");
require("dotenv").config();

const configuration = require("../../../knexfile");

const env = process.env.NODE_ENV || "development";

const connection = knex(configuration[env]);

module.exports = connection;
