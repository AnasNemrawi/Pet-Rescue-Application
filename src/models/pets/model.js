'use strict';

const pets = (sequelize, DataTypes) => sequelize.define('pets', {
  name: {
    type: DataTypes.STRING,
    allowNull:false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = pets;