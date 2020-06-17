const Sequelize = require('sequelize');
const comment = require('./comment');
const tutorial = require('./tutorial');
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

const Tutorial = tutorial(sequelize, Sequelize);
const Comment = comment(sequelize, Sequelize);

Tutorial.hasMany(Comment, {
  as: 'comments'
});

Comment.belongsTo(Tutorial, {
  as: 'tutorial',
  foreignKey: 'tutorialId'
});

module.exports = {
  Tutorial,
  Comment,
  sequelize,
  Sequelize
};