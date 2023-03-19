const express = require('express');
const cors = require('cors');
const { json } = require('express');
const bcryptJs = require('bcryptjs');
const mongoose = require('mongoose');
const UserModel = require('./models/User');
require('dotenv').config()



const app = express();
app.use(json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',

}));

const bcryptSalt =  bcryptJs.genSaltSync(10);


mongoose.connect(process.env.MONGO_URL);

app.get('/test',(req,res)=>{
    res.json('this is the response');
});

app.post('/register', async (req,res)=>{
    const {name,email,password} = req.body;

    try {
        const user = await UserModel.create({
            name,
            email,
            password : bcryptJs.hashSync(password, bcryptSalt),
        });
        res.status(200).send('User added successfully');
    } catch (e) {
        res.status(422).send(e);
    }
});

app.listen(4000);