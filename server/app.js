const express = require('express');
const dotenv = require('dotenv'); 
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
const connectDB = require("./config/db");

dotenv.config({path:'./config/config.env'});
connectDB();

//Router
app.use('/',require('./routes/index'));



app.listen(3002);