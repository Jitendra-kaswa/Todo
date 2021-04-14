const express = require('express');
const port = 8000;
const app= express();

app.get('/',(req,res)=>{
    return res.send("Hello Mitro");
})

app.listen(port);