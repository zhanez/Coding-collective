const mongoose =require("mongoose");
const Schema =mongoose.Schema;
require('mongoose-type-email');


const profileSchema = new Schema({
    firstName:{ 
        type: String,
        required: true
    },
    lastName:{ 
        type: String,
        required: true
    },
    email:{
        type: mongoose.SchemaTypes.Email,
        required: true
    }
})






const Profile =mongoose.model("Profile", profileSchema);
module.exports = Profile;