// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating our User model
const UserSchema = new mongoose.Schema (
  {
    name: {
      type: String
    },
    {
      email: {
        type: String,
        require: true,
        unique: true
      }
    }
  }
)
