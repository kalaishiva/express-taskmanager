const mongoose = require('mongoose');


const connectionString = "mongodb+srv://Kalai:Kalai@mongoose@cluster0.4bzqp2i.mongodb.net/Task-Manager?retryWrites=true&w=majority";

mongoose
    .connect(connectionString)
    .then(() => console.log("Connected to the DB....."))
    .catch((err) => console.log(err))