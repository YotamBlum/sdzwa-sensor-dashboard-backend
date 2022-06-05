const {PrismaClient} = require('@prisma/client');
const {sensor} = new PrismaClient();

const getAllSensors = async (req, res) => {
    const sensors = await sensor.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            type: true,
            source: true,
            locationX: true,
            locationY: true,
            dateStr: true,
            status: true,
            installedAt: true,
            updatedAt: true,
            url: true,
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
            source: true,
            locationX: true,
            locationY: true,
            dateStr: true,
            status: true,
            installedAt: true,
            updatedAt: true,
            url: true,
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
            url: req.body.url
        }
    });
    


    if (!sensors) {
        return res.status(400).json({
            msg: 'Sensor NOT found'
        });
    }
    res.status(200).json({msg: 'success'});
};

const deleteSensorById = async (req, res) => {
    const sensorExists = await sensor.findUnique({
        where: {
            id: parseInt(req.params.id)
        },
        select: {
            id: true
        }
    });

    if(!sensorExists) {
        return res.status(400).json({
            msg: 'Sensor NOT found'
        });
    }

    const sensors = await sensor.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });

    res.status(200).json({
        msg: 'success'
    });
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
            msg: 'ERROR: sensor already exists!'
        });
    }


    const newSensor = await sensor.create({
        data: {
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            source: req.body.source,
            url: req.body.url
        }
    });


    res.status(200).json({ 
        msg: 'success'
    });
};

module.exports = {getAllSensors, getSensorById, getSensorByName, updateSensorById, deleteSensorById, createSensorByName};
