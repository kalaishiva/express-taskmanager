const getAllTasks = (req, res) => {
    res.send('Send All Items...');
}
const createTask = (res, req) => {
    res.send('Create Task');
}
const getTask = (req, res) => {
    res.send('Get Task');
}
const updateTask = (req, res) => {
    res.send('Update the task');
}
const deleteTask = (req, res) => {
    res.send('Delete the task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}