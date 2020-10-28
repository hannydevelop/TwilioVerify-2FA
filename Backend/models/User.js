/*Using an ORM (mongoose) to interact with a simple user database model*/
const mongoose = require('mongoose');

var User = mongoose.model('User', {
    username: { type: String },
    countrycode: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    phonenumber: { type: String },
});

//export dtabase model(user)
module.exports = { User };