/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */
const Sequelize = require('sequelize');
const dbConfig = require('./db');

const con = new Sequelize(dbConfig);

try {
  con.authenticate();
  console.log('Connection has been etablished successfully');
} catch (error) {
  console.error('Unable to connect to the database: ', error);
}

module.exports = con;
