'use strict';

const favoriteModel = require('./favorite/model');
const { Sequelize, DataTypes } = require('sequelize');
// const clothesModel = require('./clothes/model.js');
const petsModel = require('./pets/model');
const userModel = require('./user/model.js');
const dogModel = require('./dog/model')
const catModel = require('./cat/model')
const accessoriesModel = require('./accessories/model')
const Collection = require('./data-collection.js');


const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);
// const food = foodModel(sequelize, DataTypes);

// const clothes = clothesModel(sequelize, DataTypes);

const favorite = favoriteModel(sequelize, DataTypes);

const accessories = accessoriesModel(sequelize, DataTypes)
const cat = catModel(sequelize, DataTypes)
const dog = dogModel(sequelize, DataTypes)
const pets = petsModel(sequelize, DataTypes);

const users = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,

  //   food: new Collection(food),
  // clothes: new Collection(clothes),

  favorite: new Collection(favorite),

  pets: new Collection(pets),

  cat: new Collection(cat),
  dog: new Collection(dog),
  accessories: new Collection(accessories),

  users: new Collection(users),
  userModel: userModel(sequelize, DataTypes)
};