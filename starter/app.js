const express = require('express');
const app = express();
const tasks = require('./routers/tasks')


//seperate routing for tasks
app.use('/api/v1/tasks', tasks);

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

const port = 3000;
app.listen(port, console.log(`Server is listening to ${port}...`))