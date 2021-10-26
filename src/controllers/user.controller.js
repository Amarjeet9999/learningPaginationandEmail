const express = require('express');
const router = express.Router();
const User = require('../models/users.model');

const sendEmail = require("../utils/send-mail")


// Posting the data

router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);

        await sendEmail({
            to: user.email,
            subject: `Welcome to Email Verification system ${user.first_name} ${user.last_name}`,
            text: `Hi ${user.first_name}, Please confirm your email address`,
            html: "<b>Email VErification</b>",
        });

        return res.status(201).json({ user: user })
    } catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
});



// Getting the data
router.get("/", async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const size = +req.query.size || 3;
        const offset = (page - 1) * size;

        // Getting the users
        const user = await User.find({}).skip(offset).limit(size).lean().exec();

        // Finding The total pages
        const totalPage = Math.ceil((await User.find().countDocuments()) / size)

        return res.status(200).json({ data: { user, totalPage } })
    } catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
});


// Deleting the Users

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id, req.body);
        return res.status(201).json({ user: user });
    } catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
})

module.exports = router;