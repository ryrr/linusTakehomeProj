const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Bike = sequelize.define('Bike', {
  description: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.FLOAT, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  photoUrl: { type: DataTypes.STRING, allowNull: true },
});

module.exports = Bike;
