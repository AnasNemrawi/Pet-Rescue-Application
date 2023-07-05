'use strict';

const Accessories = (sequelize, DataTypes) => sequelize.define('Accessories', {
  name: {
    type: DataTypes.STRING,
    allowNull:false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Accessories;