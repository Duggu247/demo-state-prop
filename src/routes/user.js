//add new user
//get user details
//update user detail

const express = require('express');
const routers = express.Router();
const User = require('../models/user')

routers.get('/user',async(req,res) => {
   try{
            const user = await User.find();
            res.json(user);
            console.log(user);
   }
   catch(err){
       res.send("Error : "+err);
   }
});

routers.post('/user', async(req,res) => {
    const user = new User({
        name : req.body.name,
        tech : req.body.tech,
        age : req.body.age
    });

    try{
        const response = await user.save();
        res.json(response);
    }
    catch(err){
        res.send('error');
    }
});

module.exports = routers;