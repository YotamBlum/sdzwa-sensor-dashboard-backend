const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');

const {sensor, post} = new PrismaClient();

router.post('/', async (req, res) => {
    const {title, content, sensor_id} = req.body;
    const sensorExists = await sensor.findUnique({
        where: {
            id: sensor_id
        }
    });

    if(!sensorExists) {
        return res.status(400).json({
            msg: 'Sensor NOT found'
        });
    }

    const newPost = await post.create({
        data: {
            title: title,
            content: content,
            sensor_id: sensor_id
        }
    });

    res.json(newPost); 

})

router.get('/', async (req, res) => {

    const {sensor_id} = req.body;

    const postExists = await post.findFirst({
        where: {
            sensor_id: sensor_id
        }
    });

    if(!postExists) {
        return res.status(400).json({
            msg: 'Post with sensor_id = ' + sensor_id + ' is NOT found'
        });
    }

    
    const posts = await post.findMany({
        select: {
            title: true,
            content: true,
            sensor_id: true,
            created_at: true,
            updated_at: true,
            id: true,
            sensor: true
        },
        where: {
            sensor_id: sensor_id
        }
    });
    
    return res.json(posts);

});

module.exports = router;