const {PrismaClient} = require('@prisma/client');
const {sensor} = new PrismaClient();

const getAllSensors = async (req, res) => {
    const sensors = await sensor.findMany({
        select: {
            id: true,
            name: true
        },
        where: {

        }
    });

    res.json(sensors);
};

const getSensorById = async (req, res) => {
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
};

const getSensorByName = async (req, res) => {
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
};

const updateSensorById = async (req, res) => {


    if (req.body.name) {
        const sensorExists = await sensor.findUnique({
            where: {
                name: req.body.name
            },
            select: {
                name: true
            }
        });

        if(!sensorExists) {
            return res.status(400).json({
                msg: 'Sensor with name = ' + req.body.name + ' does not exist, choose another name'
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
            source: req.body.source,
            format: req.body.format
        }
    });

    if (!sensors) {
        return res.status(400).json({
            msg: 'Sensor NOT found'
        });
    }
    res.json(sensors);
};

const deleteSensorByName = async (req, res) => {
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
};

const createSensorByName = async (req, res) => {
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
            description: req.body.description,
            type: req.body.type,
            source: req.bodoy.source,
            format: req.body.format
        }
    });


    res.json(newSensor);
};

module.exports = {getAllSensors, getSensorById, getSensorByName, updateSensorById, deleteSensorByName, createSensorByName};
