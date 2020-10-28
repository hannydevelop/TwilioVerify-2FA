const dotenv = require('dotenv');

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL||'mongodb://localhost:27017/new', { useNewUrlParser: true, useUnifiedTopology: true },(err) =>{
    if (!err)
       console.log('mongodb connected successfully');
    else
    console.log('Error in DB connection:' + JSON.stringify(err, undefined, 2));
});
