var express = require('express');
var students = require('../mockData/studentMockData');

var studentRouter = express.Router();

studentRouter.route('/students')
  .get((req, res) => {
    res.json(students);
  });

module.exports = studentRouter;