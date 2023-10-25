//firstly we import the express and then make a router instant using express.Routes method.
const express = require('express')
//here we are destructuring the home method from the usercontroller.js file.
const {home,createUser, readUser, deleteUser, editUser} = require('../controllers/userController.js');


//making router instance
const router = express.Router()

//using home 

router.get('/',home)

//for createuserdata
router.post('/createuser',createUser)

//for reading all users

router.get('/getuser',readUser)

//for delete the user
router.delete('/deleteUser/:id',deleteUser)

//for updated user
router.put('/edituser/:id',editUser)

module.exports = router;