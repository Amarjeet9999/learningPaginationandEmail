const express = require('express');
const connect = require('./config/db')
const app = express();

app.use(express.json());


const usersController = require('./controllers/user.controller')

app.use("/users", usersController)

app.use("", (req, res) => {
    return res.status(404).send("No Route Found")
})

app.listen(3000, async () => {
    await connect();
    console.log("Listening at port 3000")
})