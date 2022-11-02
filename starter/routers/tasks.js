const express = require('express');
const router = express.Router();

//import from constroller-tasks
const { getAllTasks, getTask, createTask, updateTask, deleteTask } = require('../controller/tasks');

router.route('/').get(getAllTasks);

module.exports = router;