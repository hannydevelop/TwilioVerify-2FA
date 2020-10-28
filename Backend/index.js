const express = require ('express');
var dotenv = require('dotenv');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const Usercontroller = require('./controllers/Usercontroller');

const { mong } = require('./db.js');
const port = process.env.PORT || 5000


var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));


app.listen (port, () => console.log('server started successfully at port : 5000'));
app.use('/users', Usercontroller);