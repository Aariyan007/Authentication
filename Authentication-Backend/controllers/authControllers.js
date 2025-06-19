const express = require('express')
const User = require('../models/auth_model')

const test = (req, res) => {
    res.json('Test is Working');
}

const registerUser = async (req, res) => {
    try {
        const { name, password, repeat_password, email, last_name, first_name, phone } = req.body;

        if (!password || password.length < 6 || password !== repeat_password) {
            return res.json({ error: "Either password is wrong or length is not enough" });
        }

        if (!email) {
            return res.json({ error: "Email is required" });
        }

        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ error: "Email Already Exists" });
        }

        if (!first_name) {
            return res.json({ error: "Fill The First Name" });
        }

        if (!last_name) {
            return res.json({ error: "Fill The Last Name" });
        }

        if (!phone) {
            return res.json({ error: "No phone Number" });
        }

        const user = await User.create({ name, password, repeat_password, email, last_name, first_name, phone });
        return res.json(user);

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Server error" });
    }
}

// Proper way to export multiple handlers
module.exports = {
    test,
    registerUser
};
