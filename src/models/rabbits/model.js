'use strict';

const rabbits = (sequelize, DataTypes) => sequelize.define('rabbits', {
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

module.exports = rabbits;