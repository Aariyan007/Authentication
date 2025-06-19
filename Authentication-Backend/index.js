const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
    console.log("Mongo DB Connected");
})
.catch((error)=>{
    console.error("Error : ",error);
})

app.use('/',require('./routes/authRoutes.js'))

app.listen(PORT,()=>{
    console.log(`Authentication Backend is running on port ${PORT}`);
})