const mongoose = require('mongoose');


const connectionString = "mongodb+srv://Kalai:kalai12345@cluster0.4bzqp2i.mongodb.net/Task-Manager?retryWrites=true&w=majority";

mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to the DB....."))
    .catch((err) => console.log(err))