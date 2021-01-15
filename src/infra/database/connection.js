const knex = require("knex");
require("dotenv").config();

const configuration = require("../../../knexfile");

const env = "development";

const connection = knex(configuration[env]);

module.exports = connection;
