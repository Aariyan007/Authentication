const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('Authentication Backend is running');
})

app.listen(PORT,()=>{
    console.log(`Authentication Backend is running on port ${PORT}`);
})