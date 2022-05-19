const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');
const userController = require('../controllers/sensor');
const {sensor} = new PrismaClient();

// Get all sensors
router.get('/', userController.getAllSensors);

// find sensor by id
router.get('/id/:id', userController.getSensorById);

// find sensor by name
router.get('/name/:name', userController.getSensorByName);

// update sensor by id
router.put('/id/:id', userController.updateSensorById);

//delete sensor by name
router.delete('/name/:name', userController.deleteSensorByName);

//create sensor by name
router.post('/', userController.createSensorByName);

module.exports = router;

