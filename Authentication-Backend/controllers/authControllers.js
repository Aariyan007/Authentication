const express = require('express')
const User = require('../models/auth_model')
const {hashpasswords,comparePassword} = require('../helpers/auth')

const test = (req, res) => {
    res.json('Test is Working');
}

const registerUser = async (req, res) => {
    try {
        const { name, password, repeat_password, email, last_name, first_name, phone } = req.body;

        if (!password || password.length < 6 || password !== repeat_password) {
            return res.json({ error: "Either password is wrong or length is not enough" });
        }

        const hashed = await hashpasswords(password);

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

        const user = await User.create({ name, password : hashed, email, last_name, first_name, phone });
        return res.json(user);

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Server error" });
    }
}

const loginUser = async(req,res) =>{
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.json({error : "Incorrect Password or Email"});
        }

        const match = comparePassword(password,user.password)
        if(match){
           return res.json("Password Match");
        }
        if(!match){
            return res.json("Incorrect Password or Email")
        }
    }
    catch(err){
        console.log("Error Occured",err);
    }
}

// Proper way to export multiple handlers
module.exports = {
    test,
    registerUser,
    loginUser
};
