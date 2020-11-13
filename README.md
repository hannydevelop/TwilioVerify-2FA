# TwilioVerify-2FA

<div align="center">
<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1605249970317/WAaKbFcH5.gif">
 </div>

This repository contains the source codes for a simple application built to show how to implement 2FA with Twilio Verify in a MEVN Stack application. The front end of this application is located [here](https://twilioverifymevnapp.netlify.app/).

This application is built on JavaScript's framework **Vue** for it's front end, it uses **Express** and **Node Js** for it's backend and makes use of **MongoDB** as database. It uses MongoDB's ORM **Mongoose** and for deploying to production mode, it uses **MongoDB Atlas**.

## Project setup

First, clone this repository to your working environment with this command:

```bash
Git clone https://github.com/hannydevelop/TwilioVerify-2FA.git
```

Copy the folder **‘Backend’** into another location separate from **‘TwilioVerify-2FA’** and delete **‘Backend’** from **‘TwilioVerify-2FA’**. Navigate to TwilioVerify-2FA on your terminal with this code:

```bash
cd TwilioVerify-2FA
```

### Compiles and hot-reloads for front-end development

Read this Twilio article to add 2FA with Twilio Verify to this application. Your user.post method in usercontroller.js file should look like this after adding 2FA with Twilio verify:

```
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
 
          require('dotenv').config();
          client.verify.services(process.env.VERIFY)
          .verifications
          .create({to: payload.phonenumber, channel: 'sms'})
          .then(verification => console.log(verification.status));
 
          //verify code
          users.post('/verify', (req, res) =>{
            var veri = new Verify({
              code: req.body.code
          });
          veri.save((err, doc) => {
              if (!err) { 
          //verify 2fa token
          require('dotenv').config();
          client.verify.services(process.env.VERIFY)
          .verificationChecks
          .create({to: user.phonenumber, code: req.body.code})
          .then(verification_check => {
            if (verification_check.status === 'approved'){
            res.send(doc);}else { console.log('Error in saving product:' + JSON.stringify(err, undefined, 2)); }
          });
               }
              else { console.log('Error in saving product:' + JSON.stringify(err, undefined, 2)); }
          });
          })
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

```

Start application frontend with this code:

```javascript
// To install all dependencies
npm install

//Wait for dependencies to install then serve application
npm run serve
```

You should get a notification that your application is running on http://localhost:8080/ or http://localhost:8081/ depending on the port available in your working environment.

### Compiles and hot-reloads for back-end development

Navigate to your Backend folder with this command:

```bash
cd backend
```
Start application backend with this code:

```javascript
// To install all dependencies
npm install

//wait until dependencies are installed then serve application
node index.js
```
You should get this message in your terminal:

```
server started successfully at port : 3000
mongodb connected successfully
```

### Testing Application

You can now test your application. The test is pretty much the same as when you host the application in a production environment. Navigate to the frontend address  http://localhost:8080/ or http://localhost:8081/, register a new user and input token sent to user before they can have access to their account. 

<div align="center">
<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1605249955025/CxvymsUUw.png">
</div>

If you would want to test this application by hosting it in a production environment (Heroku/Netlify), I wrote this article for you. You can contact me on [twitter](https://twitter.com/hannydevelop) or feel free to create an issue if you have suggestions or questions concerning this repository.
