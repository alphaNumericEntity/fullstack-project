const express = require('express');

const app = express();

app.get('/test',(req,res)=>{

    res.json('this is the response');
});

app.listen(4000);