'use strict';

const cats = (sequelize, DataTypes) => sequelize.define('cats', {
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

module.exports = cats;