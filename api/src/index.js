const express = require('express');
const cors = require('cors');
const { json } = require('express');

const app = express();

app.use(json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',

}));

app.get('/test',(req,res)=>{
    res.json('this is the response');
});

app.post('/register',(req,res)=>{
    const {name,email,password} = req.body;
    res.json({
        name,
        email,
        password
    });
});

app.listen(4000);