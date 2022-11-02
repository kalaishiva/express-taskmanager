const express = require('express');
const router = express.Router();

//import from controller-tasks
const { getAllTasks, getTask, createTask, updateTask, deleteTask } = require('../controller/tasks');


//API routing

//app.get('/api/v1/tasks')  -- get all the task -- getAllTasks
//app.post('/api/v1/tasks')  -- create a new task  -- createTask
//app.get('/api/v1/tasks/:id')  -- get single task -- getTask
//app.patch('/api/v1/tasks/:id')  -- update task  -- updateTask
//app.delete('/api/v1/tasks/:id')  -- delete task  -- deleteTask
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;