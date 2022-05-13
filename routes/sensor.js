const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');

const {sensor} = new PrismaClient();
router.get('/', async (req, res) => {
    const sensors = await sensor.findMany({
        select: {
            id: true,
            name: true
        },
        where: {

        }
    });

    res.json(sensors);
});


 
router.post('/', async (req, res) => {
    const {name} = req.body;
    const sensorExists = await sensor.findUnique({
        where: {
            name: name
        },
        select: {
            name: true
        }
    });
    if(sensorExists) {
        return res.status(400).json({
            msg: 'Sensor already exists'
        });
    }

    const newSensor = await sensor.create({
        data: {
            name: name
        }
    });

    res.json(newSensor);
});

module.exports = router;