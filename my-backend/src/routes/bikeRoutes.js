const express = require('express');
const router = express.Router();
const bikeController = require('../controllers/bikeController');

router.post('/bikes', bikeController.createBike);
router.get('/bikes', bikeController.getAllBikes);
router.get('/bikes/:id', bikeController.getBikeById);
router.put('/bikes/:id', bikeController.updateBike);
router.delete('/bikes/:id', bikeController.deleteBike);

module.exports = router;