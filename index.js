const express = require('express');
const Loaders = require('./src/loaders');
const bodyParser = require('body-parser');

const app = express();
Loaders.start();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./src/controllers/authController')(app);

app.listen(3000, ()=>{console.log('Servidor is running...')});