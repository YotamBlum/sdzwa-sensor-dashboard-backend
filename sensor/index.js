const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

app.use(express.json());

app.use('/api/sensor', require('./routes/sensor'));
app.use('/api/post', require('./routes/post'));


app.listen(5000, () => {
    console.log('Server is running on port 5000');
}) 

