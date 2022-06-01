const express = require('express');
const cors = require('cors');
// const routes = require('./routes/users');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
// app.use('/', routes); // to use routes

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api/sensor', require('./routes/sensor'));
app.use('/api/user', require('./routes/users'));


app.listen(port, () => {
    console.log('Server is running on port 5000. Docker on 49160');
})

