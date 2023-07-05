'use strict';

const dogs = (sequelize, DataTypes) => sequelize.define('dogs', {
  name: {
    type: DataTypes.STRING,
    allowNull:false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = dogs;