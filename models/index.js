const Sequelize = require('sequelize');
const {
  database,
  username,
  password,
  host,
  dialect
} = require('../config/db');

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
});

sequelize.authenticate()
  .then(() => console.log('Successfully connected to database'))
  .catch((err) => console.log(`Unable to connect to the database: ${err}`));

