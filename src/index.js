const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const env = require('../environment.config');
const studentRouter = require('./api/student');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api', studentRouter);

app.listen(env.PORT);
console.log('Running on port: '+ env.PORT);