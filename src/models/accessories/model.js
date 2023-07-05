
'use strict';
const accessories = (sequelize, DataTypes) => sequelize.define('accessories', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});
module.exports = accessories;