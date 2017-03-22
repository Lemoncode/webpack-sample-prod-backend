var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var env = require('../environment.config');
var studentRouter = require('./api/student');

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api', studentRouter);

app.listen(env.PORT);
console.log('Running on port: '+ env.PORT);