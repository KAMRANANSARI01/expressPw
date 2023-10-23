const mongoose = require("mongoose");
// connection to database that's url is store in the .env file.

const connectToDb = async()=>{
    //here we are handling this func by then and catch so we dont need to use the await.
    mongoose.connect(process.env.MONGO_URL)
    .then((connection)=>{
        console.log(`connected to database : ${connection.connection.host}`)
    })
    .catch((error)=>{
        console.log(error.message);
        process.exit(1)
    })
}

module.exports = connectToDb;