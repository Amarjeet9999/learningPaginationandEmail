require("dotenv").config();
const mongoose = require('mongoose');

const connect = () => {
    // const dbUrl = process.env.NODE_ENV === development ? "mongodb://localhost:27017/learningpagination" : "";

    return mongoose.connect("mongodb://localhost:27017/learningpagination")
}

module.exports = connect;