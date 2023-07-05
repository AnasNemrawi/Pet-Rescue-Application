'use strict';


const { Sequelize, DataTypes } = require('sequelize');

const userModel = require('./user/model.js');
const catModel = require('./cats/model.js');
const dogModel = require('./dogs/model.js');
const rabbitModel = require('./rabbits/model.js');
const accessoriesModel = require('./Accessories/model.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);

const users = userModel(sequelize, DataTypes);
const cats = catModel(sequelize, DataTypes);
const dogs = dogModel(sequelize, DataTypes);
const rabbits = rabbitModel(sequelize, DataTypes);
const accessories = accessoriesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: new Collection(users),
  cats: new Collection(cats),
  dogs: new Collection(dogs),
  rabbits: new Collection(rabbits),
  accessories: new Collection(accessories),
  userModel: userModel(sequelize, DataTypes)
};