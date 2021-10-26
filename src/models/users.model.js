const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
}, {
    versionKey: false,
    timestamps: true
})


module.exports = mongoose.model("user", userSchema);


// {
//     "first_name":"Amarjeet",
//     "last_name":"Kumar",
//     "email":"amarjeet@gmail.com",
//     "age" : 21,
//     "mobile" :"1233214563"
// }