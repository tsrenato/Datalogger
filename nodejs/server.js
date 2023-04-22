const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('dotenv').config();
require('./routes')(app, express);
require('./config/cors')(app);


async function start() {
    app.listen(process.env.APP_PORT, () => console.log('Server running on ' + process.env.APP_URL + ':' + process.env.APP_PORT));
};

start();