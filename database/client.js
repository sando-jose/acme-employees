const { Client } = require("pg");
const { username, password } = require("./credentials.cjs");
const client = new Client(
  process.env.DATABASE_URL || `postgres://localhost:5432/acme_employee`
);
//export
module.exports = client;
