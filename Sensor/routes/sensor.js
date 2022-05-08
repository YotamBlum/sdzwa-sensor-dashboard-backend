const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');

const {sensor} = new PrismaClient();
router.get('/', async (req, res) => {
    const sensors = await sensor.findMany({
        select: {
            id: true,
            username: true,
            posts: true
        },
        where: {

        }
    });

    res.json(sensors);
});
 
router.post('/', async (req, res) => {
    const {username} = req.body;
    const sensorExists = await sensor.findUnique({
        where: {
            username: username
        },
        select: {
            username: true
        }
    });

    if(sensorExists) {
        return res.status(400).json({
            msg: 'Sensor already exists'
        });
    }

    const newSensor = await sensor.create({
        data: {
            username: username
        }
    });

    res.json(newSensor);
});

module.exports = router;