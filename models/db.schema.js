const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'name is required'],
    maxLength: [20, 'length must be less than 20'],
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => {
        return value > 18;
      },
      message: "user must be 18 years or older",
    },
  },
});

const User = mongoose.model('User',userSchema)

module.exports = User;