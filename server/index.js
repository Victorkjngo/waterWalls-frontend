const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/index.js');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')));

app.get('/findMaxWalls', routes);

app.listen(3000, () => console.log('Example app listening on port', port, '!'))
