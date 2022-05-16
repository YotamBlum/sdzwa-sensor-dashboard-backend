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


// find sensor by id
router.get('/:id', async (req, res) => {
    const sensors = await sensor.findUnique({
        select: {
            id: true,
            name: true,
            description: true,
            type: true,
            locationX: true,
            locationY: true,
            dateStr: true,
            status: true,
            installedAt: true,
            updatedAt: true
        },
        where: {
            id: parseInt(req.params.id)
        }
    });

    if (!sensors) {
        return res.status(400).json({
            msg: 'Sensor NOT found'
        });
    }


    res.json(sensors);
});

// find sensor by name
router.get('/name/:name', async (req, res) => {
    const sensors = await sensor.findUnique({
        select: {
            id: true,
            name: true
        },
        where: {
            name: req.params.name

        }
    });
    
    if (!sensors) {
        return res.status(400).json({
            msg: 'Sensor NOT found'
        });
    }

    res.json(sensors);

});


// update sensor by id
router.put('/:id', async (req, res) => {
    if (req.body.name) {
        const sensorExists = await sensor.findUnique({
            where: {
                name: req.body.name
            },
            select: {
                name: true
            }
        });
        
        if(sensorExists) {
            return res.status(400).json({
                msg: 'Sensor with name = ' + req.body.name + ' already exists, choose another name'
            });
        }
    }

    const sensors = await sensor.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            locationX: req.body.locationX,
            locationY: req.body.locationY,
            dateStr: req.body.dateStr,
            status: req.body.status,
            installedAt: req.body.installedAt,
            updatedAt: req.body.updatedAt
        }
    });

    res.json(sensors);
});

//delete sensor by name
router.delete('/:name', async (req, res) => {

    const sensorExists = await sensor.findUnique({
        where: {
            name: req.params.name
        },
        select: {
            name: true
        }
    });
    
    if(!sensorExists) {
        return res.status(400).json({
            msg: 'Sensor NOT found'
        });
    }

    const sensors = await sensor.delete({
        where: {
            name: req.params.name
        }
    });

    res.json(sensors);
});
 
router.post('/', async (req, res) => {
    
    const sensorExists = await sensor.findUnique({
        where: {
            name: req.body.name
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
            name: req.body.name,
            installedAt: req.body.installedAt
        }
    });

    res.json(newSensor);
});

module.exports = router;

