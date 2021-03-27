const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    intro: {
        type: String,
        required: false
    },
    githubURL: {
        type: String,
        required: false
    },
    linkedinURL: {
        type: String,
        required: false
    },
    facebookURL: {
        type: String,
        required: false
    },
    instagramURL: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    profilePic:{
        type: String,
    }
});

module.exports = User = mongoose.model("users", UserSchema);