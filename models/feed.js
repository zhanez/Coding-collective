const mongoose =require("mongoose");
const Schema =mongoose.Schema;

const feedSchema = new Schema({
    post: {
        type: String,
        required: true
    },
    date: 
    { type: Date, default: Date.now }
})

const Feed =mongoose.model("Profile", feedSchema);
module.exports = Feed;
