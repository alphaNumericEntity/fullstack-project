const express = require('express');
const cors = require('cors');
const { json } = require('express');
const bcryptJs = require('bcryptjs');
const mongoose = require('mongoose');
const jwt  = require('jsonwebtoken');
const UserModel = require('./models/User');
const cookieParser = require('cookie-parser');
const timeout = require('connect-timeout');
require('dotenv').config()



const app = express();
app.use(json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',

}));
app.use(cookieParser());
//to put this middleaware in final of middleawares
app.use(timeout(36000000)); //10min
app.use((req, res, next) => {
   if (!req.timedout) next();
});

const bcryptSalt =  bcryptJs.genSaltSync(10);
const jwtSecret  =  'sbjasdnHHNBSVBNS62622u891';


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

app.post('/login', async (req,res)=>{
    const {email,password} = req.body;

    try {
        const user = await UserModel.findOne({
            email,
        });
        if (user) {
            if (bcryptJs.compareSync(password, user.password)) {
                jwt.sign({email: user.email, id:user._id}, jwtSecret, {}, (err, token)=> {
                    if (err) throw err;
                    res.cookie('token', token).status(200).json(user);
                });
            } else {
                res.status(401).json('Password incorrect');
            }
        } else {
            res.status(401).json('no user with email found');
        }
       
    } catch (e) {
        res.status(422).json(e);
    }
});

app.get('/profile', async (req,res)=> {

   
    const {token} = req.cookies;
    //res.json({token});
    if (token) {
         jwt.verify(token, jwtSecret, {}, async (err,cookieDecrypted) => {
            
            if (err) res.send(err);
            console.log(cookieDecrypted);
            const {name,email} = await UserModel.findById(cookieDecrypted.id);
            console.log( {name,email});
            return res.json({name,email});
        });
    } else {
        return res.json({});
    }
});


app.listen(4000);