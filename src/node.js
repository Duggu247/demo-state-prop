
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const url = 'mongodb://localhost/tbl_user_master';

//Mongodb connection
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true });
const con = mongoose.connection;

con.on('open', () => {
    console.log('DB connected....');
});

app.use(express.json());
//route
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
app.use('/users',userRouter);
app.use('/',loginRouter);

app.listen(8080,()=>{console.log('Listening...')});