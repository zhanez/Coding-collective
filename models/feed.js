const mongoose =require("mongoose");
const Schema =mongoose.Schema;

const feedSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    date: { 
        type: Date, 
        default: Date.now 
    }

    // post_id: { 
    //     type: String, 
    //     default: null
    // }
});

const Feed =mongoose.model("Feed", feedSchema);
module.exports = Feed;
