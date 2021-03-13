const mongoose =require("mongoose");
const Schema =mongoose.Schema;

const feedSchema = new Schema({
    post: {
        type: String,
        required: true
    },
    date: 
    { type: Date, default: Date.now },
    post_id: { 
        type: String, 
        default: null
    }
});

const Feed =mongoose.model("Profile", feedSchema);
module.exports = Feed;
