const getAllTasks = (req, res) => {
    res.send('Send All Items...');
}
const createTask = (req, res) => {
    res.json(req.body);

}
const getTask = (req, res) => {
    res.json({ id: req.params.id });
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