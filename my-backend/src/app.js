const express = require('express');
const cors = require('cors');
const bikeRoutes = require('./routes/bikeRoutes');
const seedBikes = require('./seeders/seedBikes');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3001', 
        methods: 'GET,POST,PUT,DELETE',
        credentials: true, 
    })
);

app.use('/api', bikeRoutes);

sequelize.sync().then(seedBikes);

module.exports = app;
