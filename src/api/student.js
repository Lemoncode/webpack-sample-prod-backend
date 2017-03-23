const express = require('express');
const students = require('../mockData/studentMockData');

const studentRouter = express.Router();

studentRouter.route('/students')
  .get((req, res) => {
    res.json(students);
  });

module.exports = studentRouter;