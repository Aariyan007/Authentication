const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const PORT = 3000;


app.use('/',require('./routes/authRoutes.js'))

app.listen(PORT,()=>{
    console.log(`Authentication Backend is running on port ${PORT}`);
})