const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true  // removes extra spaces
    },
    last_name: {
        type: String,
        required: true,
        trim: true  // removes extra spaces
    },
    email: {
        type: String,
        required: true,
        unique: true, // email should be unique
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // you can adjust as needed
    },
    phone:{
        type:Number,
        trim:true,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
