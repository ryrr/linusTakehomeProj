const Bike = require('../models/bike');

// Create a new bike
exports.createBike = async (req, res) => {
  const bike = await Bike.create(req.body);
  res.json(bike);
};

// Get all bikes
exports.getAllBikes = async (req, res) => {
  const bikes = await Bike.findAll();
  res.json(bikes);
};

// Get a specific bike by ID
exports.getBikeById = async (req, res) => {
  const bike = await Bike.findByPk(req.params.id);
  res.json(bike);
};

// Update a bike by ID
exports.updateBike = async (req, res) => {
  const bike = await Bike.findByPk(req.params.id);
  await bike.update(req.body);
  res.json(bike);
};

// Delete a bike by ID
exports.deleteBike = async (req, res) => {
  const bike = await Bike.findByPk(req.params.id);
  await bike.destroy();
  res.json({ message: 'Bike deleted' });
};
