const express = require("express");
//for process .env 
require('dotenv').config();
//database import
const connectToDb = require('./config/db.js')
//creating the instance of express in app variable.
const app = express();
//import cors
const cors = require("cors");

//init connection to db
connectToDb()
//using express middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
//exporting routes from routes.js file
const userRoutes = require('./routes/routes.js')
//server routing
app.use('/',userRoutes)


module.exports = app;