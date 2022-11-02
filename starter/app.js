const express = require('express');
const app = express();
const tasks = require('./routers/tasks')
const connectDB = require('./db/connect');
require('dotenv').config()

//To parses incoming JSON requests and puts the parsed data into req.body
app.use(express.json());

//seperate routing for tasks
app.use('/api/v1/tasks', tasks);

//routes
// app.get('/hello', (req, res) => {
//     res.send('Task Manager App')
// })

const port = 3000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log("db connected...")
        app.listen(port, console.log(`Server is listening to ${port}...`))

    } catch (error) {
        console.log(error)
    }

}
start()