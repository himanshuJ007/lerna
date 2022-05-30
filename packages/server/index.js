const express = require('express');
const app = express();
const PORT = 8000;

app.get('/server',(req,res)=>{res.send(`Server Running at ${PORT}` )})

app.listen(PORT,()=>{
    console.log(`Server Running at ${PORT}`);
})