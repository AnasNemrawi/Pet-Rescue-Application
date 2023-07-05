'use strict';

const { Sequelize, DataTypes } = require('sequelize');
// const clothesModel = require('./clothes/model.js');
const petsModel = require('./pets/model');
const userModel = require('./user/model.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);
// const food = foodModel(sequelize, DataTypes);
const pets = petsModel(sequelize, DataTypes);
const users = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
//   food: new Collection(food),
  pets: new Collection(pets),
  users: new Collection(users),
  userModel: userModel(sequelize, DataTypes)
};