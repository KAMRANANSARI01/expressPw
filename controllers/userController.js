//in this file we will write all the logics and routes code then send into routes file and then app.js

//exporting modelschema from db.schema.js file
const User = require("../models/db.schema.js");

exports.home = (req, res) => {
  res.send("this is home page");
};

//creating userdetails routes

exports.createUser = async(req, res) => {
  //extract info
  try {
    const { name, email,age } = req.body;
    const user = await User.create({
        name:name,
        email:email,
        age:age
    });

    //for checking some requirites
    if(!name || !email){
        throw new Error ( 'name and email are required.')
    }
    const userExist = User.findOne({email})
    if(userExist){
        throw new Error('user already exist.')
    }

    res.status(201).json({
        success : true,
        message : 'user created successfully',
        user
    })
  } catch (error) {
    console.log(error)
    res.status(401).json({
        success : false,
        message : error.message,
        
    })
  }
};


//reading data from database.

exports.readUser =async(req,res)=>{
     try {
        const users = await User.find({})//here is empty object bcz i want all users
        if (!users){
            throw new Error ( 'there is no entry exists please enter some data first.')
        }
        res.status(200).json({
            success : true,
            message : 'users find successfully',
            users
        })
     } catch (error) {
        console.log(error)
        res.status(401).json({
            success : false,
            message : error.message,
            
        })
     }
}

//delete specific user 

exports.deleteUser = async(req,res) =>{
     try {
         const userId = req.params.id
         const user = await User.findByIdAndDelete(userId)
         res.status(200).json({
            sucess: true,
            message:"user deleted successfully",
            user
         })
     } catch (error) {
        console.log(error)
        res.status(401).json({
            success : false,
            message : error.message,
            
        })
     }
}

//update user

exports.editUser = async(req,res)=>{
    try {
        const userId = req.params.id;
     const user = await User.findByIdAndUpdate(userId,req.body)
     res.status(200).json({
        sucess: true,
        message:"user updated successfully",
        user
     })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            success : false,
            message : error.message,
            
        })
    }
     
}