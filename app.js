const express = require("express");
//for process .env 
require('dotenv').config();
//database import
const connectToDb = require('./config/db.js')
//creating the instance of express in app variable.
const app = express();
//init connection to db
connectToDb()
//server routing
app.get('/',(req,res)=>{
    res.send("<h1>This is home page.</h1>")
})


module.exports = app;