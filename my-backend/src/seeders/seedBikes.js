const Bike = require('../models/bike');

const seedBikes = async () => {
  await Bike.sync({ force: true });

  await Bike.bulkCreate([
    {
      description: 'Road Bike',
      rating: 4.5,
      price: 1200,
      quantity: 10,
      type: 'road',
      photoUrl: 'https://example.com/road_bike.jpg',
    },
    {
      description: 'Hybrid Bike',
      rating: 4.2,
      price: 900,
      quantity: 8,
      type: 'hybrid',
      photoUrl: 'https://example.com/hybrid_bike.jpg',
    },
    {
      description: 'Electric Mountain Bike',
      rating: 4.8,
      price: 3200,
      quantity: 3,
      type: 'electric',
      photoUrl: 'https://example.com/electric_mountain_bike.jpg',
    },
    {
      description: 'BMX Bike',
      rating: 4.3,
      price: 700,
      quantity: 15,
      type: 'bmx',
      photoUrl: 'https://example.com/bmx_bike.jpg',
    },
    {
      description: 'City Bike',
      rating: 4.1,
      price: 650,
      quantity: 12,
      type: 'city',
      photoUrl: 'https://example.com/city_bike.jpg',
    },
    {
      description: 'Folding Bike',
      rating: 4.4,
      price: 750,
      quantity: 7,
      type: 'folding',
      photoUrl: 'https://example.com/folding_bike.jpg',
    },
    {
      description: 'Gravel Bike',
      rating: 4.6,
      price: 1400,
      quantity: 5,
      type: 'gravel',
      photoUrl: 'https://example.com/gravel_bike.jpg',
    },
    {
      description: 'Touring Bike',
      rating: 4.5,
      price: 1600,
      quantity: 6,
      type: 'touring',
      photoUrl: 'https://example.com/touring_bike.jpg',
    },
    {
      description: 'Fixed Gear Bike',
      rating: 4.0,
      price: 500,
      quantity: 10,
      type: 'fixed-gear',
      photoUrl: 'https://example.com/fixed_gear_bike.jpg',
    },
    {
      description: 'Cruiser Bike',
      rating: 4.2,
      price: 850,
      quantity: 8,
      type: 'cruiser',
      photoUrl: 'https://example.com/cruiser_bike.jpg',
    },
    {
      description: 'Electric Road Bike',
      rating: 4.9,
      price: 3500,
      quantity: 4,
      type: 'electric',
      photoUrl: 'https://example.com/electric_road_bike.jpg',
    },
    {
      description: 'Kids Mountain Bike',
      rating: 4.3,
      price: 450,
      quantity: 15,
      type: 'kids',
      photoUrl: 'https://example.com/kids_mountain_bike.jpg',
    }
  ]
);
};

module.exports = seedBikes;
