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
