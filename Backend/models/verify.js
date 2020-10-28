/*Create Order Schema model for 2FA Verification Code

Using an ORM (Mongoose) to interact with a simple database model*/
const mongoose = require('mongoose');

var Verify = mongoose.model('Verify', {
    code: { type: String },
});

//export model
module.exports = { Verify };