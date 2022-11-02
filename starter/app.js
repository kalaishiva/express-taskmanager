require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routers/tasks')

//To parses incoming JSON requests and puts the parsed data into req.body
app.use(express.json());

//seperate routing for tasks
app.use('/api/v1/tasks', tasks);

//routes
// app.get('/hello', (req, res) => {
//     res.send('Task Manager App')
// })

const port = 3000;
app.listen(port, console.log(`Server is listening to ${port}...`))