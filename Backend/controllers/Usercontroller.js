//import all dependencies required
const express = require('express');
var dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

require('dotenv').config();

//import config file which is holding secret keys

//set variable users as expressRouter
var users = express.Router();

//import user model
var { User } = require('../models/User');
var { Verify } = require('../models/verify');
//protect route with cors
users.use(cors())


/*Set route for registering new users*/ 
users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    //values should be those in the user model !important
    username: req.body.username,
    countrycode: req.body.countrycode,
    email: req.body.email,
    password: req.body.password,
    created: today,
    phonenumber: req.body.phonenumber,
  }
  User.findOne({
    //ensure email is unique, i.e the email is not already in the database
    email: req.body.email
  })
    .then(user => {
      //if the email is unique go ahead and create userData
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              //after successfully creating userData display registered message
              res.json({ status: user.email + ' registered' })
            })
            .catch(err => {
              //if an error occured while trying to create userData, go ahead and display the error
              res.send('error:' + err)
            })
        })
      } else {
        //if the email is not unique, display that email is already registered with an account
        res.json({ error: 'The email address ' + req.body.email + ' is registered with an account' })
      }
    })
    .catch(err => {
      //display error if an error occured
      res.send('error:' + err)
    })
})

/*Set route for logging in registered users*/
users.post('/login', (req, res) => {
  User.findOne({
    //check to see if an email like this is in the database
    email: req.body.email
  })
    .then(user => {
      //if the email exist in database then the user exists
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {

          const payload = {
            _id: user._id,
            username: user.username,
            countrycode: user.countrycode,
            email: user.email,
            password: user.password,
            phonenumber: user.phonenumber,
          }

          //sign payload with jwt to get token
          let token = jwt.sign(payload, {
            expiresIn: 1440
          })
          //after successful login display token and payload data
          res.send({ token, payload })
        } else {
          //if email and password dont match, display the message below
          res.json({ error: 'your email and password combination is wrong' })
        }
      } else {
        //if user cannot be found, display the message below
        res.json({ error: 'user not found' })
      }
    })
    //catch and display any error that occurs while trying to login user
    .catch(err => {
      res.send('error:' + err)
    })
})

//export routes usercontroller 
module.exports = users;